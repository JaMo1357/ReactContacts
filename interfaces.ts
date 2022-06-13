export interface ContactInterface {
  id?: number | undefined,
  name?: string,
  phone?: string,
  email?: string,
  address?: {
    street?: string,
    postCode?: string,
    city?: string,
    country?: string,
  },
}

export type State = {
  isLoading: boolean,
  contacts: ContactInterface[],
  error: string,
}

export type ContactFormProps = {
  previewOnly: boolean
  contactData?: ContactInterface
}
