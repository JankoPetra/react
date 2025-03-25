import { NavLink } from "react-router";
import styles from "../css/Navigation.module.css";
import { useState } from "react";
export default function Navigation() {
    let [menuKinyitva, setMenuKinyitva] = useState(false)
    return(
        <nav className={`${styles.navigacio}`}>
            <ul className={` ${menuKinyitva ? styles.nyitva : styles.zarva}`}>
                <li>
                    <NavLink 
                    style={({isActive}) => ({
                        color: isActive ? "red" : "black"
                    })}
                    className={`${styles.navigacio_link}`} to="/works">
                        Works
                    </NavLink>
                    </li>
                <li>
                    <NavLink 
                    style={({isActive}) => ({
                        color: isActive ? "red" : "black"
                    })}
                    className={`${styles.navigacio_link}`} to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink 
                    style={({isActive}) => ({
                        color: isActive ? "red" : "black"
                    })}
                    className={`${styles.navigacio_link}`} to="/contact">Contact</NavLink>
                </li>
            </ul>
            <button 
            className={styles.hamburger_gomb}
            onClick={() => setMenuKinyitva(!menuKinyitva)}
            >
                {menuKinyitva ? "X" : "="}
            </button>
        </nav>
    )
}