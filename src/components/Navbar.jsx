import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg';
import toast from "react-hot-toast";

const Navbar = (props) => {

  let isLoggedin = props.isLoggedin;
  let setIsLoggedin = props.setIsLoggedin;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to='/'>
        <img src={logo} alt="logo" height={32} width={160} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-white">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/'>contact</Link>
          </li>
        </ul>
      </nav>

      {/* login - signup - logout - dashboard */}

      <div className="flex items-center gap-x-4 text-white">
        {!isLoggedin &&
          <Link to='/login'>
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button>
          </Link>
        }
        {!isLoggedin &&
          <Link to='/signup'>
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Signup</button>
          </Link>
        }
        {isLoggedin &&
          <Link to='/'>
            <button onClick={() => {
              setIsLoggedin(false)
              toast.success('Logged out');
            }} className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Logout</button>
          </Link>
        }
        {isLoggedin &&
          <Link to='/dashboard'>
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;