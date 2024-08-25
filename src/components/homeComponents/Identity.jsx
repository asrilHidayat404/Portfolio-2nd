const Identity = ({Avatar}) => {
    return (
        
            <div className="flex-1 border rounded-lg hover:flex-[5] transition-all duration-200" style={{
                backgroundImage: `url(${Avatar})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 100%"
            }}>
            </div>
    )
} 
export default Identity