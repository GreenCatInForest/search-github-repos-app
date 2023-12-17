import Modal from "react-bootstrap/Modal";
import Stack from "react-bootstrap/Stack";

export const ErrorBanner = () => {
  return (
    <Stack
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      </Modal.Dialog>
    </Stack>
  );
};
