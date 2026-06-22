import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import BusinessModel from "./BusinessModel";

export default function Solution() {
    const { light } = useTheme();

    const heading = light ? "text-gray-900" : "text-white";
    const body = light ? "text-gray-500" : "text-gray-400";
    const card = light
        ? "bg-white border-gray-200"
        : "bg-black border-gray-800";

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-20 space-y-24">

            {/* HERO */}
            <section className="space-y-6 text-center flex flex-col items-center">
                <h1 className={`text-4xl md:text-6xl font-bold ${heading}`}>
                    Autonomous Energy Intelligence for the Power-to-X Era
                </h1>

                <p className={`max-w-2xl ${body}`}>
                    Powerwise turns renewable energy systems into self-optimizing assets
                    that continuously reduce costs and maximize output using AI decision engines.
                </p>

                <Link
                    to="/contact"
                    className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
                >
                    Request Pitch Deck
                </Link>
            </section>

            {/* PROBLEM */}
            <section className="space-y-6 text-center flex flex-col items-center">
                <h2 className={`text-3xl ${heading}`}>The Problem</h2>

                <div className="grid md:grid-cols-3 gap-6 w-full">
                    {[
                        ["Energy Waste", "Renewable systems lose value due to poor timing and inefficiencies."],
                        ["Data Overload", "Operators cannot process millions of signals in real time."],
                        ["Manual Decisions", "Human operators cannot react fast enough to market changes."]
                    ].map(([title, text]) => (
                        <div key={title} className={`p-6 rounded-xl border ${card}`}>
                            <h3 className={heading}>{title}</h3>
                            <p className={body}>{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SOLUTION */}
            <section className="space-y-6 text-center flex flex-col items-center">
                <h2 className={`text-3xl ${heading}`}>Our Solution</h2>

                <p className={`max-w-3xl ${body}`}>
                    Powerwise uses AI models to forecast energy production, market demand,
                    and grid conditions — then automatically executes optimal decisions.
                </p>
            </section>

            {/* HOW IT WORKS */}
            <section className="space-y-6 text-center flex flex-col items-center">
                <h2 className={`text-3xl ${heading}`}>How It Works</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {[
                        ["1. Connect", "Integrate energy assets and data sources."],
                        ["2. Analyze", "AI processes live and historical system data."],
                        ["3. Optimize", "System calculates best energy strategy in real time."],
                        ["4. Execute", "Automated decisions are applied instantly."]
                    ].map(([title, text]) => (
                        <div key={title} className="p-6 border border-gray-800 rounded-xl">
                            <h3 className="text-green-400">{title}</h3>
                            <p className={body}>{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* DEMO */}
            <section className="space-y-6 text-center flex flex-col items-center">
                <h2 className={`text-3xl ${heading}`}>Live System Demo</h2>

                <div className="max-w-3xl w-full">
                    <iframe
                        className="w-full aspect-video rounded-xl"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Demo Video"
                    />
                </div>

                <Link
                    to="/contact"
                    className="px-6 py-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-400 transition"
                >
                    Request Live Demo Access
                </Link>
            </section>

            {/* BUSINESS MODEL */}
            <BusinessModel />

        </div>
    );
}
