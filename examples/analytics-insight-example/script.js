import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";
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
    customEvents: {
      platform: "web",
    },
  },
};
// reactivesearch api configuration
const rsApiConfig = {
  size: 3,
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
};

const suggestionsPlugin = createSuggestionsPlugin(
  appbaseClientConfig,
  {
    ...rsApiConfig,
  },
  { useContextValue: true }
);

autocomplete({
  container: "#autocomplete",
  plugins: [suggestionsPlugin],
  debug: false,
  openOnFocus: true,
  detachedMediaQuery: "none",
  onStateChange({ state: { context } }) {
    renderResults(context, JSONTreeView);
  },
  // ...
});