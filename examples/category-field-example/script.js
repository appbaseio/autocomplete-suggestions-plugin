import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947"
};

// reactivesearch api configuration
const rsApiConfig = {
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
  categoryField: "department.keyword"
};

const suggestionsPlugin = createSuggestionsPlugin(appbaseClientConfig, {
  ...rsApiConfig
});

autocomplete({
  container: "#autocomplete",
  plugins: [suggestionsPlugin],
  // debug: true,
  openOnFocus: true,
  detachedMediaQuery: "none"
  // ...
});
