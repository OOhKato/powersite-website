export default function Solution() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="container">

                    <h1>Autonomous Energy Intelligence for the Power-to-X Era</h1>

                    <p>
                        Powerwise turns renewable energy systems into self-optimizing assets
                        that continuously reduce costs and maximize output using AI decision engines.
                    </p>

                    <div className="hero-buttons">

                        <a className="btn secondary" href="/contact">
                            Request Pitch Deck
                        </a>
                    </div>

                </div>
            </section>

            {/* PROBLEM */}
            <section className="section">
                <div className="container">

                    <h2>The Problem</h2>

                    <div className="grid">

                        <div className="card">
                            <h3>Energy Waste</h3>
                            <p>Renewable systems lose value due to poor timing and inefficiencies.</p>
                        </div>

                        <div className="card">
                            <h3>Data Overload</h3>
                            <p>Operators cannot process millions of signals in real time.</p>
                        </div>

                        <div className="card">
                            <h3>Manual Decisions</h3>
                            <p>Human operators cannot react fast enough to market changes.</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* SOLUTION */}
            <section className="section">
                <div className="container">

                    <h2>Our Solution</h2>

                    <p>
                        Powerwise uses AI models to forecast energy production, market demand,
                        and grid conditions — then automatically executes optimal decisions.
                    </p>

                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="section">
                <div className="container">

                    <h2>How It Works</h2>

                    <div className="grid">

                        <div className="card">
                            <h3>1. Connect</h3>
                            <p>Integrate energy assets and data sources.</p>
                        </div>

                        <div className="card">
                            <h3>2. Analyze</h3>
                            <p>AI processes live and historical system data.</p>
                        </div>

                        <div className="card">
                            <h3>3. Optimize</h3>
                            <p>System calculates best energy strategy in real time.</p>
                        </div>

                        <div className="card">
                            <h3>4. Execute</h3>
                            <p>Automated decisions are applied instantly.</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* DEMO */}
            <section className="section demo">
                <div className="container">

                    <h2>Live System Demo</h2>

                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    />

                    <div style={{ marginTop: "20px" }}>
                        <a className="btn" href="/contact">
                            Request Live Demo Access
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}