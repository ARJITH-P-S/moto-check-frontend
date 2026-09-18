import { useNavigate } from "react-router-dom"
import "./HomePage.css"


function HomePage() {

    const navigate = useNavigate()

    const username = localStorage.getItem("username")

    const displayUsername = username
    ? username.charAt(0).toUpperCase() + username.slice(1)
    : ""


    const handleLogout = () => {

        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        localStorage.removeItem("username")

        navigate("/login")
    }


    return (
        <div className="home-page">

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


            {/* Nav Bar */}
            <nav className="navbar">

                <span className="navbar-brand">MOTO CHECK</span>

                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>

            </nav>


            {/* Hero Section */}
            <section className="hero-section">



                <h1 className="welcome-message">
                    Welcome back, {displayUsername} !
                </h1>

{/*                  <h2>Take Better Care of Your Bike</h2> */}

                <p>
                    Moto Check helps you keep track of your bike's
                    maintenance, service schedule and overall health.
                </p>

                <button onClick={() => navigate("/register-bike")}>
                    Get Started
                </button>

            </section>


            <div className="stardust-divider" aria-hidden="true" />


            {/* Features Section */}
            <section className="features-section">

                <h2>Everything Your Bike Needs</h2>

                <div className="features">

                    <div className="feature-card">

                        <h3>🏍️ Manage Your Bike</h3>

                        <p>
                            Store your bike details and keep all
                            important information in one place.
                        </p>

                    </div>


                    <div className="feature-card">

                        <h3>🔧 Track Maintenance</h3>

                        <p>
                            Keep track of your previous services
                            and maintenance activities.
                        </p>

                    </div>


                    <div className="feature-card">

                        <h3>🔔 Service Reminders</h3>

                        <p>
                            Know when your next service is due
                            based on distance and time.
                        </p>

                    </div>


                    <div className="feature-card">

                        <h3>📊 Monitor Bike Health</h3>

                        <p>
                            Get a simple overview of your bike's
                            maintenance status.
                        </p>

                    </div>

                </div>

            </section>


            <div className="stardust-divider" aria-hidden="true" />


            {/* How It Works */}
            <section className="how-section">

                <h2>How Moto Check Works</h2>

                <div className="steps">

                    <div>

                        <span>01</span>

                        <h3>Register Your Bike</h3>

                        <p>
                            Add your bike and its basic details.
                        </p>

                    </div>


                    <div>

                        <span>02</span>

                        <h3>Track Your Usage</h3>

                        <p>
                            Keep your mileage and service information updated.
                        </p>

                    </div>


                    <div>

                        <span>03</span>

                        <h3>Stay Maintained</h3>

                        <p>
                            Get reminders when your bike needs attention.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    )
}


export default HomePage