const Contact = () => {
    return (
        <div id='contact' className="py-16 ">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-xl font-semibold">Our Office</h2>
                        <p>123 Main Street</p>
                        <p>City, State ZIP Code</p>
                        <p>Country</p>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Contact Form</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                                <input type="text" id="name" name="name" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                <input type="email" id="email" name="email" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
