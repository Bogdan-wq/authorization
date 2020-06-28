import React from 'react'
import './modal.scss'

const Modal = (props) => {

    const {history} = props;

    return (
        <div className="modal-window position-fixed">
            <div className="modal-window__layer">
                <div className="modal-window__background" onClick={() => history.push('/login')}/>
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Authorization problem</h4>
                        <button type="button"
                                className="close"
                                onClick={() => history.push('/login')}>&times;</button>
                    </div>
                    <div className="modal-body">
                        Before going to this page,you need to log in!
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                                className="btn btn-danger"
                                onClick={() => history.push('/login')}>Close</button>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Modal;