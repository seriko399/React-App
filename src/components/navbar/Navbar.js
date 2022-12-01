import "./Navbar.css";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";
import React, { Component, useRef, useState } from "react";
import { render } from "@testing-library/react";

import { ReactComponent as EditIcon } from "../../resources/edit.svg";
import { ReactComponent as AddIcon } from "../../resources/add.svg";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export function Header() {
    const [isAnimating, setIsAnimating] = useState(false);
    return (
        <div>
            <motion.div
                className="navbar"
                animate={{
                    height: isAnimating ? 750 : 35,
                    transition: isAnimating
                        ? {
                              type: "spring",
                              duration: 0.4,
                              stiffness: 100,
                              damping: 15,
                          }
                        : {
                              type: "tween",
                              duration: 0.4,
                              stiffness: 100,
                              damping: 15,
                          },
                }}
            >
                <ul className="navbar-nav">
                    <NavItem icon={<EditIcon />} />
                    <motion.div
                        className="add"
                        onClick={() => setIsAnimating(!isAnimating)}
                        animate={{
                            rotate: isAnimating ? 225 : 0,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                    >
                        <NavItem icon={<AddIcon />} />
                    </motion.div>
                </ul>
            </motion.div>
        </div>
    );
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
