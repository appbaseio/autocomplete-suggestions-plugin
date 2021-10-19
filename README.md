<div align="center">

[![Version](https://img.shields.io/npm/v/@appbaseio/autocomplete-suggestions-plugin.svg?style=flat-square)](https://www.npmjs.com/package/@appbaseio/autocomplete-suggestions-plugin) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

</div>

# @appbase/autocomplete-suggestions-plugin


The `@appbase/autocomplete-suggestions-plugin`  is a Suggestions plugin that adds [Query Suggestions](#) powered by [appbase-js](https://www.npmjs.com/package/appbase-js) client, to your autocomplete.

## Installation

```sh
yarn add @appbase/autocomplete-suggestions-plugin
# or
npm install @appbase/autocomplete-suggestions-plugin
```

## Usage

## Usage

To get started, you need a container for your autocomplete to go in. If you don't have one already, you can insert one into your markup:

```js title="HTML"
<div id="autocomplete"></div>
```

Then, insert your autocomplete into it by calling the [`autocomplete`](https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/) function and providing the [`container`](https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/#param-container). It can be a [CSS selector](https://developer.mozilla.org/docs/Web/CSS/CSS_Selectors) or an [Element](https://developer.mozilla.org/docs/Web/API/HTMLElement).

Import the [@appbaseio/autocomplete-suggestions-plugin](https://github.com/appbaseio/autocomplete-suggestions-plugin) plugin utility and create a suggestions plugin by passing [appbase-js](https://www.npmjs.com/package/appbase-js) client config and the [query config](https://docs.appbase.io/docs/search/reactivesearch-api/reference) to fetch suggestions. Additionally, you can pass the third argument for UI customisation.

As a final step, pass this plugin to the `plugins` property while calling [`autocomplete`](https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-js/autocomplete/) function.

Make sure to provide a container (e.g., a `div`), not an `input`. Autocomplete generates a fully accessible search box for you.

```js title="JavaScript"
import { autocomplete } from '@algolia/autocomplete-js';
import createSuggestionsPlugin from "@appbaseio/autocomplete-suggestions-plugin";

// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947",
};

// reactivesearch api configuration
const rsApiConfig = {
  enableRecentSuggestions: true,
  enablePopularSuggestions: true,
  recentSuggestionsConfig: {
    size: 5,
    minChars: 5,
  },
  popularSuggestionsConfig: {
    size: 5,
    showGlobal: true,
  },
  size: 5,
};

const suggestionsPlugin = createSuggestionsPlugin(appbaseClientConfig, {
  ...rsApiConfig,
});

autocomplete({
  container: '#autocomplete',
  plugins: [suggestionsPlugin],
  // ...
});
```

Click [here](https://codesandbox.io/embed/example-autocomplete-js-58fmn?fontsize=14&hidenavigation=1&theme=dark) to checkout the advanced example to see all properties in action.
[![image](https://user-images.githubusercontent.com/57627350/137906345-52fb90d2-9eca-471d-82ba-9500b81bf77b.png)](https://codesandbox.io/embed/example-autocomplete-js-58fmn?fontsize=14&hidenavigation=1&theme=dark)

---
## Documentation

1. **appbaseClientConfig `Object` `Required`**
    
    It is the first parameter accepted by `createSuggestionsPlugin()`, used for connecting to the **appbase client.**  It accepts the following properties:
    
    - **url** `String` `Required`
    - **app** `String` `Required` name of the index as displayed in the [dashboard](https://dashboard.appbase.io/)
    - **username** `String` username as displayed in the [access control dashboard](https://docs.appbase.io/docs/security/credentials/)
    - **password** `String` password as displayed in the [access control dashboard](https://docs.appbase.io/docs/security/credentials/)
    - **credentials** `String` `Required` API key to access the cluster.
        
        `credentials` are not required if, `url` already contains it.
        
    - **enableTelemetry** `Boolean`when set to `false`, it disables telemetry. Defaults to `true`.
    - **settings** `Object` an object consisting of the properties to control your search experience. Read more [here](https://docs.appbase.io/docs/search/reactivesearch-api/reference/#settings-properties).
    <br/>
2. **queryConfig `Object` `Required`**
    
    It is an object representing a ReactiveSearch query. Read about the properties accepted in this object [here](https://docs.appbase.io/docs/search/reactivesearch-api/reference/#query-properties).

    <br/>
    
3. **renderConfig `Object`**
    
    Although the plugin already comes with a default UI interface, One can customize the UI/ UX according to their needs using the **renderConfig** object**.**
    
    It accepts the following properties:
    
    - **renderItem `Function`**
        
        It is a callback that accepts parameters, one of them is the suggestion item itself, utilize it to render a custom UI for every suggestion.

        ```jsx
        createSuggestionsPlugin(
            ...,
            ...,
            {
                renderItem: (props) => {
                    const { item, setQuery, refresh } = props;
                    if (item.type === "index") {
                    return (
                        <a
                        className="aa-item product-item"
                        href={item._source.url}
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
                },
            }
        )
        ``` 
        
    - **onItemSelect `Function`**
        
        It is a callback that accepts parameters(algolia control params), one of them is the `setQuery` function, utilize it to customize the behavior of what happens when an individual suggestion item is clicked.

        ```jsx
        createSuggestionsPlugin(
            ...,
            ...,
            {
                renderItem: (props) => {
                    ...
                },
                onItemSelect: (props) => {
                    const {
                        item: { url, label },
                        setQuery,
                        refresh
                    } = props;
        
                    if (url) {
                        setQuery(label);
                        window.open(url);
                    } else {
                        setQuery(label);
                        refresh();
                    }
                },
            }
        )
        ``` 
        
    - **renderHeader `Function`**
        
        It is a callback that accepts parameters(algolia params), one may utilize it to render a custom header before the suggestions.
        ```jsx
        createSuggestionsPlugin(
            ...,
            ...,
            {
                renderItem: (props) => {
                    ...
                },
                onItemSelect: (props) => {
                    ...
                },
                renderHeader: (props) => {
                    return (
                        <h4>
                         Products Listing <hr style={{ borderColor: "#d7d5f5" }} />
                        </h4>
                    );
                },
            }
        )
        ``` 
     
    - **renderFooter `Function`**
        
        It is a callback that accepts parameters(algolia params), one may  utilize it to render a custom footer after the suggestions.

        ```jsx
        createSuggestionsPlugin(
            ...,
            ...,
            {
                renderItem: (props) => {
                    ...
                },
                onItemSelect: (props) => {
                    ...
                },
                renderHeader: (props) => {
                    ...
                },
                renderFooter: (props) => {
                    return <hr style={{ borderColor: "#d7d5f5" }} />;
                },
            }
        )
        ```
        

        
    - **renderNoResults `Function`**
        
        It is a callback that accepts parameters(algolia params), one may utilize it to render a custom UI when no results are found.
        
        ```jsx
        createSuggestionsPlugin(
            ...,
            ...,
            {
                renderItem: (props) => {
                    ...
                },
                onItemSelect: (props) => {
                    ...
                },
                renderHeader: (props) => {
                    ...
                },
                renderFooter: (props) => {
                    ...
                },
                renderNoResults: (props) => {
                    if (props.state.query === "") {
                        return <p>Search for something to get direct product suggestions!</p>;
                    } else {
                        return <p>No products found! Try searching for something else!</p>;
                    }
                }
            }
        )
        ```
        
    - **useContextValue `Boolean`** When set to true, the context value is set with the following value:
        
        ```jsx
        {
            total: ...,           // total results found for the entered query
            time: ...,            // total time taken to perform the search
            resultsJson: ...      // the results that were found in json format
        }
        ```
        
        One can use this context value to display results stats.

        ```jsx
        createSuggestionsPlugin(
            ...,
            ...,
            {
                renderItem: (props) => {
                    ...
                },
                onItemSelect: (props) => {
                    ...
                },
                renderHeader: (props) => {
                    ...
                },
                renderFooter: (props) => {
                    ...
                },
                renderNoResults: (props) => {
                    if (props.state.query === "") {
                        return <p>Search for something to get direct product suggestions!</p>;
                    } else {
                        return <p>No products found! Try searching for something else!</p>;
                    }
                },
                useContextValue: true
            }
        )
        ```