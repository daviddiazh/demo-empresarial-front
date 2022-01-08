import React from 'react'
import { DiReact } from 'react-icons/di';
import { SiSpring } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{marginTop: "50px", marginBottom: "10px", background: "#f8f9fa", padding: "40px 0"}}>
            <p style={{fontSize: "19px"}}>Esta App esta desarrollada con las siguientes Tecnologías = <DiReact/> <SiSpring/> <SiMongodb /> <FaBootstrap /> .</p>
            <p style={{fontSize: "17px"}}>&copy; Powered by <strong>David Diaz Herrera</strong> | 2022.</p>
        </div>
    )
}

export default Footer
