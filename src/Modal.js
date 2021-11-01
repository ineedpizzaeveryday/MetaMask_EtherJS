import './css/modal_form.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal__form__main">
                {children}
                    <div className="modal__form__main">
                        <div className="modal__form__container">
                            <form>
                                <label> TYPE YOUR QUESTION TO OUR TEAM HERE :
                                    <input type="text" />
                                </label>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>


                    <button type="button" onClick={handleClose}>
                    Close
                </button>
                </div>
            </section>
        </div>
    );
};


export default Modal;

