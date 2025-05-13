import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { signInUser, user, setUser, signinWithGoogle } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(res => {
                setUser(res.user);
                toast.success('Login Successfully Done');
            })
            .catch(error => {
                toast.error("Unable to login");
                console.log(error);
            });
    };

    const handleGoogleSignIn = () => {
        signinWithGoogle()
            .then(res => {
                setUser(res.user);
                toast.success('Login Successfully Done');
            })
            .catch(error => {
                toast.error('Unable to Login');
                console.log(error);
            });
    };

    if (user) {
        return <Navigate to="/" />;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4]">
            <div className="w-full max-w-md bg-[#e9f5db] border-2 border-[#d8f3dc] shadow-md rounded-lg p-8 space-y-6">
                <h2 className="text-2xl font-bold text-center">Login your account</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered w-full text-white"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered w-full text-white"
                            required
                        />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full bg-[#74c69d] hover:bg-[#5079ec] transition duration-300 ease-in-out transform hover:scale-105 font-semibold hover:text-white"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-red-500 font-semibold">
                        Register
                    </Link>
                </p>

                <div className="divider divider-info">OR</div>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-[#3a7fe6] hover:text-white duration-300 ease-linear hover:scale-105"
                >
                    <FcGoogle className="text-2xl" />
                    <span className="font-semibold">Login With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;
