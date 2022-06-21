import { useSelector } from 'react-redux'
import { useAppDispatch } from '../store/'
import { removeContact } from '../store/contactsSlice'
import { useParams, Link } from 'react-router-dom'
import ContactForm from './ContactForm'
import { ContactInterface, State } from '../../interfaces'

function Preview() {
  const { id } = useParams()
  const dispatch = useAppDispatch()

  const contact = useSelector(( state: State ) => {
    return state.contacts?.find((contact: ContactInterface) => contact.id === Number(id)) || {}
  })

  const onRemoveContact = () => {
    dispatch(removeContact(Number(id)))
  }

  if (Object.keys(contact).length) {
    return (
      <section>
        <ContactForm previewOnly={true} contactData={contact} />
        <div className='inline-flex w-full items-center justify-center gap-2'>
          <button className='px-2 py-1 border border-light-blue-400' onClick={onRemoveContact}>remove</button>
          <Link className="px-2 py-1 flex border border-light-900 rounded-sm" to={`/edit-contact/${contact?.id}`}>
            edit
          </Link>
        </div>
      </section>
      )
  } else {
    return (<span>No such contact found :(</span>)
  }
}

export default Preview