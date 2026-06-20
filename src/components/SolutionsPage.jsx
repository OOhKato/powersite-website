import SubpageLayout from "../components/SubpageLayout";
import Solution from "../components/Solution";
import InvestorCTA from "../components/InvestorCTA";

export default function SolutionsPage() {
    return (
        <SubpageLayout>

            <Solution />

            {/* System Overview */}
            <section className="section">
                <div className="container">

                    <h2>System Overview</h2>

                    <p>
                        Powerwise is an AI-driven control system for renewable energy assets.
                        It connects production, storage and market data into one autonomous decision engine.
                    </p>

                    <div className="grid">

                        <div className="card">
                            <h3>Data Ingestion</h3>
                            <p>Live inputs from IoT sensors, grids, weather and pricing APIs.</p>
                        </div>

                        <div className="card">
                            <h3>AI Optimization Engine</h3>
                            <p>Predicts optimal production, storage and selling strategies.</p>
                        </div>

                        <div className="card">
                            <h3>Autonomous Execution</h3>
                            <p>Automated decisions executed in real-time across systems.</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Infrastructure */}
            <section className="section">
                <div className="container">

                    <h2>Security & Infrastructure</h2>

                    <div className="grid">

                        <div className="card">
                            <h3>GDPR Compliance</h3>
                            <p>EU-compliant data handling and processing standards.</p>
                        </div>

                        <div className="card">
                            <h3>Secure Architecture</h3>
                            <p>End-to-end encryption and role-based system access.</p>
                        </div>

                        <div className="card">
                            <h3>Scalable Cloud</h3>
                            <p>Designed for multi-site industrial energy systems.</p>
                        </div>

                    </div>

                </div>
            </section>

            <InvestorCTA />

        </SubpageLayout>
    );
}