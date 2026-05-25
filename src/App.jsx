import React from 'react'
import Login from './components/Login'
import Sidebar from './components/Sidebar'


export const backendUrl = 'http://localhost:4000'

const App = () => {
  return (
    <div>
      <Login/>
      <Sidebar/>
    </div>
  )
}

export default App

