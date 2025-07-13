import { useState } from "react";
import Radio from "./components/Radio/Radio";

function App() {
  const [gender, setGender] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <p style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        Select Gender:
      </p>
      <Radio
        label="Male"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />
      <Radio
        label="Female"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />
      <Radio
        label="Other"
        name="gender"
        value="other"
        checked={gender === "other"}
        onChange={(e) => setGender(e.target.value)}
      />

      <Radio
        label="Disabled Option"
        name="gender"
        value="disabled"
        checked={false}
        onChange={() => {}}
        disabled
      />

      <Radio
        label="With Error"
        name="gender"
        value="error"
        checked={false}
        onChange={() => {}}
        error="You must select a valid option"
      />
    </div>
  );
}

export default App;
