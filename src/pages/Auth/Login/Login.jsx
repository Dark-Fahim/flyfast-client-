import React, { useContext, useState } from 'react';
// Note: You'll need to install lucide-react or use a standard SVG for the Google icon
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router';
import { useForm} from "react-hook-form"
import AuthContext from '../../../context/AuthContext';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

        
  const {name, signInUser} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()



  const handleLogin = async (data) => {
    
    console.log("Logging in with:", data.email, data.password);

    const email = data.email
    const password = data.password

    signInUser(email, password)
    .then(user => {
      console.log(user.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  };

  const handleGoogleLogin = () => {

    console.log("Google Login Triggered");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 p-8">

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
            Welcome Back {name}
          </h1>
          <p className="text-gray-600 font-medium">Login with FlyFast</p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {required: true})}
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            {errors.email?.type === "required" && (<p className='text-red-500'>Fill The Mail</p>)}
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
            {...register("password", {required: true, })}
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             
            />
            {errors.password?.type === "required" && (<p className='text-red-500'>Fill The password</p>)}
            <div className="mt-2 text-left">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 underline decoration-gray-300">
                Forget Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff7a00] hover:bg-[#ff830f] text-gray-900 font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Login
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have any account?{' '}
            <Link to='/register' className="text-[#ff7a00] font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <span className="relative px-4 bg-white text-gray-400 text-sm">Or</span>
        </div>

        {/* Social Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-[#E9EDF2] hover:bg-[#dee3eb] text-gray-800 font-semibold py-3 rounded-lg transition-colors duration-200"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Login with google
        </button>
      </div>
    </div>
  );
};

export default Login;