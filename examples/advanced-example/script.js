/** @jsx h */
import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";
import { h } from "preact";
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
      const { item } = props;
      return (
        <a
          className="aa-item product-item"
          href={
            item._source
              ? item._source.url
              : `https://www.google.com/search?q=${item.value}`
          }
          target="_blank"
          rel="noreferrer"
        >
          <div className="product-image">
            <img
              src={
                item._source
                  ? item._source.image
                  : "https://m.media-amazon.com/images/I/81c83vd4O+L._SY879_.jpg"
              }
              alt={item.value}
            />
          </div>
          <div className="product-details">
            <h4>{item.value} (Promoted)</h4>
            <p>
              {item._source
                ? item._source.shortDescription
                : "Samsung offers latest smartphones with advanced technology and design. Buy 3G, 4G, dual sim smartphone at best prices in India."}
            </p>
          </div>
        </a>
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
  debug: true, //uncomment to keep the dropdown open
  plugins: [defaultUsagePlugin, advancedUsagePlugin],
  detachedMediaQuery: "none",
  onStateChange({ state: { context } }) {
    renderResults(context, JSONTreeView);
  },
});
