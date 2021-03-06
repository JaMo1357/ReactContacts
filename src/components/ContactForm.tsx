import { useParams, useLocation  } from 'react-router-dom'
import { useAppDispatch } from './../store/'
import { addContact, updateContact } from './../store/contactsSlice'
import { ContactInterface, ContactFormProps } from './../../interfaces'

function ContactForm({ previewOnly = false, contactData }: ContactFormProps) {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { pathname } = useLocation()

  let formStatusText = ''
  let inputStatusClasses = ''
  let showMandatoryStar = false

  const formStatus = (pathname: string) => {
    if (pathname.includes('/edit-contact')) {
      formStatusText = 'Edit contact'
      inputStatusClasses = 'border-b'
      showMandatoryStar = true
    } else if (pathname.includes('/contact')) {
      formStatusText = 'Contact Info'
      inputStatusClasses = ''
      showMandatoryStar = false
    } else if (pathname.includes('/add-contact')) {
      formStatusText = 'Add new contact'
      inputStatusClasses = 'border-b border-sky-600 border-dashed'
      showMandatoryStar = true
    }
  }

  formStatus(pathname)

  const provideContactDetails = (e: React.SyntheticEvent) => {  
    e.preventDefault()

    const values: any = e.target
    const contactObject: ContactInterface = {
      name: values.name.value,
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

  return (
    <div className='flex flex-col p-5'>
      <h1 className='font-bold'>{ formStatusText }</h1>
      <form
        className="grid gap-1 grid-cols-2 auto-rows-max pt-7"
        onSubmit={ provideContactDetails }
      >
        <label htmlFor="name">
          first name
          { showMandatoryStar? <span className="text-red-400">*</span> : '' }
        </label>
        {(!previewOnly) ? <input className={`${inputStatusClasses} outline-0`} type="text" name="name" placeholder="First name" defaultValue={contactData?.name} /> : <span>{ contactData?.name }</span> }
        <label htmlFor="tel">
          phone
          { showMandatoryStar ? <span className="text-red-400">*</span> : '' }
        </label>
        {(!previewOnly) ? <input className={`${inputStatusClasses} outline-0`} type="text" name="tel" placeholder="Phone" defaultValue={contactData?.phone} /> : <span>{ contactData?.phone }</span> }
        <label htmlFor="email">email</label>
        {(!previewOnly) ? <input className={`${inputStatusClasses} outline-0`} type="email" name="email" placeholder="Email" defaultValue={contactData?.email} /> : <span>{ contactData?.email }</span> }
        
        <span className='col-span-2'>address:</span>
        <label htmlFor="city">city</label>
        {(!previewOnly) ? <input className={`${inputStatusClasses} outline-0`} type="text" name="city" placeholder="City" defaultValue={contactData?.address?.city} /> : <span>{ contactData?.address?.city }</span> }
        <label htmlFor="country">country</label>
        {(!previewOnly) ? <input className={`${inputStatusClasses} outline-0`} type="text" name="country" placeholder="Country" defaultValue={contactData?.address?.country} /> : <span>{ contactData?.address?.country }</span> }
        <label htmlFor="zip">postCode</label>
        {(!previewOnly) ? <input className={`${inputStatusClasses} outline-0`} type="text" name="zip" placeholder="Zip code" defaultValue={contactData?.address?.postCode} /> : <span>{ contactData?.address?.postCode }</span> }
        <label htmlFor="street">street</label>
        {(!previewOnly) ? <input className={`${inputStatusClasses} outline-0`} type="text" name="street" placeholder="Street nr." defaultValue={contactData?.address?.street} /> : <span>{ contactData?.address?.street }</span> }
        
        {
          !previewOnly ?
          <div className='inline-flex w-full items-center justify-center gap-2 col-span-2'>
            <input type="submit" defaultValue="Submit" className="px-2 py-1 flex border border-light-900 rounded-sm cursor-pointer hover:bg-sky-700 hover:text-white" />
          </div> : ''
        }
      </form>
    </div>
  )
}

export default ContactForm