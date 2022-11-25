import React, { userState } from "react";
import "./App.css";
import Navbar, { DropdownMenu, NavItem } from "./components/navbar/Navbar";

export default function App() {
    return (
        <div>
            <Navbar>
                <NavItem icon="👀" />
                <NavItem icon="🤡" />
                <NavItem icon="😍" />

                <NavItem icon="🔊">
                    <DropdownMenu />
                </NavItem>
            </Navbar>
        </div>
    );
}
