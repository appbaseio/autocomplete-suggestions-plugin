### Use with React

This guide shows how to create a React Autocomplete component. It uses the `useEffect` hook to create and mount the component. We pass our `@appbaseio/autocomplete-suggestions-plugin` to act as a suggestion  source.

Creating the component
Start with some boilerplate for creating a React component. This component uses the useRef hook to create a mutable ref object, containerRef, to mount the autocomplete on. To learn more about this hook, check out the useRef React documentation.

All that you need to render is a div with the `id` as `autocomplete`.

```jsx
import React, { useEffect } from 'react';
import ReactDOM from "react-dom";

import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

// scaffolding described for autocomplete goes here
// see below snippet

function Autocomplete(props) {

  useEffect(() => {
    // initiate autocomplete-js
    // see definition in below snippet
    initAutocomplete();

    // cleanup before mounting
    return () => {
      autocomplete.destroy();
    };
  }, []);

  return <div id="autocomplete"></div>;
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Autocomplete />
  </StrictMode>,
  rootElement
);

```

Let's look at the `initAutocomplete()` function and other scaffolding for the plugin.

```jsx
// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947"
};

// reactivesearch api configuration
const rsApiConfig = {
  enableRecentSuggestions: true,
  enablePopularSuggestions: true,
  recentSuggestionsConfig: {
    size: 5,
    minChars: 5
  },
  popularSuggestionsConfig: {
    size: 5,
    showGlobal: true
  },
  size: 5,
};

// default usage: plugin to fetch suggestions
const defaultUsagePlugin = createSuggestionsPlugin(appbaseClientConfig, {
  ...rsApiConfig
});

// initiator for  autocomplete-js
const initAutocomplete = () => {
  autocomplete({
    container: "#autocomplete",
    placeholder: "Search for products",
    openOnFocus: true,
    debug: true,
    plugins: [defaultUsagePlugin]
    // use the below code incase trying to render
    // custom jsx using templates
    // renderer: { createElement, Fragment },
    // render({ children }, root) {
    //   render(children, root);
    // },
  });
};

```
