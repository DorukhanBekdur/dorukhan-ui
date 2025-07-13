import { useState } from "react";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome!"
      >
        <p>This is a modal component with a close button.</p>
      </Modal>
    </div>
  );
}

export default App;
