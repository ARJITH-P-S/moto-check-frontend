import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./MyBikePage.css"

function MyBikePage() {

    const [bike, setBike] = useState(null)
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {

        const accessToken = localStorage.getItem("access")

        axios.get(
            "https://moto-check-backend.onrender.com/api/bikes/",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }
        )
        .then((response) => {

            console.log("BIKE IMAGE:", response.data[0].bike_image)

            if (response.data.length > 0) {
                setBike(response.data[0])
                setMessage("")
            } else {
                setMessage("No bike registered")
            }

        })
        .catch((error) => {

            console.log("ERROR:", error)
            setMessage("Failed to load bike details")

        })

    }, [])

    return (

        <div className="my-bike-page">

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

            <h1>My Bike</h1>

            {message && !bike && (
                <p>{message}</p>
            )}

            {bike && (

                <div className="bike-card">

                    <img
                        src={bike.bike_image}
                        alt={bike.bike_model}
                        className="bike-image"
                    />

                    <div className="bike-details">

                        <p>
                            <strong>Bike Model:</strong>
                            {bike.bike_model}
                        </p>

                        <p>
                            <strong>Last Service Date:</strong>
                            {bike.last_service_date}
                        </p>

                        <p>
                            <strong>Last Service KM:</strong>
                            {bike.last_service_km} km
                        </p>

                        <p>
                            <strong>Current Odometer:</strong>
                            {bike.current_km} km
                        </p>

                    </div>

                    <div className="bike-buttons">

                        <Link
                            to="/edit-bike"
                            className="bike-btn"
                        >
                            Make Changes
                        </Link>

                        <Link
                            to="/service"
                            className="bike-btn"
                        >
                            Next Service Details
                        </Link>

                    </div>

                </div>

            )}

        </div>

    )
}

export default MyBikePage