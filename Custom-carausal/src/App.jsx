import { useState } from "react";

import "./App.css";

function App() {
  const imgs = [
    { img: "src/assets/Art1.jpg" },
    { img: "src/assets/Art2.jpg" },
    { img: "src/assets/Art3.jpg" },
    { img: "src/assets/Art4.jpg" },
  ];
  return (
    <div className="">
      <div className="flex">
        {imgs.map((i) => {
          return <img src={i.img} alt="" width={300} height={400} />;
        })}
      </div>
    </div>
  );
}

export default App;
