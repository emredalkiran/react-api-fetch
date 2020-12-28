import React from 'react'

const ContentRow = React.forwardRef((props, ref) => {
  return (
    props.contact && <div className="row py-2 border-bottom cursor-pointer" ref={ ref } onClick={ props.onClick } >
      <div className="col-2">{ props.contact.id }</div>
      <div className="col">{ props.contact.first_name }</div>
      <div className="col">{ props.contact.last_name }</div>
    </div>
  )
})

export default ContentRow