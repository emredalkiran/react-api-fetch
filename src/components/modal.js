import ModalContactList from './model-contact-list'
import ModalContactDetail from './modal-contact-detail'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Modal (props) {
  let { modal } = useParams();
  useEffect(()=> {
    if (modal) {
      if (!props.isOpen) {
        props.directURL(modal)
      }
    }
  },[modal, props])
  return(
    <div className={ `modal fade ${ props.isOpen ? 'show d-block' : ''}` } tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          { !props.isContactDetailModal ?         
            <ModalContactList isEven={ props.isEven } setContactDetail={ props.setContactDetail } /> :  <ModalContactDetail contact={ props.contact }/> }
          <div className="modal-footer">
          { !props.isContactDetailModal ?
            <>
              <div>
                <input className="form-check-input" type="checkbox" value={ props.isEven } onChange={ props.handleCheckboxChange } id="flexCheckDefault"/>
                <label className="form-check-label">Only even</label>
              </div>
              <button data-source="allContacts" type="button" className="btn btn-primary" onClick={ props.change }>All Contacts</button>
              <button data-source="USContacts" type="button" className="btn btn-secondary" onClick={ props.change }>US Contacts</button> 
            </> : null }
            <button type="button" className="btn btn-outline-primary" onClick= { props.change }>Close</button>
          </div>  
        </div>
      </div>
    </div>
  )
}
export default Modal