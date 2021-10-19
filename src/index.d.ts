interface AppbaseConfig {
  url: string;
  app: string;
  credentials?: string;
  username?: string;
  password?: string;
  enableTelemetry?: boolean;
  settings?: Object;
}

interface RenderConfig {
  renderItem?: () => any;
  renderHeader?: () => any;
  renderFooter?: () => any;
  onItemSelect?: () => any;
  renderNoResults?: () => any;
  useContextValue?: Boolean;
}

/* eslint-enable */
declare function createSuggestionsPlugin(
  appbaseClientConfig: AppbaseConfig,
  queryConfig: Object,
  renderConfig: RenderConfig
): Object;
export default createSuggestionsPlugin;
