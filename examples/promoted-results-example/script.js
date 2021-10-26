import { autocomplete } from "@algolia/autocomplete-js";
import "@algolia/autocomplete-theme-classic";
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

// appbase client config object
const appbaseClientConfig = {
  app: "recipes-demo",
  credentials: "a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61",
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  settings: {
    enableQueryRules: true,
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
  enablePopularSuggestions: true,
  recentSuggestionsConfig: {
    size: 2,
    minChars: 5,
  },
  popularSuggestionsConfig: {
    size: 2,
    showGlobal: true,
  },
  size: 5,
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
