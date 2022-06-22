import { useEffect } from "react";
import { Link, useLocation  } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../store/'
import { resetError } from '../store/contactsSlice'
import { State } from '../../interfaces'

function Header() {
  const location = useLocation()
  const dispatch = useAppDispatch()

  const error = useSelector((state : State) => {
    return state.error
  })
  
  useEffect(() => {
    dispatch(resetError())
  }, [location])

  return (
    <header className="flex flex-row w-full bg-sky-600">
      <Link className="m-2 p-1 text-white flex border border-light-blue-400 border-light-900 rounded-sm hover:bg-sky-700 hover:text-white" to={'/add-contact'}>+ Add contact</Link>
      <div className="flex flex-row content-center justify-center flex-auto">
        
        <div className="flex flex-col content-center justify-center text-center">
          <h3 className="text-white">Contacts</h3>  
          <span className="text-red-400">
            { error }
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header