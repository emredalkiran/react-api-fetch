import ContentRow from './content-row'
import { selectModalData, incrementPage, selectLoadingStatus} from '../features/fetch-data/fetch-api-slice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState, useRef } from 'react'

function ModalContent(props) {
  const { contactIds, contactContent, modalType } = useSelector(selectModalData)
  const [element, setElement] = useState(null)
  const [rootElement, setRootElement] = useState(null)
  const [nameInput, setNameInput] = useState('')
  const isLoading = useSelector(selectLoadingStatus)
  const dispatch = useDispatch()
  const [filteredContactIds, setFilteredContactIds] = useState([])
  const [filterImmediately, setFilterImmediately] = useState(false)


  const handleNameInput = (e) => {
    if (filterImmediately)
    setFilterImmediately(false)
    setNameInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.charCode === 13)
    setFilterImmediately(true)
  }

  const observerOptions = {
    root: rootElement,
    rootMargin: '0px',
    threshold: 0.5
  }
  const observer = useRef(new IntersectionObserver((entries) => {
    const firstEntry = entries[0]
    if (firstEntry.isIntersecting) dispatch(incrementPage())
  }, observerOptions))

  useEffect(() => {
    const currentElement = element
    const currentObserver = observer.current
    if (currentElement) currentObserver.observe(currentElement)

    return () => {
      if (currentElement) currentObserver.unobserve(currentElement)
    }
  }, [element])

  useEffect(()=> {
    const filteredResults = contactIds.filter(id => (nameInput === '' || (contactContent[id].first_name && contactContent[id].first_name.toLowerCase().includes(nameInput.toLowerCase()))) && (!props.isEven || (id % 2 === 0)))
    if (filterImmediately) { 
      setFilteredContactIds(filteredResults)
      setFilterImmediately(false)
    } else {  
      setTimeout(()=> setFilteredContactIds(filteredResults), 500) 
    }
  },[nameInput, contactIds, contactContent, filterImmediately, props.isEven])
  return (
    <div>
      <div className="modal-header">
        <h5 className="modal-title">{ modalType }</h5>
      </div>
       <div ref={ setRootElement } className="modal-body">
       {!props.error &&
       <>
        <div> 
          <input type="text" value={ nameInput } className="form-control" placeholder="First Name" onKeyPress={ handleKeyPress } onChange={ handleNameInput } />
        </div>
        <div className="row font-weight-bold border-bottom pb-3 mb-1">
          <div className="col-2">Id</div>
          <div className="col">First Name</div>
          <div className="col">Last Name</div>
        </div>
          { Object.keys(contactContent).length > 0 && filteredContactIds.map(contactId => {
                return(
                  <ContentRow key={ contactId } ref={ contactId === contactIds[contactIds.length - 1] ? setElement : null } isEven={ props.isEven } onClick ={ () => props.setContactDetail(contactContent[contactId]) } contact={ contactContent[contactId] } />
                ) 
            })
          } 
        {isLoading && (
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>)}
      </> }
      {props.error && 
      <>
        <div className="font-weight-bold">Error: </div>
        <div>{ props.error }</div>
      </>
      }
      </div> 

    </div>
   )
}
export default ModalContent