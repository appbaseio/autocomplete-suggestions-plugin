import { onMounted } from "vue";
import { autocomplete } from "@algolia/autocomplete-js";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

import "@algolia/autocomplete-theme-classic";

import { renderResults } from "./utils";
import { createElement } from "./adapter";
var JSONTreeView = require("json-tree-view");
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
  { useContextValue: true }
);

export default {
  name: "App",
  setup() {
    onMounted(() => {
      autocomplete({
        container: "#autocomplete",
        placeholder: "Search",
        openOnFocus: true,
        plugins: [defaultUsagePlugin],
        detachedMediaQuery: "none",
        onStateChange({ state: { context } }) {
          renderResults(context, JSONTreeView);
        },
        debug: true,
      });
    });
  },
  render() {
    const style = {
      "font-family": "Roboto, Arial, Helvetica, sans-serif",
      margin: "0 auto",
      "max-width": "640px",
      width: "100%",
    };

    return createElement("div", { style }, [
      createElement("div", { id: "autocomplete" }),
      createElement("div", { id: "results-stats" }),
      createElement("div", { id: "result" }),
    ]);
  },
};
