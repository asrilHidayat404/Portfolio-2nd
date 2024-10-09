import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";
import Social from "./Social";

const Contact = () => {
    return (
        <div className="w-full mx-auto flex flex-col px-10 lg:pt-[300px] pt-[100px] py-20 relative" id="contact"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute top-0 -z-10 left-0">
                <path fill="#cbd5e0" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <header className="font-bold text-4xl text-center mb-10">
                Contact
            </header>
            <div className="w-full flex gap-10 lg:flex-row flex-col">
                <Social />
                <ContactInformation />
            </div>
            <div className="bg-slate-300 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
