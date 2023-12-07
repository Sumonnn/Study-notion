import frame from '../assets/frame.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';



function Template({ title, desc1, desc2, setIsLoggedin, image, formtype }) {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {
                    formtype === 'signup' ? (<SignupForm setIsLoggedin={setIsLoggedin} />) : (<LoginForm setIsLoggedin={setIsLoggedin} />)
                }
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign up with Google</p>
                </button>
            </div>
            <div>
                <img
                    src={frame}
                    alt="pattern"
                    width={558}
                    height={504}
                    loading='lazy'
                />
                <img
                    src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading='lazy'
                />
            </div>
        </div>
    )
}

export default Template;