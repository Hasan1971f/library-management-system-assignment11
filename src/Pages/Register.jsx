import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const { createUser, setUser, signinWithGoogle, user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    const newUser = { name, photo, email, password };
    console.log(newUser);

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success('Register Successfully Done');
      })
      .catch((error) => {
        toast.error('Unable To Register');
        console.log('Error msg', error);
      });
  };

  const handleGoogleSignIn = () => {
    signinWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success('Register Successfully Done');
      })
      .catch((error) => {
        toast.error('Unable To Register');
        console.log('Error msg', error);
      });
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0fdf4] py-10">
      <div className="w-full max-w-lg bg-[#e9f5db] shadow-lg border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Register your account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Photo URL</label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full text-white"
            />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered w-full text-white"
              required
            />
            <a href="#" className="text-sm text-blue-600 hover:underline mt-1 block">
              Forget password?
            </a>
          </div>

          <button className="btn btn-primary w-full bg-[#74c69d] text-white hover:bg-blue-500 hover:text-white transition duration-300">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already Have An Account?{' '}
          <Link className="text-orange-500 font-semibold" to="/login">
            Login
          </Link>
        </p>

         <div className="divider divider-info">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-[#3a7fe6] hover:text-white duration-300 ease-linear hover:scale-105 "
        >
          <FcGoogle className="text-2xl" />
          <span>Register With Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
// 
