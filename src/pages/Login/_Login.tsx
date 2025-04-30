
import { useState } from 'react'
import { replace, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { Link } from 'react-router-dom'

export function Login() {
    console.log('Login component loaded')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/', {replace: true} )
            console.log('User signed in')
        } catch (error) {
            console.error('Error signing up:', error)
        }

    }



    return (
        <> 

            <div>Login Page</div>

            <form onSubmit={handleSubmit} className="letter-form">
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button type='submit'>Sign In</button>
                </div>
            </form>
            <p>If you do not have an account then you will have have access to this feature:</p>
            {/* <Link to="/SignUp">Sign Up</Link> */}
        </>
    );


}
