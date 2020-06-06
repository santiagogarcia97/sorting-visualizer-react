import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import SortPage from './pages/sort/SortPage'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className="h-100">
      <Router>
        <Topbar />

        <Switch>
          <Route path="/sort">
            <SortPage />
          </Route>
          <Route path="/paths">
            <p>asdad</p>
          </Route>
          <Redirect to="/sort" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
