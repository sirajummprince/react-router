import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const Loader = ({ type, color }) => {
  //   const [loader, setLoader] = useState(true);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLoader(false);
  //     }, 1000);
  //   }, [loader]);
  return (
    <div style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }}>
      <ReactLoading type={"spin"} color={"black"} height={50} width={50} />
    </div>
  );
};

export default Loader;
