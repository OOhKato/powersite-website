import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { PageSection, PageContainer, SectionHeader } from "./Section";

const plans = [
    {
        name: "Optimizer",
        price: "€36,000",
        period: "per year",
        summary: "Real-time optimization for a single renewable project.",
        features: [
            "Real-time optimization",
            "AI reports",
            "Non-automated scheduler",
            "Up to 1 RES project",
        ],
    },
    {
        name: "RenewBrain",
        price: "€72,000",
        period: "per year",
        summary: "Quantum-powered automation that scales across your portfolio.",
        features: [
            "Quantum optimization (3× faster)",
            "Automated actions",
            "Boosted self-learning",
            "Up to 3 RES projects",
        ],
        featured: true,
    },
    {
        name: "Copilot",
        price: "€57,000",
        period: "per year",
        summary: "AI-automated models with a conversational assistant.",
        features: [
            "AI-automated models",
            "Partial scheduler + add-ons",
            "AI-Chat assistant",
            "Up to 1 RES project",
        ],
    },
];

export default function BusinessModel({ standalone = false }) {
    const { light } = useTheme();

    const heading = light ? "text-gray-900" : "text-white";
    const body = light ? "text-gray-500" : "text-gray-400";
    const muted = light ? "text-gray-500" : "text-gray-600";

    const sectionBorder = light ? "border-green-500/20" : "border-green-500/8";

    const badge = light
        ? "border-green-500/40 bg-green-500/8 text-green-700"
        : "border-green-500/30 bg-green-500/5 text-green-400";

    const card = light
        ? "bg-white border-green-500/25 hover:border-green-500/50 shadow-sm"
        : "bg-black border-green-500/15 hover:border-green-500/40";

    const featuredCard = light
        ? "bg-green-500/[0.06] border-green-500/55 shadow-md"
        : "bg-green-500/[0.07] border-green-500/50";

    return (
        <PageSection className={`relative ${standalone ? "" : "border-t"} ${sectionBorder}`}>
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <PageContainer className="relative z-10">
                <SectionHeader>
                    <span className={`inline-block mb-4 text-xs font-bold uppercase tracking-widest border px-3 py-1 rounded-full ${badge}`}>
                        Business Model
                    </span>

                    <h2 className={`mb-4 text-3xl sm:text-4xl md:text-5xl font-black text-center ${heading}`}>
                        Pricing That Scales With Your <span className="text-green-500">Savings</span>
                    </h2>

                    <p className={`mx-auto max-w-2xl text-base sm:text-lg text-center ${body}`}>
                        A subscription model built around results. As our motto goes: if you don’t save,
                        you don’t pay.
                    </p>
                </SectionHeader>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch w-full">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`flex flex-col rounded-2xl border p-6 md:p-8 transition ${
                                plan.featured ? featuredCard : card
                            }`}
                        >
                            <h3 className={`font-bold text-xl mb-2 text-center ${heading}`}>
                                {plan.name}
                            </h3>

                            <p className={`text-sm mb-5 text-center ${body}`}>
                                {plan.summary}
                            </p>

                            <div className="mb-5 flex justify-center items-baseline gap-1.5">
                                <span className="text-3xl font-black text-green-500">
                                    {plan.price}
                                </span>
                                <span className={`text-xs ${muted}`}>{plan.period}</span>
                            </div>

                            <ul className="mb-6 flex flex-col gap-2.5">
                                {plan.features.map((f) => (
                                    <li key={f} className={`flex gap-2 text-sm ${body}`}>
                                        <span className="text-green-500">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/contact"
                                className="mt-auto px-6 py-3 text-center bg-green-500 text-black rounded-xl font-bold hover:bg-green-400 transition"
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </PageContainer>
        </PageSection>
    );
}
