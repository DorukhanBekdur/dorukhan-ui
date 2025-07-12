import { useState } from "react";
import Input from "./components/Input/Input";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        label="E-mail"
        placeholder="example@mail.com"
        type="email"
        error="Invalid e-mail"
      />

      <Input label="Şifre" type="password" placeholder="********" disabled />
    </div>
  );
}

export default App;
