import { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Checkbox
        label="I agree to the terms and conditions"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />

      <Checkbox
        label="Disabled checkbox"
        checked={false}
        onChange={() => {}}
        disabled
      />

      <Checkbox
        label="Checkbox with error"
        checked={false}
        onChange={() => {}}
        error="You must accept the terms"
      />
    </div>
  );
}

export default App;
