
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

export function SignUp() {
    console.log('SignUp component loaded')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            console.log('User signed in')
        } catch (error) {
            console.error('Error signing in:', error)
        }

    }



    return (
        <> 

            <div>SignUp Page</div>


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
        </>
    );


}
