import { Link, Outlet } from 'react-router';
import logo from '/assests/logo.png'
import authImg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl container mx-auto'>
            {/* <div className='my-10'>
                <Link to={'/'}><img className="h-10" src={logo} alt="" /></Link>
            </div> */}
            <div className='flex flex-col md:flex-row items-center'>
                <div className='flex-1 '>
                    <Link to={'/'}><img className="h-10 my-10" src={logo} alt="" /></Link>
                    <Outlet />
                </div>
                <div className='flex-1 h-full bg-[#FAFDF0] rounded-lg'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;