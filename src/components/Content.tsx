import { Routes, Route } from "react-router-dom"
import LeftMenu from './LeftMenu'
import Preview from './Preview'
import AddContact from './AddContact'

export default function Content() {
  return (
    <div className="flex flex-row w-full h-full">
      <LeftMenu />
        <Routes>
          <Route path="/" element={ <Preview /> } />
          <Route path="/add-contact" element={ <AddContact /> } />
          <Route path="/contact/:id" element={ <Preview /> } />
          <Route path="/edit-contact/:id" element={ <AddContact /> } />       
        </Routes>
    </div>
  )
}