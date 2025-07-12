import { useState } from "react";
import Select from "./components/Select/Select";

function App() {
  const [language, setLanguage] = useState("");

  const languageOptions = [
    { label: "Turkish", value: "tr" },
    { label: "English", value: "en" },
    { label: "German", value: "de" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <Select
        label="Select Language"
        options={languageOptions}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />

      <Select label="Category" options={[]} error="Failed to load options" />

      <Select label="Status" options={languageOptions} disabled />
    </div>
  );
}

export default App;
