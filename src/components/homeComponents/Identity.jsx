import { useEffect } from "react";

const Identity = ({Avatar}) => {
    useEffect(() => {
        window.AOS.init({ // Initialization
          duration: 1000
        });
      });
    return (
        
            <div data-aos="fade-right" className="flex-1 border rounded-lg hover:flex-[5] transition-all duration-200" style={{
                backgroundImage: `url(${Avatar})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto 100%",
                transition: ".4s all"
            }}>
            </div>
    )
} 
export default Identity