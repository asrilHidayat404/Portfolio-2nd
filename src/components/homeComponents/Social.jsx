const Social = () => {
    return (
        <div className="bg-slate-300 rounded-lg shadow-md p-6 mb-6 flex-1">
                <h2 className="text-xl font-semibold mb-4">Social Media</h2>
                <ul className="text-gray-800">
                    <li className="mb-2">
                        <strong>Facebook:</strong> <a href="https://www.facebook.com/" className="text-blue-600">As Real</a>
                    </li>
                    <li className="mb-2">
                        <strong>Instagram:</strong> <a href="https://www.instagram.com/" className="text-pink-600">Captaint_11th</a>
                    </li>
                    {/* Tambahkan informasi media sosial lainnya sesuai kebutuhan */}
                </ul>
            </div>
    )
}
export default Social