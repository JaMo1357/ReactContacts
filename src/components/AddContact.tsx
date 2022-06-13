import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ContactForm from './ContactForm'
import { ContactInterface, State } from '../../interfaces'

const AddContact = () => {
  const { id } = useParams()

    const contact = (id) ? useSelector(( state: State ) => {
      return state.contacts?.find((contact: ContactInterface) => contact.id === Number(id)) || {}
    }) : {}

  return (
    <ContactForm previewOnly={false} contactData={contact} />
  )
}

export default AddContact