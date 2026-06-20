export default function ContactPage() {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <p className="subtext">
                We usually respond within 24 hours.
            </p>

            {/* FORM */}
            <div className="contact-card">
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <textarea placeholder="Your Message" required />

                    <label className="checkbox">
                        <input type="checkbox" required />
                        <span>I agree to the Privacy Policy</span>
                    </label>

                    <button type="submit" className="btn-submit">
                        Send Message
                    </button>
                </form>
            </div>

            {/* SOCIAL */}
            <div className="social-section">
                <h2>You can also find us online!</h2>

                <div className="social-links">
                    <a href="https://www.linkedin.com" target="_blank">
                        LinkedIn
                    </a>

                    <a href="https://www.instagram.com" target="_blank">
                        Instagram
                    </a>

                    <a href="https://www.youtube.com" target="_blank">
                        YouTube
                    </a>
                </div>
            </div>
        </div>
    );
}