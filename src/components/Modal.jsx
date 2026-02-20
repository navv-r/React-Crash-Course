import './Modal.css'

function Modal({ title, onModalCancel }) {
    return (
        <div>
            <div className="modal">
                 <p className="modal__title">{ title }</p>
                 <div className="modal__buttons">
                    <button onClick={onModalCancel}>Cancel</button>
                    <button>Confirm</button>
                 </div>
            </div>
        <div className="backdrop" />
</div>
    )
}

export default Modal