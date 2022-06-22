import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchContacts } from '../store/contactsSlice'
import { useAppDispatch } from '../store/'
import { State, ContactInterface } from '../../interfaces'
import { Link, useParams } from "react-router-dom"

function LeftMenu() {
  const { id } = useParams()
  useSelector(( state: State ) => state.contacts)
  
  const dispatch = useAppDispatch()
  const contacts = useSelector(( state: State )  => state.contacts)

  useEffect(() => {
     dispatch(fetchContacts())
  }, [dispatch])

  return (
    <aside className="flex flex-col w-48 h-full overflow-y-auto border-r">
        <nav>
          <ul className="flex flex-col">
            {contacts?.map((contact: ContactInterface) => (
              <Link key={contact.id} to={`contact/${contact.id}`}>
                <li className={`p-2 hover:bg-sky-700 hover:text-white cursor-pointer ${contact.id === Number(id) ? "bg-sky-700 text-white" : ""}`}>
                  { contact.name }
                </li>
              </Link>
            ))}
          </ul>  
        </nav>
    </aside>
  )
}

export default LeftMenu