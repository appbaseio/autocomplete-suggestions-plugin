import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

// appbase client config object
const appbaseClientConfig = {
  app: "recipes-demo",
  credentials: "a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61",
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  settings: {
    recordAnalytics: true,
  },
};

// reactivesearch api configuration
const rsApiConfig = {
  dataField: [
    {
      field: "title",
      weight: 5,
    },
    {
      field: "title.search",
      weight: 1,
    },

    {
      field: "NER.keyword",
      weight: 3,
    },
  ],
  highlight: true,
  enableRecentSuggestions: true,
  recentSuggestionsConfig: {
    size: 3,
    minHits: 2,
    index: "recipes-demo",
  },
  enablePopularSuggestions: true,
  popularSuggestionsConfig: {
    size: 3,
    minChars: 3,
    index: "recipes-demo",
  },
  index: "recipes-demo",
  size: 3,
};

const suggestionsPlugin = createSuggestionsPlugin(appbaseClientConfig, {
  ...rsApiConfig,
});

autocomplete({
  container: "#autocomplete",
  plugins: [suggestionsPlugin],
  // debug: true,
  openOnFocus: true,
  detachedMediaQuery: "none",
  // ...
});
