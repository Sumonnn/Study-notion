import { Link } from "react-router-dom";
import logo from '../assets/Logo.svg';
import toast from "react-hot-toast";

const Navbar = (props) => {

  let isLoggedin = props.isLoggedin;
  let setIsLoggedin = props.setIsLoggedin;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>

      <nav>
        <ul className="flex gap-6 text-richblack-100">
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

      <div className="flex items-center gap-x-4 text-richblack-100">
        {!isLoggedin &&
          <Link to='/login'>
            <button>Login</button>
          </Link>
        }
        {!isLoggedin &&
          <Link to='/signup'>
            <button>Signup</button>
          </Link>
        }
        {isLoggedin &&
          <Link to='/'>
            <button onClick={() => {
              setIsLoggedin(false)
              toast.success('Logged out');
            }}>Logout</button>
          </Link>
        }
        {isLoggedin &&
          <Link to='/dashboard'>
            <button>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;