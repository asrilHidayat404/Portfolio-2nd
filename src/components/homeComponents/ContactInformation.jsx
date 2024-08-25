const ContactInformation = () => {
    return (
                    <div className="bg-slate-300 rounded-lg shadow-md p-6 mb-6 flex-1">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <ul className="text-gray-800">
                    <li className="mb-2">
                        <strong>WhatsApp:</strong> <a href="https://wa.me/6281234567890" className="text-green-600">+62 812-4935-6054</a>
                    </li>
                    <li className="mb-2">
                        <strong>Address:</strong> Street. AMD, Sumenep, East Java, Post Code 69435
                    </li>
                    {/* Tambahkan informasi kontak lainnya sesuai kebutuhan */}
                </ul>
            </div>
    )
}

export default ContactInformation