import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchContacts } from '../store/contactsSlice'
import { useAppDispatch } from '../store/'
import { State, ContactInterface } from '../../interfaces'
import { Link } from "react-router-dom"

function LeftMenu() {
  useSelector(( state: State ) => state.contacts)
  
  const dispatch = useAppDispatch()
  const contacts = useSelector(( state: State )  => state.contacts)

  useEffect(() => {
     dispatch(fetchContacts())
  }, [dispatch])

  return (
    <aside className="flex flex-col w-48 h-full overflow-y-scroll">
        <nav>
          <ul>
            {contacts?.map((contact: ContactInterface) => (
              <li key={contact.id}>
                <Link to={`contact/${contact.id}`}>{ contact.name }</Link>
              </li>
            ))}
          </ul>  
        </nav>
    </aside>
  )
}

export default LeftMenu