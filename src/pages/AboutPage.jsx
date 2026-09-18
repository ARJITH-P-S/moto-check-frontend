import "./AboutPage.css"

function AboutPage() {
    return (
        <div className="about-page">

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

            <section className="about-hero">
                <h1>About Moto Check</h1>
                <p>
                    A simple way to keep track of your bike and never miss
                    an important service.
                </p>
            </section>

            <section className="about-content">

                <div className="about-card">
                    <h2>🏍️ What is Moto Check?</h2>
                    <p>
                        Moto Check is a bike maintenance management application
                        designed to help riders keep their bike information,
                        service history, and maintenance schedules organized
                        in one place.
                    </p>
                </div>

                <div className="about-card">
                    <h2>🔧 Why Moto Check?</h2>
                    <p>
                        Regular maintenance is important for keeping a bike
                        reliable and safe. Moto Check helps you keep track of
                        when your bike was last serviced and when the next
                        service may be due.
                    </p>
                </div>

                <div className="about-card">
                    <h2>📊 What You Can Do</h2>
                    <ul>
                        <li>Register and manage your bike</li>
                        <li>Track your bike information</li>
                        <li>Record service details</li>
                        <li>Monitor your service schedule</li>
                        <li>Keep your maintenance information organized</li>
                    </ul>
                </div>

                <div className="about-card">
                    <h2>🎯 Our Goal</h2>
                    <p>
                        Our goal is to make bike maintenance simple,
                        organized, and accessible so riders can spend less
                        time worrying about service dates and more time
                        enjoying the ride.
                    </p>
                </div>

            </section>

            <section className="about-footer">
                <h2>Ride More. Maintain Better.</h2>
                <p>
                    Keep your bike healthy with Moto Check.
                </p>
            </section>

        </div>
    )
}

export default AboutPage