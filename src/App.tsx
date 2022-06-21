import Content from './components/Content'
import Header from './components/Header'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="flex flex-col w-screen h-screen">
          <Provider store={store}>
            <Header/>
            <Content/>
          </Provider>
      </div>
    </Router>
  )
}

export default App
