import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./AuthPage.css"


function LoginPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = async (event) => {

        event.preventDefault()

        try {

            const response = await axios.post(
                "http://moto-check-backend.onrender.com/api/token/",
                {
                    username: username,
                    password: password
                }
            )

            console.log(response.data)

            localStorage.setItem("access", response.data.access)
            localStorage.setItem("refresh", response.data.refresh)
            localStorage.setItem("username", username)

            navigate("/home")

        } catch (error) {

            console.log(error)

            setMessage("Invalid username or password")

        }

    }


    return (

        <div className="auth-page">

            {/* Full-page Space Background */}
            <div className="space-bg" aria-hidden="true">

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

            <div className="auth-container">

                <h1>MOTO CHECK</h1>

                <h2>Login</h2>


                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>
                            Username
                        </label>

                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="auth-button"
                    >
                        Login
                    </button>

                </form>


                {message && (
                    <p className="auth-message">
                        {message}
                    </p>
                )}


                <p className="auth-link">

                    Don't have an account?

                    <Link to="/register">
                        Register
                    </Link>

                </p>

            </div>

        </div>

    )
}


export default LoginPage