import React from 'react'
import { Link } from "react-router-dom"
import { 
    Menu,
	Layout
} from 'antd'
const { Header } = Layout

const Navbar = () => {
    return (
        <Header >
            <Menu 
                theme="dark" 
                mode="horizontal"
                items = {
                    [
                        {
                            key: "user",
                            label:  <Link to={'/'} style= {{color: 'white', fontWeight: 'bold', fontSize: '24px'}} >
                                    Control energético en smart home usando Arduino e IoT
                                </Link>
                        }
                    ]
                }
            />
        </Header>
    )
}

export default Navbar
