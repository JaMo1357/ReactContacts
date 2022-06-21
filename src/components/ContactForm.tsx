import { useParams } from 'react-router-dom'
import { useAppDispatch } from './../store/'
import { addContact, updateContact } from './../store/contactsSlice'
import { ContactInterface, ContactFormProps } from './../../interfaces'

function ContactForm({ previewOnly = false, contactData }: ContactFormProps) {
  const dispatch = useAppDispatch()
  const { id } = useParams()

  const provideContactDetails = (e: React.SyntheticEvent) => {    
    e.preventDefault()

    const values: any = e.target
    const contactObject: ContactInterface = {
      name: `${values.fn.value} ${values.ln.value}`,
      phone: values.tel.value,
      email: values.email.value,
      address: {
        street: values.street.value,
        postCode: values.zip.value,
        city: values.city.value,
        country: values.country.value,
      },
    }
    
    if (id) {
      contactObject.id = Number(id)
      dispatch(updateContact(contactObject))
    } else { 
      dispatch(addContact(contactObject))
    }
  }

  const name = contactData?.name?.split(' ') || []

  return (
    <form
      className="grid gap-1 grid-cols-2 auto-rows-max"
      onSubmit={ provideContactDetails }
    >
      <label htmlFor="fn">first name</label>
      {(!previewOnly) ? <input type="text" name="fn" placeholder="First name" defaultValue={name[0]} /> : <span>{ name[0] }</span> }
      <label htmlFor="ln">last name</label>
      {(!previewOnly) ? <input type="text" name="ln" placeholder="Last name" defaultValue={name[1]} /> : <span>{ name[1] }</span> }
      <label htmlFor="tel">phone</label>
      {(!previewOnly) ? <input type="text" name="tel" placeholder="Phone" defaultValue={contactData?.phone} /> : <span>{ contactData?.phone }</span> }
      <label htmlFor="email">email</label>
      {(!previewOnly) ? <input type="email" name="email" placeholder="Email" defaultValue={contactData?.email} /> : <span>{ contactData?.email }</span> }
      
      <span className='col-span-2'>address:</span>
      <label htmlFor="city">city</label>
      {(!previewOnly) ? <input type="text" name="city" placeholder="City" defaultValue={contactData?.address?.city} /> : <span>{ contactData?.address?.city }</span> }
      <label htmlFor="country">country</label>
      {(!previewOnly) ? <input type="text" name="country" placeholder="Country" defaultValue={contactData?.address?.country} /> : <span>{ contactData?.address?.country }</span> }
      <label htmlFor="zip">postCode</label>
      {(!previewOnly) ? <input type="text" name="zip" placeholder="Zip code" defaultValue={contactData?.address?.postCode} /> : <span>{ contactData?.address?.postCode }</span> }
      <label htmlFor="street">street</label>
      {(!previewOnly) ? <input type="text" name="street" placeholder="Street nr." defaultValue={contactData?.address?.street} /> : <span>{ contactData?.address?.street }</span> }
      
      {
        !previewOnly ?
        <div className='inline-flex w-full items-center justify-center gap-2 col-span-2'>
          <input type="submit" defaultValue="Submit" className="px-2 py-1 flex border border-light-900 rounded-sm cursor-pointer" />
        </div> : ''
      }
    </form>
  )
}

export default ContactForm