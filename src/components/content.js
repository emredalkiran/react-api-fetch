import Modal from './modal'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContent, selectModalData, setModalType, contacts, selectPageNumber, selectError } from '../features/fetch-data/fetch-api-slice'
import { Route, useHistory, useParams } from 'react-router-dom'


function Content() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const pageNumber = useSelector(selectPageNumber)
  const { modalType } = useSelector(selectModalData)
  const [isContactDetailModal, setContactDetailModal] = useState(false)
  const [contactData, setContactData] = useState({})
  const [isEven, setEven] = useState(false)
  const error = useSelector(selectError)
  const history = useHistory()
  let { modal } = useParams()
  const handleButtonClick = (e) => {
    setOpen(true)
    if(e.target.getAttribute('data-source') === 'allContacts') {
      dispatch(deleteContent())
      dispatch(setModalType({ modalType: 'All Contacts' }))
      history.push('/all-contacts')
    }
    else if (e.target.getAttribute('data-source') === 'USContacts') {
      dispatch(deleteContent())
      dispatch(setModalType({ modalType: 'US Contacts' }))
      history.push('/us-contacts')
    }
    else{
      if (isContactDetailModal) {
        setContactDetailModal(false)
        setContactData({})
      } else {
        setOpen(false)
        dispatch(deleteContent())
        history.push('/')
      }
    }
  }
  const getContacts = useCallback(async (parameters) => {
    try {
      const result = await dispatch(contacts(parameters))
      if (!result) {
        return
      }
    }
    catch(err) {
      console.log(err)
    }
  },[dispatch])

  const handleCheckboxChange = () => {
    setEven(prevStatus => !prevStatus)
  }

  const setContactDetail = (contact)=> {
    setContactData(contact)
    setContactDetailModal(true)
  }

  const handleDirectURL = (url)=> {
    if (url === 'all-contacts') {
      setOpen(true)
      dispatch(deleteContent())
      dispatch(setModalType({ modalType: 'All Contacts' }))
     
    }
    else if (url === 'us-contacts') {
      setOpen(true)
      dispatch(deleteContent())
      dispatch(setModalType({ modalType: 'US Contacts' }))
    }
  }
  useEffect(() => {
    if (modalType!== '') {
    let query = {
      page: pageNumber,
      companyId: 171,
    }
    if (modalType === 'US Contacts'){
      query = {...query, countryId: 226}
    }
    getContacts(query)
  }
  }, [getContacts, pageNumber, modalType])
 
  return (
    <div className={ `container-fluid full-height d-flex justify-content-center align-items-center ${ open ? 'modal-background' : '' }` }>
      <button data-source="allContacts" type="button" className="btn btn-primary mr-1" onClick={ handleButtonClick }>Button A</button>
      <button data-source="USContacts" type="button" className="btn btn-secondary mr-1" onClick={ handleButtonClick }>Button B</button>
      <Route path='/all-contacts'>
        <Modal isOpen={ open } directURL={ handleDirectURL } change={  handleButtonClick } contact={ contactData } error={ error } isEven={ isEven } handleCheckboxChange={ handleCheckboxChange } isContactDetailModal={ isContactDetailModal } setContactDetail={ setContactDetail }/>
      </Route>  
      <Route path='/us-contacts'>
        <Modal isOpen={ open } directURL={ handleDirectURL } change={  handleButtonClick } contact={ contactData } error={ error } isEven={ isEven } handleCheckboxChange={ handleCheckboxChange } isContactDetailModal={ isContactDetailModal } setContactDetail={ setContactDetail }/>
      </Route>
    </div>
  )
}

export default Content
