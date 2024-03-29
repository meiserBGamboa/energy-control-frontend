import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardRoutes from './DashboardRoutes'
import * as route from '../utils/Routes'

import DashboardWrapper from '../pages/DashboardWrapper'
import Page404 from "../pages/Page404"
import LoveDash from "../pages/Love"

const AppRouter = () =>{
  
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<DashboardRoutes />} >
            <Route exact path={route.dashboard} element={<DashboardWrapper />} />
            <Route path="*" element={<Page404 /> } />
          </Route>
          <Route exact path={route.love} element={<LoveDash />} />
        </Routes>
      </BrowserRouter>
    )
}
  
export default AppRouter
  