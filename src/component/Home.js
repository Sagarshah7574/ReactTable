import React from "react";

function Home() {
  // useEffect(() => {}, []);   === componentDidMount()

  // useEffect(() => {}, [third]);  === componentDidupdate()

  // useEffect(() => {
  //   return () => {
  //     second;
  //   };
  // }, []);

  return (
    <div>
      <h3>Login successfull</h3>
    </div>
  );
}

export default Home;
