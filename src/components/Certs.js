import CertCard from "./CertCard.js"


import hack from "../assets/certs/hack.webp"
import mobile from "../assets/certs/mobile.jpg"
import typing from "../assets/certs/typing.webp"


// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Champion in Mobile Legend Tournament" img={mobile}  date="Jul 2021" />
                <CertCard name="1st Place in Hacking Tournament" img={hack}  date="Jun 2020" />
                <CertCard name="1st Place in Typing Master Tournament" img={typing}  date="Feb 2020" />
               

            </div>
            
        </div>
    )
}
