import { NavLink } from "react-router";
import styles from '../css/NavBar.module.css'
import { useState } from "react";
import { Spin as HamburgerButton } from 'hamburger-react'
export default function NavBar(){
    let [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav>
            <ul className={`${menuOpen ? styles.open : styles.closed}`}>
                <li>
                    <NavLink 
                    to="/works"
                    style={
                        ({isActive}) => ({
                            color: isActive ? "red" : "black"
                        })
                    }
                    >
                        Works</NavLink>
                </li>
                <li><NavLink
                 style={
                    ({isActive}) => ({
                        color: isActive ? "red" : "black"
                    })
                }
                to="/blog">Blog</NavLink></li>
                <li><NavLink
                 style={
                    ({isActive}) => ({
                        color: isActive ? "red" : "black"
                    })
                }
                to="/contact">Contact</NavLink></li>
            </ul>
            {/* <button 
            className={styles.hamburger_menu_button}
            onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "X" : "="}
            </button> */}
            <div
                className={styles.hamburger_menu_button}
            >
                <HamburgerButton 
            toggled={menuOpen}
            toggle={setMenuOpen}
            size={28}
            direction="left"
            />
            </div>
            
        </nav>
    )
}