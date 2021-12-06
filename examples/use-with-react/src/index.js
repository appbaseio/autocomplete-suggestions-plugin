import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import "./styles.css";
import { jsonTreeTheme } from "./utils";

import JSONTree from "react-json-tree";
import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947",
  settings: { userId: "s@s", recordAnalytics: true },
};

// reactivesearch api configuration
const rsApiConfig = {
  highlight: true,
  dataField: [
    {
      field: "name.autosuggest",
      weight: 1,
    },
    {
      field: "name",
      weight: 3,
    },
  ],
  enableRecentSuggestions: true,
  recentSuggestionsConfig: {
    size: 3,
    minHits: 2,
    index: "best-buy-dataset",
  },
  enablePopularSuggestions: true,
  popularSuggestionsConfig: {
    size: 3,
    minChars: 3,
    index: "best-buy-dataset",
  },
  index: "best-buy-dataset",
};

// default usage: plugin to fetch suggestions
const defaultUsagePlugin = createSuggestionsPlugin(
  appbaseClientConfig,
  {
    ...rsApiConfig,
  },
  {
    useContextValue: true,
  }
);

// initiator for  autocomplete-js
const initAutocomplete = (setstate) => {
  autocomplete({
    container: "#autocomplete",
    placeholder: "Search for products",
    openOnFocus: true,
    // debug: true,
    plugins: [defaultUsagePlugin],
    detachedMediaQuery: "none",
    onStateChange({ state: { context } }) {
      setstate({ ...context });
    },
    // use the below code incase trying to render
    // custom jsx
    // renderer: { createElement, Fragment },
    // render({ children }, root) {
    //   render(children, root);
    // },
  });
};

function Autocomplete() {
  const [state, setstate] = useState({});
  useEffect(() => {
    // initiate autocomplete-js
    initAutocomplete(setstate);

    // cleanup before mounting
    return () => {
      autocomplete.destroy();
    };
  }, []);

  return (
    <>
      <div id="autocomplete"></div>
      {!!state.time && !!state.total ? (
        <span className="result-stats">
          Found <b>{state.total}</b> results in <b>{state.time}</b> ms
        </span>
      ) : null}
      {state.resultsJson && Object.keys(state.resultsJson).length ? (
        <div className="response-json">
          <JSONTree
            theme={jsonTreeTheme}
            invertTheme={true}
            data={state.resultsJson}
            shouldExpandNode={() => true}
            keyPath={["products"]}
          />
        </div>
      ) : null}
    </>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Autocomplete />
  </StrictMode>,
  rootElement
);
