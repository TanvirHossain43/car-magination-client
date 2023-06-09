import React, { useContext } from 'react';
import login from '../../assets/Login.png'
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { signIn, googleLogIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    useTitle('Login')
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                const { displayName, photoURL } = loggedUser;
                console.log(displayName, photoURL);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

    // google signin

    const handleGoogleSignIn = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-2/4'>
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 className='w-2/4'">
                    <form onSubmit={handleLogin} className="card-body  pb-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <h2>New to this website? <Link to="/signup" className='text-green-800'>SignUp</Link></h2>
                        </div>
                        <div className="divider">OR</div>

                    </form>
                    <div className='mx-auto pb-3'>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;