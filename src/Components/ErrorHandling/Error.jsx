import React from "react";

function Error({ error }) {
  return (
    <>
      <h2 style={{ color: "white", textAlign: "center", margin: " 0 auto", padding: " 50px 0" }}>{error}</h2>
    </>
  );
}

export default Error;
