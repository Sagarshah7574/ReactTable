// import logo from './logo.svg';
// import React, { Suspense } from "react";
import Registration from "./component/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FilteringTable } from "./component/FilteringTable";

// const Calendar = React.lazy(() => {
//   return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
//     Math.floor(Math.random() * 10) >= 4
//       ? import("./component/LifeCycle")
//       : Promise.reject(new Error())
//   );
// });

// const Demo = React.lazy(() => import("./component/LifeCycle"), 5000);
function App() {
  return (
    <>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Registration />
            {/* <Suspense fallback={<h1>Loading</h1>}>
              <Calendar data="hitesh" />
            </Suspense> */}
            {/* <FilteringTable /> */}
          </div>
        </div>
      </div>
    </>
  );
}

// function App() {
//   return (
//     <div>
//       <LifeCycle />
//     </div>
//   );
// }

export default App;
