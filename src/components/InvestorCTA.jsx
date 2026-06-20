import { Link } from "react-router-dom";

export default function InvestorCTA() {
    return (
        <section className="section investor">
            <div className="container">
                <h2>For Investors</h2>

                <p>
                    Get access to our pitch deck, market analysis,
                    and growth strategy for Powerwise AI.
                </p>

                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <Link to="/contact" className="btn">
                        Request Pitch Deck
                    </Link>

                </div>
            </div>
        </section>
    );
}