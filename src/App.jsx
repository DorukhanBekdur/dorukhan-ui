import { useState } from "react";
import Textarea from "./components/Textarea/Textarea";

function App() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "600px" }}>
      <Textarea
        label="Your Message"
        placeholder="Enter something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Textarea label="Description" error="This field cannot be left blank" />

      <Textarea label="Comment" disabled />
    </div>
  );
}

export default App;
