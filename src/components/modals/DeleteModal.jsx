import Modal from "./Modal";

function DeleteModal(props){

    return(
        <Modal 
            isOpen = {props.isOpen}
            onClose = {props.onClose}
        >
            <h4>Estas seguro?</h4>
            <div>
                <button 
                    className="btn btn-delete"
                    onClick = {props.onDelete}>
                    Confirmar
                </button>
                <button 
                    className="btn btn-primary-custom"
                    onClick = {props.onCancel}>
                    Cancelar
                </button>
            </div>

        </Modal>
    )
}

export default DeleteModal;