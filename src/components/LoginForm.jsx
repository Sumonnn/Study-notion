import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";



function LoginForm({ setIsLoggedin }) {

    const [formData, setformData] = useState({
        email: '',
        password: '',
    })

    const Navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false);

    function changeHandler(event) {
        setformData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value,
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedin(true);
        toast.success('Logged In');
        Navigate('/dashboard'); 
    }


    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                    required
                    type="email"
                    value={formData.email}
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter email id"
                />
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    name="password"
                    onChange={changeHandler}
                    placeholder="Enter password"
                />

                <span onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>

                <Link to='#'>
                    <p>
                        Forget Password
                    </p>
                </Link>
            </label>

            <button>
                Sign in
            </button>

        </form>
    )
}

export default LoginForm;