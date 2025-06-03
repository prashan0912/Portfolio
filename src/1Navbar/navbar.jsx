
import './navbar.css'

import menu_open from '../assets/menu-bar.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import menu_close from '../assets/remove.png'

import ps from '../assets/ps.png'
import { useRef } from 'react';

export default function Navbar() {
    // const [menu, setMenu] = useState(false)
    const menuRef = useRef()

    const openMenu = () => {
        menuRef.current.style.right = "0px"
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }
    return (
        <>
            <div className="naver">
                <img src={ps} alt="" className='logo' />
                <img src={menu_open}
                    className='nav-mob-open'
                    onClick={openMenu}
                    alt="menuOpen"
                    style={{ height: 40, width: 40 }}
                />
                <ol className='nav-menu' ref={menuRef}>
                    <img src={menu_close}
                        alt="menu_close"
                        className="nav-mob-close"
                        onClick={closeMenu}
                        style={{ height: 40, width: 40 }}
                    />

                    <AnchorLink className="anchor-link"
                        offset={50} href="#ABOUT">
                        <li>About</li>
                    </AnchorLink>

                    <AnchorLink className="anchor-link"
                        offset={50} href="#SKILLS">
                        <li>Skills</li>
                    </AnchorLink>

                    <AnchorLink className="anchor-link"
                        offset={50} href="#PROJECTS">
                        <li>Projects</li>
                    </AnchorLink>

                    <li>Resume</li>
                </ol>
                <div className='connect'>
                    <AnchorLink className="anchor-link"
                        offset={50} href="#CONNECT">
                        <li>Connect </li>
                    </AnchorLink>
                </div>

            </div>
        </>
    )
}