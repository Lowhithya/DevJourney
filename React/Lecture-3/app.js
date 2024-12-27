import React from "react";
import ReactDOM from"react-dom/client";


const root= ReactDOM.createRoot(document.getElementById("root"));
 


// Writing the above same using JSX:
const jsxHeading=(
<h1>Hello world from JSX!👋 </h1>,
<h2>Heloo world!</h2>

);
const Title = ()=>{
  return (
    <>
      <h1>Namste React 🚀!!</h1>
    </>
  )
}
const Component=()=>(
  <>  
    <Title />
    <h1>Hello guys from component</h1>
    <h2>Hello Guys</h2>
    <p>Hope everyione is doing Greate!</p>
  </> 

  );

// This can also be written as:
  //  const Components =()=> <h1>Hello Guys from Components!</h1>;
//  And also as:
// const Components=()=>(
//   <h1>
//     Hello Guys from Components!
//     </h1>
// )
root.render(<Component />);