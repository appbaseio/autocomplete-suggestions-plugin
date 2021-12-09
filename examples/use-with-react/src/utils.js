export const jsonTreeTheme = {
  scheme: "monokai",
  author: "wimer hazenberg (http://www.monokai.nl)",
  base00: "#272822",
  base01: "#383830",
  base02: "#49483e",
  base03: "#75715e",
  base04: "#a59f85",
  base05: "#f8f8f2",
  base06: "#f5f4f1",
  base07: "#f9f8f5",
  base08: "#f92672",
  base09: "#fd971f",
  base0A: "#f4bf75",
  base0B: "#a6e22e",
  base0C: "#a1efe4",
  base0D: "#66d9ef",
  base0E: "#ae81ff",
  base0F: "#cc6633",
};

export const renderResults = ({
  value,
  url,
  app,
  credentials,
  settings,
  query,
}) => {
  return fetch(`${url}/${app}/_reactivesearch.v3`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Basic ${btoa(credentials)}`,
    },
    body: JSON.stringify({
      settings,
      query: [
        {
          id: "search",
          type: "search",
          ...query,
          value,
        },
      ],
    }), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((data) => {
      return data.search;
    })
    .catch((err) => {
      console.error(err);
    });
};
