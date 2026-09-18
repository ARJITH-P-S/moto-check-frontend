import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./AuthPage.css"


function RegisterBikePage() {

    const navigate = useNavigate()

    useEffect(() => {

    const checkBike = async () => {

        const accessToken = localStorage.getItem("access")

        try {

            const response = await axios.get(
                "https://moto-check-backend.onrender.com/api/bikes/",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            )

            if (response.data.length > 0) {
                navigate("/my-bike")
            }

        } catch (error) {

            console.log("Bike check error:", error)

        }

    }

    checkBike()

}, [navigate])

    const [bikeImage, setBikeImage] = useState(null)
    const [bikeModel, setBikeModel] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")
    const [lastServiceDate, setLastServiceDate] = useState("")
    const [currentKm, setCurrentKm] = useState("")
    const [lastServiceKm, setLastServiceKm] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [message, setMessage] = useState("")


    const handleSubmit = async (event) => {

        event.preventDefault()

        const accessToken = localStorage.getItem("access")

        const formData = new FormData()

        formData.append("bike_model", bikeModel)
        formData.append("purchase_date", purchaseDate)
        formData.append("last_service_date", lastServiceDate)
        formData.append("current_km", currentKm)
        formData.append("last_service_km", lastServiceKm)
        formData.append("email", email)
        formData.append("phone", phone)

        if (bikeImage) {
            formData.append("bike_image", bikeImage)
        }


        try {

            await axios.post(
                "https://moto-check-backend.onrender.com/api/bikes/",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            )

            navigate("/my-bike")

        } catch (error) {

            console.log("ERROR:", error)
            console.log("STATUS:", error.response?.status)
            console.log(
                "DATA:",
                JSON.stringify(error.response?.data, null, 2)
            )

            setMessage("Failed to register bike")

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

                <h2>Register Your Bike</h2>


                <form onSubmit={handleSubmit}>

                    <div className="form-group">

                        <label>
                            Bike Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(event) =>
                                setBikeImage(event.target.files[0])
                            }
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Bike Model
                        </label>

                        <input
                            type="text"
                            placeholder="Enter bike model"
                            value={bikeModel}
                            onChange={(event) =>
                                setBikeModel(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Purchase Date
                        </label>

                        <input
                            type="date"
                            value={purchaseDate}
                            onChange={(event) =>
                                setPurchaseDate(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Last Service Date
                        </label>

                        <input
                            type="date"
                            value={lastServiceDate}
                            onChange={(event) =>
                                setLastServiceDate(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Last Service Odometer Reading
                        </label>

                        <input
                            type="number"
                            placeholder="Enter KM at last service"
                            value={lastServiceKm}
                            onChange={(event) =>
                                setLastServiceKm(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Current Odometer Reading
                        </label>

                        <input
                            type="number"
                            placeholder="Enter current KM"
                            value={currentKm}
                            onChange={(event) =>
                                setCurrentKm(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label>
                            Phone Number
                        </label>

                        <input
                            type="tel"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(event) =>
                                setPhone(event.target.value)
                            }
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="auth-button"
                    >
                        Register Bike
                    </button>

                </form>


                {message && (
                    <p className="auth-message">
                        {message}
                    </p>
                )}

            </div>

        </div>

    )

}


export default RegisterBikePage