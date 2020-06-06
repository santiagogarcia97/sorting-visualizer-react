import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SortPage from './pages/sort/SortPage'
import Topbar from './components/Topbar'

function App() {
  return (
    <div className="h-100">
      <Router>
        <Topbar />

        <Switch>
          <Route path="*">
            <SortPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
