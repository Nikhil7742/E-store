export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 pt-8 pb-3">
            <div className="max-w-[] mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Brand */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Brand</h3>
                        <p className="text-sm">
                            Providing top-notch products and services to enhance your everyday life. Excellence is our commitment.
                        </p>
                    </div>
                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Support</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    FAQs
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Help Center
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Subscribe</h3>
                        <p className="text-sm mb-4">
                            Get the latest updates and offers right in your inbox.
                        </p>
                        <form className="flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 rounded-l bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 rounded-r text-white hover:bg-blue-600"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
