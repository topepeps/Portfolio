import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Achievements</h1>
            <p className="font-light text-gray-400">Here are some of my Achievements.</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Champion in Mobile Legend Tournament in our barangay." />
                <HonorCard name="3rd Place Winner of IT Network System Administration " />
                <HonorCard name="1st Place Winner of IT Network System Administration " />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
