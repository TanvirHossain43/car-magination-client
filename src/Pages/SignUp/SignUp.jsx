import React, { useContext } from 'react';
import signUp from '../../assets/signUp.png'
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    useTitle('SignUp')

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
        createUser(email, password, photo, name)
            .then((result) => {
                const user = result.user;
                return user.updateProfile({
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        return user;
                    })
                    .catch((error) => {
                        throw new ('Error updating user profile');
                    });
            })
            .catch((error) => {
                throw new('Error creating user');
            });
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-2/4'>
                    <img src={signUp} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 className='w-2/4'">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name='name' />
                        </div>
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" className="input input-bordered" name='photo' />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                        <div>
                            <h2>Already a user? <span className='text-emerald-500'><Link to="/login">Login</Link></span></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;