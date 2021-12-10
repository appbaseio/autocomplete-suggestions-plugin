import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import React, { useEffect } from "react";
import JSONTree from "react-json-tree";
import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

import { jsonTreeTheme, renderResults } from "./utils";
import "./styles.css";

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
    size: 2,
    minHits: 2,
    minChars: 4,
    index: "best-buy-dataset",
  },
  enablePopularSuggestions: true,
  popularSuggestionsConfig: {
    size: 2,
    minChars: 3,
    minCount: 3,
    index: "best-buy-dataset",
  },
  index: "best-buy-dataset",
  size: 5,
};

function Autocomplete() {
  const [state, setstate] = useState({});
  useEffect(() => {
    // default usage: plugin to fetch suggestions
    const defaultUsagePlugin = createSuggestionsPlugin(
      appbaseClientConfig,
      {
        ...rsApiConfig,
      },
      {
        onItemSelect: (props) => {
          const {
            item: { label },
            setQuery,
            refresh,
          } = props;
          setQuery(label.replace(/(<([^>]+)>)/gi, ""));
          renderResults({
            value: label.replace(/(<([^>]+)>)/gi, ""),
            url: appbaseClientConfig.url,
            app: appbaseClientConfig.app,
            credentials: appbaseClientConfig.credentials,
            settings: appbaseClientConfig.settings,
            query: {
              dataField: rsApiConfig.dataField,
            },
          }).then((item) => {
            setstate(item);
          });
          refresh();
        },
      }
    );
    // initiate autocomplete-js
    autocomplete({
      container: "#autocomplete",
      placeholder: "Search for products",
      openOnFocus: true,
      // debug: true,
      plugins: [defaultUsagePlugin],
      detachedMediaQuery: "none",
      // use the below code incase trying to render
      // custom jsx
      // renderer: { createElement, Fragment },
      // render({ children }, root) {
      //   render(children, root);
      // },
    });

    // cleanup before mounting
    return () => {
      autocomplete.destroy();
    };
  }, []);

  return (
    <>
      <div id="autocomplete"></div>
      {!!state?.hits?.total.value && !!state?.took ? (
        <span className="result-stats">
          {`Displaying ${state?.hits?.hits.length} results, of ${state?.hits?.total?.value} results found in ${state?.took} ms`}
        </span>
      ) : null}
      {state?.hits?.hits && Object.keys(state?.hits?.hits).length ? (
        <div className="response-json">
          <JSONTree
            theme={jsonTreeTheme}
            invertTheme={true}
            data={state?.hits?.hits}
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
