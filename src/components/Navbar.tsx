import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from './Drawer';


export function Navbar() {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(
        <>
        
            <div className="banner">
            <button className="hamburger-menu" onClick={()=>setIsMenuOpen(true)} >☰</button>
            <h1 className="banner-heading">MotoGP Info</h1>
            <button className="login-button" onClick={() => navigate('/Login')}>Login</button>
            </div>

            <div> 
                <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
                <ul className="p-4 space-y-2">
                    <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                    <Link to="/riders" onClick={() => setIsMenuOpen(false)}>Riders</Link>
                    </li>
                    <li>
                    <Link to="/teams" onClick={() => setIsMenuOpen(false)}>Teams</Link>
                    </li>
                    <li>
                    <Link to="/circuits" onClick={() => setIsMenuOpen(false)}>Circuits</Link>
                    </li>
                </ul>
                </Drawer>
            </div>

        </>

    )
}