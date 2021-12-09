const RecentSearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    alt="Recent Search"
    height="20"
    width="20"
    viewBox="0 0 24 24"
    style={{ fill: "#707070" }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
  </svg>
);

const PopularSeachIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    alt="Popular Search"
    height="20"
    width="20"
    viewBox="0 0 24 24"
    style={{ fill: "#707070" }}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" style={{ fill: "#707070" }}>
    <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
  </svg>
);

const PromotedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    style={{ fill: "#707070" }}
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </svg>
);

export const getIcon = (type) => {
  switch (type) {
    case "index":
      return SearchIcon;
    case "recent":
      return RecentSearchIcon;
    case "popular":
      return PopularSeachIcon;
    case "promoted":
      return PromotedIcon;
    default:
      return () => {};
  }
};

export const processSuggestions = (results) => {
  return results.map(
    ({
      label = "---",
      url = "---",
      value = "---",
      _suggestion_type = "index",
      _source,
    }) => ({
      value,
      url: url,
      type: _suggestion_type,
      label,
      _source,
    })
  );
};

export const processResults = (results) => {
  return results.map((item) => item);
};

export const truncate = (input, limit = 50) =>
  input.length > limit ? `${input.substring(0, limit)}...` : input;

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
