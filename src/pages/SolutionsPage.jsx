import SubpageLayout from "../components/SubpageLayout";
import Solution from "../components/Solution";
import InvestorCTA from "../components/InvestorCTA";
import { useTheme } from "../ThemeContext";

export default function SolutionsPage() {
    const { light } = useTheme();

    const heading = light ? "text-gray-900" : "text-white";
    const body = light ? "text-gray-500" : "text-gray-400";
    const card = light ? "bg-white border-gray-200" : "bg-black border-gray-800";

    return (
        <SubpageLayout>

            <Solution />

            {/* System Overview */}
            <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-6 text-center">

                <h2 className={`text-3xl md:text-4xl font-semibold ${heading}`}>
                    System Overview
                </h2>

                <p className={`max-w-2xl mx-auto ${body}`}>
                    Powerwise is an AI-driven control system for renewable energy assets.
                    It connects production, storage and market data into one autonomous decision engine.
                </p>

                <div className="grid md:grid-cols-3 gap-6 w-full mt-10">
                    {[
                        ["Data Ingestion", "Live inputs from IoT sensors, grids, weather and pricing APIs."],
                        ["AI Optimization Engine", "Predicts optimal production, storage and selling strategies."],
                        ["Autonomous Execution", "Automated decisions executed in real-time across systems."]
                    ].map(([title, text]) => (
                        <div
                            key={title}
                            className={`p-6 rounded-xl border transition hover:border-green-500 ${card}`}
                        >
                            <h3 className={`text-lg font-semibold mb-2 ${heading}`}>
                                {title}
                            </h3>

                            <p className={body}>
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

            </section>

            {/* Infrastructure */}
            <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-6 text-center">

                <h2 className={`text-3xl md:text-4xl font-semibold ${heading}`}>
                    Security & Infrastructure
                </h2>

                <div className="grid md:grid-cols-3 gap-6 w-full mt-10">
                    {[
                        ["GDPR Compliance", "EU-compliant data handling and processing standards."],
                        ["Secure Architecture", "End-to-end encryption and role-based system access."],
                        ["Scalable Cloud", "Designed for multi-site industrial energy systems."]
                    ].map(([title, text]) => (
                        <div
                            key={title}
                            className={`p-6 rounded-xl border transition hover:border-green-500 ${card}`}
                        >
                            <h3 className={`text-lg font-semibold mb-2 ${heading}`}>
                                {title}
                            </h3>

                            <p className={body}>
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

            </section>

            <InvestorCTA />

        </SubpageLayout>
    );
}
