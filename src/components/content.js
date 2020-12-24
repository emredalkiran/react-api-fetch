import Modal from './modal'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoadingStatus, selectContactIds, selectContactContent } from '../features/fetch-data/fetch-api-slice'

import { contacts } from '../features/fetch-data/fetch-api-slice'

function Content() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [modalType, setModalType] = useState('')
  
  const [pageNumber, setPageNumber] = useState(1)
  const handleModalState = (e) => {
    setOpen(true)
    if(e.target.getAttribute('data-source') === 'allContacts') {
      setTitle('All Contacts')
      setModalType('all')
      getContacts({ 
        page: pageNumber,
        companyId: 171 
      })
    }
    else if (e.target.getAttribute('data-source') === 'USContacts') {
      setTitle('US Contacts')
      setModalType('us')
      getContacts({ 
        countryId: 226,
        page: pageNumber,
        companyId: 171 })
    }
    else{
      setOpen(false)
      setTitle('')
      setModalType('')
      
    }
  }

  const getContacts = async (parameters) => {
    try {
      console.log(parameters)
      const result = await dispatch(contacts(parameters))
      if (!result) {
        return
      }
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div className={ `container-fluid full-height d-flex justify-content-center align-items-center ${ open ? 'modal-background' : '' }` }>
      <Modal isOpen={ open } change={  handleModalState } type={ modalType } title={ title } />
      <button data-source="allContacts" type="button" className="btn btn-primary mr-1" onClick={ handleModalState }>Button A</button>
      <button data-source="USContacts" type="button" className="btn btn-secondary mr-1" onClick={ handleModalState }>Button B</button>
    </div>
  )
}


export default Content



