import React from "react";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <Button>Primary</Button>
        <Button variant="outline" style={{ marginLeft: "1rem" }}>
          Outline
        </Button>
        <Button size="lg" style={{ marginLeft: "1rem" }}>
          Large
        </Button>
      </div>
    </>
  );
}

export default App;
