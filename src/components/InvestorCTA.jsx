import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { PageSection, PageContainer } from "./Section";

const useOfFunds = [
    { pct: 50, label: "Product Development & Pilot Testing" },
    { pct: 30, label: "Infrastructure & Operations" },
    { pct: 10, label: "Marketing & Sales" },
    { pct: 10, label: "Expansion & Growth Initiatives" },
];

export default function InvestorCTA({ standalone = false }) {
    const { light } = useTheme();

    const heading = light ? "text-gray-900" : "text-white";
    const body = light ? "text-gray-600" : "text-gray-400";
    const muted = light ? "text-gray-500" : "text-gray-600";

    const sectionBorder = light ? "border-green-500/20" : "border-green-500/8";

    const badge = light
        ? "border-green-500/40 bg-green-500/8 text-green-700"
        : "border-green-500/30 bg-green-500/5 text-green-400";

    const panel = light
        ? "border-green-500/25 bg-white shadow-sm"
        : "border-green-500/15 bg-black";

    return (
        <PageSection className={`relative ${standalone ? "" : "border-t"} ${sectionBorder}`}>
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <PageContainer className="relative z-10">
                <div className="flex flex-col items-center text-center gap-12">

                    <div className="max-w-2xl">
                        <span className={`inline-block mb-4 text-xs font-bold uppercase border px-3 py-1 rounded-full ${badge}`}>
                            Ready to Invest?
                        </span>

                        <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black ${heading}`}>
                            Fuel the Future of <span className="text-green-500">Energy</span>
                        </h2>

                        <p className={`mb-6 ${body}`}>
                            We’re raising to turn wasted renewable energy into value.
                        </p>

                        <div className="flex justify-center">
                            <Link
                                to="/contact"
                                className="px-7 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-400 hover:text-black transition"
                            >
                                Get in contact
                            </Link>
                        </div>
                    </div>

                    <div className={`w-full max-w-xl rounded-2xl border p-6 ${panel}`}>
                        <h3 className={`mb-2 font-bold text-lg text-center ${heading}`}>
                            Use of Funds
                        </h3>

                        <p className={`mb-6 text-sm text-center ${muted}`}>
                            How investment translates into growth.
                        </p>

                        <div className="space-y-4">
                            {useOfFunds.map((f) => (
                                <div key={f.label}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className={body}>{f.label}</span>
                                        <span className="text-green-500 font-bold">{f.pct}%</span>
                                    </div>

                                    <div className="h-2 bg-gray-800 rounded-full">
                                        <div
                                            className="h-full bg-green-500 rounded-full"
                                            style={{ width: `${f.pct}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </PageContainer>
        </PageSection>
    );
}
