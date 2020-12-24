import ModalContent from './model-content'

function Modal (props) {
  return(
    <div className={ `modal fade ${props.isOpen ? 'show d-block' : ''}` } tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalContent type={ props.type } title={ props.title } contactIds={ props.contactIds } contactContent={ props.contactContent }/>
          <div className="modal-footer">
            <button data-source="allContacts" type="button" className="btn btn-primary" onClick={ props.change }>All Contacts</button>
            <button data-source="USContacts" type="button" className="btn btn-secondary" onClick={ props.change }>US Contacts</button>
            <button type="button" className="btn btn-secondary" onClick= { props.change }>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal