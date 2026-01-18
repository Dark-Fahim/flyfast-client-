import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import AuthContext from '../../../context/AuthContext';

const Register = () => {
    // New state variable for Name
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {registerUser} = useContext(AuthContext)


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleRegister = async (data) => {
        // .preventDefault();
        // Integration point: supabase.auth.signUp({ email, password, options: { data: { name } } })
        // console.log("Registering with:", { name, email, password });
        console.log(data);
        const email = data.email
        const password = data.password
        registerUser(email, password)
        .then(user => {
            console.log(user.user);
        })
        .catch(error => {
            console.log(error);
        })

    };

    const handleGoogleSignup = () => {
        // Integration point: supabase.auth.signInWithOAuth({ provider: 'google' })
        console.log("Google Signup Triggered");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 p-8">

                {/* Header Section - Updated for Registration */}
                <div className="mb-8">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">
                        Create Account
                    </h1>
                    <p className="text-gray-600 font-medium">Register with FlyFast</p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">

                    {/* NEW FIELD: Name */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="name">
                            Full Name
                        </label>
                        <input
                        
                            {...register('name', {required: true})}
                            id="name"
                            type="text"
                            name='name'
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            
                        />
                        {errors.name?.type === "required" && (<p className='text-red-500'>Name is required</p>)}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Field - "Forget Password" link removed */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            {...register("password", {required: true,  minLength: 6})}
                            id="password"
                            type="password"
                            placeholder="Create Password"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={6} // Basic validation recommendation
                        />
                        {errors.password?.type === "required" && (<p className='text-red-500'>Fill The password</p>)}
                        {errors.password?.type === "required" && (<p className='text-red-500'>Fill The password</p>)}
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#ff7a00] hover:bg-[#ff7300] text-gray-900 font-bold py-3 rounded-lg transition-colors duration-200"
                    >
                        Register
                    </button>
                </form>

                {/* Footer Links - Swapped to point to Login */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#ff7a00]  font-semibold hover:underline">
                            Login
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

                {/* Social Signup */}
                <button
                    onClick={handleGoogleSignup}
                    className="w-full flex items-center justify-center gap-3 bg-[#E9EDF2] hover:bg-[#dee3eb] text-gray-800 font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    Sign up with google
                </button>
            </div>
        </div>
    );
};

export default Register;