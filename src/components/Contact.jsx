import { useTheme } from "../ThemeContext";

export default function Contact() {
    const { light } = useTheme();

    const heading = light ? "text-gray-900" : "text-white";
    const body = light ? "text-gray-500" : "text-gray-400";

    const card = light
        ? "bg-white border-gray-300 shadow-sm"
        : "bg-black border-gray-800";

    const input = light
        ? "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
        : "bg-black border-gray-700 text-white placeholder:text-gray-500";

    return (
        <div className="w-full max-w-3xl mx-auto px-6 py-24 space-y-12 text-center">

            <div className="space-y-4">
                <h1 className={`text-4xl md:text-5xl font-bold ${heading}`}>
                    Contact Us
                </h1>

                <p className={body}>
                    We usually respond within 24 hours.
                </p>
            </div>

            <div className={`p-6 md:p-8 rounded-2xl border space-y-4 ${card}`}>

                <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full rounded-lg px-4 py-3 border ${input}`}
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className={`w-full rounded-lg px-4 py-3 border ${input}`}
                />

                <textarea
                    rows={5}
                    placeholder="Your Message"
                    className={`w-full rounded-lg px-4 py-3 border resize-none ${input}`}
                />

                {/* FIX CHECKBOX */}
                <label className={`flex items-center gap-2 text-sm ${body}`}>
                    <input
                        type="checkbox"
                        required
                        className="h-4 w-4 accent-green-500"
                    />
                    I agree to the Privacy Policy
                </label>

                <button className="w-full py-3 rounded-lg bg-green-500 text-black font-bold hover:bg-green-400 transition">
                    Send Message
                </button>
            </div>

        </div>
    );
}
