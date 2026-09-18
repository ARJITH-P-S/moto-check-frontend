import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./AuthPage.css"

function EditBikePage() {

    const navigate = useNavigate()

    const [bikeId, setBikeId] = useState(null)

    const [bikeImage, setBikeImage] = useState(null)
    const [currentImage, setCurrentImage] = useState("")

    const [bikeModel, setBikeModel] = useState("")
    const [purchaseDate, setPurchaseDate] = useState("")
    const [lastServiceDate, setLastServiceDate] = useState("")
    const [lastServiceKm, setLastServiceKm] = useState("")
    const [currentKm, setCurrentKm] = useState("")
    const [phone, setPhone] = useState("")

    const [message, setMessage] = useState("Loading...")


    // Load existing bike details
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

            if (response.data.length > 0) {

                const bike = response.data[0]

                setBikeId(bike.id)
                setBikeModel(bike.bike_model)
                setPurchaseDate(bike.purchase_date)
                setLastServiceDate(bike.last_service_date)
                setLastServiceKm(bike.last_service_km)
                setCurrentKm(bike.current_km)
                setPhone(bike.phone)
                setCurrentImage(bike.bike_image)

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


    // Save changes
    const handleSave = async (event) => {

        event.preventDefault()

        const accessToken = localStorage.getItem("access")

        const formData = new FormData()

        formData.append("bike_model", bikeModel)
        formData.append("purchase_date", purchaseDate)
        formData.append("last_service_date", lastServiceDate)
        formData.append("last_service_km", lastServiceKm)
        formData.append("current_km", currentKm)
        formData.append("phone", phone)

        if (bikeImage) {

            formData.append("bike_image", bikeImage)

        }

        try {

            await axios.patch(
                `https://moto-check-backend.onrender.com/api/bikes/${bikeId}/`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            )

            navigate("/my-bike")

        } catch (error) {

            console.log("SAVE ERROR:", error)
            console.log("STATUS:", error.response?.status)
            console.log("DATA:", error.response?.data)

            setMessage("Failed to save changes")

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

                <h2>Edit Your Bike</h2>


                {message && !bikeId && (

                    <p>{message}</p>

                )}


                {bikeId && (

                    <form onSubmit={handleSave}>

                        {/* Current Bike Image */}

                        <div className="form-group">

                            <label>Current Bike Image</label>

                            <br />

                            <img
                                src={currentImage}
                                alt={bikeModel}
                                style={{
                                    width: "200px",
                                    marginBottom: "10px"
                                }}
                            />

                        </div>


                        {/* Change Bike Image */}

                        <div className="form-group">

                            <label>Change Bike Image</label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={(event) =>
                                    setBikeImage(event.target.files[0])
                                }
                            />

                        </div>


                        {/* Bike Model */}

                        <div className="form-group">

                            <label>Bike Model</label>

                            <input
                                type="text"
                                value={bikeModel}
                                onChange={(event) =>
                                    setBikeModel(event.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Purchase Date */}

                        <div className="form-group">

                            <label>Purchase Date</label>

                            <input
                                type="date"
                                value={purchaseDate}
                                onChange={(event) =>
                                    setPurchaseDate(event.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Last Service Date */}

                        <div className="form-group">

                            <label>Last Service Date</label>

                            <input
                                type="date"
                                value={lastServiceDate}
                                onChange={(event) =>
                                    setLastServiceDate(event.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Last Service Odometer */}

                        <div className="form-group">

                            <label>Last Service Odometer Reading</label>

                            <input
                                type="number"
                                value={lastServiceKm}
                                onChange={(event) =>
                                    setLastServiceKm(event.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Current Odometer */}

                        <div className="form-group">

                            <label>Current Odometer Reading</label>

                            <input
                                type="number"
                                value={currentKm}
                                onChange={(event) =>
                                    setCurrentKm(event.target.value)
                                }
                                required
                            />

                        </div>


                        {/* Phone Number */}

                        <div className="form-group">

                            <label>Phone Number</label>

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


                        {/* Save Button */}

                        <button
                            type="submit"
                            className="auth-button"
                        >
                            Save Changes
                        </button>

                    </form>

                )}

            </div>

        </div>

    )

}

export default EditBikePage