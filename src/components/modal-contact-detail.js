function ModalContactDetail(props) {
  return (
    <div>
        <div className="modal-header">
          <h5 className="modal-title">{ `${props.contact.first_name } ${props.contact.last_name}`}</h5>
        </div>
       <div className="modal-body">
         <div className="row">
           <div className="col-2 font-weight-bold">Id: </div><div className="col-10">{ props.contact.id }</div>
           <div className="col-2 font-weight-bold">First Name: </div><div className="col-10">{ props.contact.first_name }</div>
           <div className="col-2 font-weight-bold">Last Name : </div><div className="col-10">{ props.contact.last_name }</div>
           <div className="col-2 font-weight-bold">email: </div><div className="col-10">{ props.contact.email }</div>
         </div>
       </div>
    </div>
  )
}

export default ModalContactDetail