const ContactForm = () => {
    return (
                        <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Name:</label>
                        <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Email:</label>
                        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">Message:</label>
                        <textarea id="message" name="message" className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="bg-slate-950 py-2 px-6 rounded-lg hover:bg-slate-600 text-white">Send</button>
                </form>
    )
}

export default ContactForm