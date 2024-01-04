import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const DataModul = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =  () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sbumit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This page is not define</Modal.Title>
        </Modal.Header>
        <Modal.Body>error: Can't resolve ' DataFetch' is defined but never used </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DataModul

