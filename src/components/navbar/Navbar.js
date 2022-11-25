import React, { Component, useState } from "react";
import "./Navbar.css";
import { CSSTransition } from "react-transition-group";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav"> {this.props.children} </ul>
            </nav>
        );
    }
}

export function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

export function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a
                href="#"
                className="menu-item"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
            >
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon="🪓"
                        rightIcon=">"
                        goToMenu="settings"
                    >
                        Settings
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem leftIcon="<" goToMenu="main" />
                    <DropdownItem leftIcon="🪓">Chop !</DropdownItem>
                    <DropdownItem leftIcon="🪓">Chop !</DropdownItem>
                    <DropdownItem leftIcon="🪓">Chop !</DropdownItem>
                    <DropdownItem leftIcon="🪓">Chop !</DropdownItem>
                    <DropdownItem leftIcon="🪓">Chop !</DropdownItem>
                    <DropdownItem leftIcon="🪓">Chop !</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}
