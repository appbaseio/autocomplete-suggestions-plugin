
require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "lib/index.js",
    minify: true,
    loader: {
      ".js": "jsx",
    },
    format: "esm",
    target: "es6",
    watch:true
  })
  .catch(() => process.exit(1));
