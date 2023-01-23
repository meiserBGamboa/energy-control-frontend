import React from "react"
import { Outlet } from "react-router-dom"
import { 
	Layout
} from 'antd'

import Navbar from '../pages/GlobalComponent/NavBar'

const styleCourses = {
	contentCourse: {
		marginTop: 0,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 0,
		paddingTop: 24,
		paddingBottom: 24,
		paddingLeft: 24,
		paddingRight: 24,
		background: '#111012',
		minHeight: '98%'
	},
}

const DashboardRoutes = () =>{
	return(
		<Layout style={{minHeight: '100%'}} >
			<Layout >
                <Navbar />
				<Layout style={{ background: '#F4EEFF' }} >
					<div style={styleCourses.contentCourse} >
						<Outlet />	
						
					</div>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default DashboardRoutes
