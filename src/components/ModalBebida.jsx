import { Image, Modal } from "react-bootstrap"

export const ModalBebida = () => {

    const handleModalClick = () => {

    }

  return (
    <Modal show={true} onHide={handleModalClick}> 
        <Modal.Body>
            Cuerpo de modal
        </Modal.Body>
    </Modal>
  )
}
