/** @jsx h */
import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";
import { h } from "preact";
import { getIcon } from "./utils";
import { renderResults } from "./utils";

var JSONTreeView = require("json-tree-view");
// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947",
  settings: {
    userId: "s@s",
    enableQueryRules: true,
    recordAnalytics: true,
  },
};

// reactivesearch api configuration
const rsApiConfig = {
  highlight: true,
  dataField: [
    {
      field: "name.autosuggest",
      weight: "1",
    },
    {
      field: "name",
      weight: "3",
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
  size: 3,
};

// default usage: plugin to fetch suggestions
const defaultUsagePlugin = createSuggestionsPlugin(
  appbaseClientConfig,
  {
    ...rsApiConfig,
  },
  {}
);

// advanced usage: plugin to fetch suggestions and
// render custom ui for header, footer and suggestion items
const advancedUsagePlugin = createSuggestionsPlugin(
  appbaseClientConfig,
  {
    ...rsApiConfig,
    enableRecentSuggestions: false,
  },
  {
    renderItem: (props) => {
      const { item, setQuery, refresh } = props;
      if (item.type === "index") {
        return (
          <a
            className="aa-item product-item"
            href={
              item._source?.url ??
              `https://www.google.com/search?q=${item.value}`
            }
            target="_blank"
            rel="noreferrer"
          >
            <div className="product-image">
              <img src={item._source.image} alt={item.value} />
            </div>
            <div className="product-details">
              <h4>{item.value}</h4>
              <p>{item._source.shortDescription}</p>
            </div>
          </a>
        );
      }
      return (
        <div className="item">
          <div className="item__content-wrapper">
            {getIcon(item.type)()}
            <span
              dangerouslySetInnerHTML={{
                __html: item.value,
              }}
            ></span>
          </div>
          <div className="item__actions-wrapper">
            {" "}
            <button
              onClick={(e) => {
                e.stopPropagation();

                setQuery(item.label.replace(/(<([^>]+)>)/gi, ""));
                refresh();
              }}
              type="button"
              className="set-search-arrow"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"></path>
              </svg>
            </button>
          </div>
        </div>
      );
    },
    onItemSelect: (props) => {
      const {
        item: { url, label },
        setQuery,
        refresh,
      } = props;

      if (url) {
        window.open(url);
      } else if (item.type !== "index") {
        setQuery(label.replace(/(<([^>]+)>)/gi, ""));
        refresh();
      }
    },
    renderHeader: (props) => {
      return (
        <h4>
          Products Listing <hr style={{ borderColor: "#d7d5f5" }} />
        </h4>
      );
    },
    renderFooter: (props) => {
      return <hr style={{ borderColor: "#d7d5f5" }} />;
    },
    renderNoResults: (props) => {
      if (props.state.query === "") {
        return <p>Search for something to get direct product suggestions!</p>;
      } else {
        return <p>No products found! Try searching for something else!</p>;
      }
    },
    useContextValue: true, // we will use context value of the advanced plugin
  }
);

autocomplete({
  container: "#autocomplete",
  placeholder: "Search for products",
  openOnFocus: true,
  // debug: true, //uncomment to keep the dropdown open
  plugins: [defaultUsagePlugin, advancedUsagePlugin],
  detachedMediaQuery: "none",
  onStateChange({ state: { context } }) {
    renderResults(context, JSONTreeView);
  },
});
