import React, { memo, useEffect, useState } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
const App = memo(() => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])
  const [a,seta]=useState(1)
  return (
    <div>
      <div className="header">
        <AppHeader></AppHeader>
      </div>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <AppFooter></AppFooter>
    </div>
  )
})

export default App