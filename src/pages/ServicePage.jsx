import { useEffect, useState } from "react"
import axios from "axios"
import "./ServicePage.css"


function ServicePage() {

    const [bike, setBike] = useState(null)
    const [message, setMessage] = useState("Loading...")

    const [serviceCompleted, setServiceCompleted] = useState(false)


    const loadBike = async () => {

        const accessToken = localStorage.getItem("access")

        try {

            const response = await axios.get(
                "http://moto-check-backend.onrender.com/api/bikes/",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )

            if (response.data.length > 0) {

                setBike(response.data[0])
                setMessage("")

            } else {

                setMessage("No bike registered")

            }

        } catch (error) {

            console.log("ERROR:", error)

            setMessage("Failed to load bike details")

        }

    }


    useEffect(() => {

        loadBike()

    }, [])


    const handleServiceCompleted = async () => {

        const accessToken = localStorage.getItem("access")

        try {

            await axios.post(
                `http://moto-check-backend.onrender.com/api/bikes/${bike.id}/complete-service/`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }
            )

            setServiceCompleted(true)

            await loadBike()

        } catch (error) {

            console.log("SERVICE ERROR:", error)

            setMessage("Failed to complete service")

        }

    }


    if (!bike) {

        return (

            <div className="my-bike-page">

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

                <p>{message}</p>

            </div>

        )

    }


    const lastServiceDate = bike.last_service_date

    const lastServiceKm = Number(
        bike.last_service_km
    )

    const currentKm = Number(
        bike.current_km
    )


    const serviceIntervalKm = 5000


    const nextServiceKm =
        lastServiceKm + serviceIntervalKm


    const kmLeft =
        nextServiceKm - currentKm


    const lastDate =
        new Date(lastServiceDate)


    const nextDate =
        new Date(lastDate)


    nextDate.setMonth(
        nextDate.getMonth() + 6
    )


    const nextServiceDate =
        nextDate.toLocaleDateString("en-GB")


    const today =
        new Date()


    const dateThresholdReached =
        today >= nextDate


    const kmThresholdReached =
        currentKm >= nextServiceKm


    const serviceDue =
        dateThresholdReached ||
        kmThresholdReached


    return (

        <div className="my-bike-page">


            {/* Space Background */}

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


            <h1>
                Next Service Details
            </h1>


            <div className="bike-card">


                <div className="bike-details">

                    <p>
                        <strong>
                            Current Odometer:
                        </strong>{" "}
                        {currentKm} km
                    </p>


                    <p>
                        <strong>
                            KMs Left:
                        </strong>{" "}
                        {kmLeft > 0 ? kmLeft : 0} km
                    </p>


                    <p>
                        <strong>
                            Last Service:
                        </strong>{" "}
                        {lastServiceDate}
                    </p>


                    <p>
                        <strong>
                            Last Service KM:
                        </strong>{" "}
                        {lastServiceKm} km
                    </p>


                    <p>
                        <strong>
                            Next Service KM:
                        </strong>{" "}
                        {nextServiceKm} km
                    </p>


                    <p>
                        <strong>
                            Next Service Date:
                        </strong>{" "}
                        {nextServiceDate}
                    </p>


                    <p>

                        <strong>
                            Status:
                        </strong>{" "}

                        {serviceDue
                            ? "Service Due"
                            : "Service Not Due"
                        }

                    </p>


                    {serviceDue && (

                        <button
                            onClick={
                                handleServiceCompleted
                            }
                            className="auth-button"
                        >
                            Service Completed
                        </button>

                    )}


                    {serviceCompleted && (

                        <p className="auth-message">
                            Service completed successfully!
                        </p>

                    )}

                </div>


            </div>


        </div>

    )

}


export default ServicePage