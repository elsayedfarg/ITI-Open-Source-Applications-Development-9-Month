//======================================
// // Class based component
// import React from "react";

// class App extends React.Component {
//   render() {
//     return <div>Hello Zag</div>;
//   }
// }

// export default App;

//======================================

// // Functional component
// function App() {
//   return <div>Hello Zag</div>;
// }
// export default App;

//======================================
// shortcut for fast component creation (rafce)
// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./App.css";
import BasicExample from "./Accordion";

const App = () => {
  const image = "1.jpeg";
  return (
    <>
      <BasicExample />
      <Header />
      <p className="">test class</p>
      <img src={image} alt="" />
      <br />
      <button onClick={() => console.log("done")}>child</button>
    </>
  );
};

export default App;
