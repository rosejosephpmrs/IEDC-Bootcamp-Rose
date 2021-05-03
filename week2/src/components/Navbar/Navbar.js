import React,{useState} from 'react'
import {MenuItems} from './MenuItem'
import '../../styles/Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    const [click,setClick]= useState(false)
    const handleClick = ()=>setClick(!click)
    const closeMenu =()=>setClick(false);
        return(
            <nav className="main-header" >
            <div className="container">
              <div className="navheader">
                  <Link to="/" onClick={closeMenu}><div className='logo'></div></Link>
                  <h1>Money Tracker</h1>
              </div>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ?'fas fa-times':'fas fa-bars'}></i>
              </div>
              <ul className={click ?"navlist menu":"navlist"}>
                {
                    MenuItems.map((item,key)=>{ 
                        return (
                        <li key={key}>
                            <Link to={item.url} className={item.cname} onClick={closeMenu}>{item.title}
                            </Link>
                        </li>)
                    }  )
                }
              </ul>
              </div>
            </nav>
        )
    
}

export default Navbar