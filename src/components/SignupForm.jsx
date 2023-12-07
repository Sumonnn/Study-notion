import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function SignupForm({ setIsLoggedin }) {

  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    if (formData.password != formData.confirmPassword) {
      toast.error('passwords do not Match');
      return;
    }
    setIsLoggedin(true);
    toast.success('Account Created');
    console.log(formData);
    Navigate('/dashboard');
  }


  return (
    <div>
      <div>
        <button>
          Student
        </button>
        <button>
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name */}
        <div>
          <label>
            <p>First Name <sup>*</sup></p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter first Name"
              value={formData.firstName}
            />
          </label>
          <label>
            <p>Last Name <sup>*</sup></p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>
        {/* Email add */}
        <label>
          <p>Email Address <sup>*</sup></p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>
        {/* newPassword and confirm password */}
        <div>
          <label>
            <p>Create Password<sup>*</sup></p>
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
          </label>
          <label>
            <p>Confirm Password<sup>*</sup></p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm password"
            />

            <span onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>
        </div>
        <button>
          Create Account
        </button>
      </form>

    </div>

  )
}

export default SignupForm;