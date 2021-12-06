export const renderResults = (context, JSONTreeView) => {
  const resultStatsElement = document.getElementById("results-stats");
  const resultElement = document.getElementById("result");
  if (Object.keys(context).length) {
    if (context.total) {
      resultStatsElement.style.display = "block";
      // setting results stats
      resultStatsElement.innerHTML = `Found ${context.total} results in ${context.time} seconds`;
    } else {
      resultStatsElement.style.display = "none";
    }
    if (context.resultsJson) {
      resultElement.style.display = "block";
      resultElement.innerHTML = "";
      var jsonView = new JSONTreeView("Results", context.resultsJson);
      jsonView.readonly = true;
      jsonView.expand(true);
      var textnode = document.createTextNode("No Results Found");
      // setting results json
      resultElement.appendChild(
        Object.keys(context.resultsJson).length ? jsonView.dom : textnode
      );
    } else {
      resultElement.style.display = "none";
    }
  }
};
