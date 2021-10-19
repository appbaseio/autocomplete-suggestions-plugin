/** @jsx createElement */
import Appbase from "appbase-js";
import {
  getIcon,
  processSuggestions,
  parseAppbaseClientObject,
} from "./utils/helper";
import { QUERY_ID } from "./utils/constants";
import "./index.css";
function createSuggestionsPlugin(
  appbaseClientConfig = {},
  queryConfig = {},
  renderConfig = {}
) {
  // Create appbase instance to use methods
  const appbaseRef = Appbase({
    ...parseAppbaseClientObject(appbaseClientConfig),
  });
  const sourceId = `suggestions_source_${Math.random() * Math.random() * 1000}`;
  return {
    getSources: function getSources(_ref) {
      var query = _ref.query,
        setQuery = _ref.setQuery,
        refresh = _ref.refresh,
        setContext = _ref.setContext;
      return [
        {
          sourceId: sourceId,
          getItems() {
            return appbaseRef
              .reactiveSearchv3(
                [
                  {
                    id: QUERY_ID,
                    type: "suggestion",
                    ...(!!query && { value: query }),
                    ...queryConfig,
                  },
                ],
                {
                  ...appbaseClientConfig.settings,
                }
              )
              .then(function (res) {
                if (renderConfig?.useContextValue) {
                  setContext({
                    total: res?.[QUERY_ID]?.hits?.total?.value,
                    time: res?.[QUERY_ID]?.took,
                    resultsJson: res?.[QUERY_ID]?.hits?.hits,
                  });
                }
                return processSuggestions(res?.suggestions?.hits?.hits || []);
              })
              .catch(function (err) {
                console.log("suggestions search error: ", err);
                return [];
              });
          },
          onSelect(props) {
            const { item, setQuery, refresh } = props;
            if (typeof renderConfig?.onItemSelect === "function") {
              renderConfig.onItemSelect(props);
              return;
            }
            setQuery(item.label);
            refresh();
          },
          templates: {
            header(props) {
              if (typeof renderConfig?.renderHeader === "function") {
                return renderConfig.renderHeader(props);
              }
              return null;
            },
            item(props) {
              const { item, createElement } = props;
              if (typeof renderConfig?.renderItem === "function") {
                return renderConfig.renderItem({
                  ...props,
                  setQuery,
                  refresh,
                  setContext,
                });
              }
              return (
                <div className="item">
                  <div className="item__content-wrapper">
                    {getIcon(item.type)(createElement)}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.label,
                      }}
                    ></span>
                  </div>
                  <div className="item__actions-wrapper">
                    {" "}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();

                        setQuery(item.value);
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
            footer(props) {
              if (typeof renderConfig?.renderFooter === "function") {
                return renderConfig.renderFooter(props);
              }
              return null;
            },
            noResults(props) {
              const { createElement } = props;
              if (typeof renderConfig?.renderNoResults === "function") {
                return renderConfig.renderNoResults(props);
              }
              return (
                <span style={{ marginLeft: "-9px" }}>No Results Found!</span>
              );
            },
          },
        },
      ];
    },
  };
}

export default createSuggestionsPlugin;
