import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import Drawer from './Drawer';
import { signOut } from 'firebase/auth';


export function Navbar() {
    const navigate = useNavigate()
    const { user, loading } = useAuth()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleSignOut = async () => {
        try{
            await signOut(auth);
            navigate('/', {replace: true});

        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return(
        <>
        
            <div className="banner">
            <button className="hamburger-menu" onClick={()=>setIsMenuOpen(true)} >☰</button>
            <h1 className="banner-heading">MotoGP Info</h1>

            {/* show nothing while we’re checking auth */}
            {loading ? null : user ? (
                <>
                    <span className="user-email">{user.email}</span>
                    <button className="login-button" onClick={handleSignOut}>
                    Sign Out
                    </button>
                </>
            ) : (
                <button className="login-button" onClick={() => navigate('/login')}>
                Login
                </button>
            )}
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

                <div className="p-4 space-y-2">
                    {loading ? null : user ? (
                        <>
                            <ul className="p-4 space-y-2">
                                <li> <Link to="/enter-results" onClick={() => setIsMenuOpen(false)}>RaceEntryPage</Link></li>
                            </ul>
                            <button className="login-button" onClick={(handleSignOut)}>
                            Sign Out
                            </button>
                        </>
                    ) : (
                        <button className="login-button" onClick={() => navigate('/login')}>
                        Login
                        </button>
                    )}
                </div>
                </Drawer>
            </div>

        </>

    )
}