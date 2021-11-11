import { onMounted } from "vue";
import { autocomplete } from "@algolia/autocomplete-js";

import "@algolia/autocomplete-theme-classic";

import { createElement } from "./adapter";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947",
  settings: {
    recordAnalytics: true,
  },
};

// reactivesearch api configuration
const rsApiConfig = {
  highlight: true,
  dataField: [
    {
      field: "name.autosuggest",
      weight: 1
    },
    {
      field: "name",
      weight: 3
    }
  ],
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
  size: 5
};

// default usage: plugin to fetch suggestions
const defaultUsagePlugin = createSuggestionsPlugin(appbaseClientConfig, {
  ...rsApiConfig
});

export default {
  name: "App",
  setup() {
    onMounted(() => {
      autocomplete({
        container: "#autocomplete",
        placeholder: "Search",
        openOnFocus: true,
        plugins: [defaultUsagePlugin],
        detachedMediaQuery: "none"
      });
    });
  },
  render() {
    const style = {
      margin: "0 auto",
      "max-width": "640px",
      width: "100%"
    };

    return createElement(
      "div",
      { style },
      createElement("div", { id: "autocomplete" })
    );
  }
};
