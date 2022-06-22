import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { State } from '../../interfaces'

function Header() {
  const error = useSelector((state : State) => {
    return state.error
  })

  return (
    <header className="flex flex-row w-full bg-sky-600">
      <Link className="m-2 p-1 text-white flex border border-light-blue-400 border-light-900 rounded-sm hover:bg-sky-700 hover:text-white" to={'/add-contact'}>+ Add contact</Link>
      <div className="flex flex-row content-center justify-center flex-auto">
        
        <div className="flex flex-col content-center justify-center text-center">
          <h3 className="text-white">Contacts</h3>  
          <span>{ error }</span>
        </div>
      </div>
    </header>
  )
}

export default Header