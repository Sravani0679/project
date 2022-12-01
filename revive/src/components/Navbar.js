import React from "react";

const Navbar = () => {

    return(
<>
    <div style={{
        backgroundColor:'#EABDA8',
        height: '60px',
        width:'100%'
    }}>
        <a href="#" className="logout-btn">Logout</a>

        <div style={{
            color:'white',
            padding:'1.2rem'
        }}>
        
       </div>
    </div>
    <h3 style={{
        padding:"1rem",
        fontFamily:'sans-serif'
    }}>Welcome user!</h3>
</>
    );
}

export default Navbar;