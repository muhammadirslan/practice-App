import React from "react";
import Data from "./Data";
import Card from "./Card";

export default function Home() {
  return (
    <div className="app">
      {Data.map((value) => {
        return <Card value={value} />;
      })}
    </div>
  );
}
