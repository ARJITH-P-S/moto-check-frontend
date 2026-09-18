import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import "./AuthPage.css"


function RegisterPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [message, setMessage] = useState("")


    const handleSubmit = async (event) => {

        event.preventDefault()


        // Check password confirmation

        if (password !== confirmPassword) {

            setMessage("Passwords do not match")

            return

        }


        try {

            // Create user account

            await axios.post(
                "http://moto-check-backend.onrender.com/api/accounts/register/",
                {
                    username: username,
                    email: email,
                    password: password
                }
            )


            setMessage("Account created successfully")


            // Go to login page

            setTimeout(() => {

                navigate("/login")

            }, 1000)


        } catch (error) {

            console.log("ERROR:", error)

            console.log(
                "STATUS:",
                error.response?.status
            )

            console.log(
                "DATA:",
                error.response?.data
            )


            // Show backend error if available

            if (error.response?.data) {

                const data = error.response.data

                if (data.username) {

                    setMessage(
                        "Username already exists"
                    )

                } else if (data.email) {

                    setMessage(
                        "Email is already registered"
                    )

                } else {

                    setMessage(
                        "Registration failed"
                    )

                }

            } else {

                setMessage(
                    "Registration failed"
                )

            }

        }

    }


    return (

        <div className="auth-page">


            {/* Full-page Space Background */}

            <div
                className="space-bg"
                aria-hidden="true"
            >

                <div className="starfield" />


                <div className="planet planet-1">

                    <div className="planet-ring" />

                </div>


                <div className="planet planet-2" />

                <div className="planet planet-3" />

                <div className="planet planet-4" />

                <div className="moon" />


                <div className="shooting-star star-1" />

                <div className="shooting-star star-2" />

                <div className="shooting-star star-3" />

                <div className="shooting-star star-4" />

            </div>


            {/* Registration Container */}

            <div className="auth-container">


                <h1>
                    MOTO CHECK
                </h1>


                <h2>
                    Create Account
                </h2>


                <form onSubmit={handleSubmit}>


                    {/* Username */}

                    <div className="form-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            required
                        />

                    </div>


                    {/* Email */}

                    <div className="form-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />

                    </div>


                    {/* Password */}

                    <div className="form-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    {/* Confirm Password */}

                    <div className="form-group">

                        <label>
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    {/* Create Account Button */}

                    <button
                        type="submit"
                        className="auth-button"
                    >
                        Create Account
                    </button>


                </form>


                {/* Message */}

                {message && (

                    <p className="auth-message">
                        {message}
                    </p>

                )}


                {/* Login Link */}

                <p>

                    Already have an account?{" "}

                    <Link to="/login">
                        Sign In
                    </Link>

                </p>


            </div>

        </div>

    )

}


export default RegisterPage
