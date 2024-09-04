const heading = React.createElement("h1", { id: "title" , style:{color : "red" }}, "prince");
const heading2 = React.createElement("h1" , {id:"brother"},"mohit");
  const container = React.createElement("div",{id:"container"},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);