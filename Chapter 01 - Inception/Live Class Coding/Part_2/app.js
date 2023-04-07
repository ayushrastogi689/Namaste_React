const heading1 = React.createElement(
  "h1",
  {
    id: "title"
  },
  "Namaste JavaScript"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "sub-title"
  },
  "I love JavaScript"
);

const creatingDiv = React.createElement("div", { id: "container" }, [
  heading1,
  heading2
]);

const creatingRoot = ReactDOM.createRoot(document.getElementById("root"));

creatingRoot.render(creatingDiv);
