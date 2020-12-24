import ContentRow from './content-row'

function ModalContent(props) {
  return (
    <div>
      <div className="modal-header">
        <h5 className="modal-title">{ props.title }</h5>
      </div>
      <div className="modal-body">
        { props.content.map(contactId => {
            return(
              <ContentRow contact={ contactId} />
            )
          })
        }
      </div>
    </div>
   )
}
export default ModalContent