import { render } from '@testing-library/react'
import Content from './components/Content'
import { MemoryRouter } from 'react-router-dom'
import reducer, { initialState, addContact } from './store/contactsSlice'

test('Should render Content view component.', () => {
  render(<Content />, {wrapper: MemoryRouter});
});

test('Should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

test('should handle a contact being added to an empty list', () => {
  const contact = {
    id: 99,
    name: 'string',
    phone: 'string',
    email: 'string',
    address: {
      street: 'string',
      postCode: 'string',
      city: 'string',
      country: 'string',
    },
  }

  expect(reducer(initialState, addContact(contact))).toEqual({
    isLoading: false,
    contacts: [contact],
    error: '',
  })
})
