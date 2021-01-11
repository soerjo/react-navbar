import React from "react";

function Button() {
  const hello = () => {
    console.log("Hallo");
  };

  return (
    <div>
      <button onClick={hello}>Katakan Hello</button>
    </div>
  );
}

export default Button;
