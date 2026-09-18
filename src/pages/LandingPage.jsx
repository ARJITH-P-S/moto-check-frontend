import { Link } from "react-router-dom"
import "./LandingPage.css"

function LandingPage() {

    return (

        <div className="landing-page">

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

            <main className="landing-content">

                <h1>
                    MOTO CHECK
                </h1>

                <p>
                    Your bike deserves regular care. Moto Check makes it easier
                    to manage your bike’s maintenance, keep track of service
                    records, and know when your next service is due—all from
                    one simple application.
                </p>

                <div className="landing-buttons">

                    <Link to="/register" className="btn">
                        Create Account
                    </Link>

                    <Link to="/login" className="btn btn-outline">
                        Sign In
                    </Link>

                </div>

            </main>

        </div>

    )
}

export default LandingPage