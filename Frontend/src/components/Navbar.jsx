import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../auth/AuthModal.jsx';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/how-it-works">How It Works</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/faqs">FAQs</Link></li>
                    <li>
                        <button onClick={() => setIsAuthModalOpen(true)}>Login / Register</button>
                    </li>
                    <li><button>Get Your C-FLOW</button></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>

            {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
        </>
    );
};

export default Navbar;
