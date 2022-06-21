import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { State } from '../../interfaces'

function Header() {
  const error = useSelector((state : State) => {
    return state.error
  })

  return (
    <header className="flex flex-row justify-center items-center w-full h-9 bg-slate-500">
        <span>{ error }</span>
        <Link className="flex w-9 h-4/5 border items-center justify-center border-light-blue-400 border-light-900 rounded-sm" to={'/add-contact'}>+</Link>
        <h3 className="text-azure">Contacts</h3>  
    </header>
  )
}

export default Header