import React, { useState, useEffect } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.5) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "navbar-small" : ""}`}>
            <div className="navbar-logo">
                <Link to="/">Di Miceli UI</Link>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </div>
            <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
                <li className="nav-link">
                    <Link to="/components">Documentazione </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;