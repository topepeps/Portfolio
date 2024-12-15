import {useState} from 'react'




import hr from '../assets/curve-hr.svg'
import image from '../assets/me.png';
export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='md:w-3/6 md:p-4'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200"  src={image} alt="me" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-xl text-gray-400">Hello i am </h1>
                    <h1 className="text-2xl font-bold">Christopher Gerongco</h1>
                    <p class="text-xl font-bold text-gray-300">Bachelor of Science in Computer Science</p>
                    <p className="text-md font-light text-gray-400 ">22-year-old pursuing a Bachelor of Science in Computer Science at NEMSU Lianga Campus. I find great passion and excitement in exploring the dynamic world of technology and its ever-evolving landscape. As a resident of P-4 Patin-ay, Prosperidad, Agusan del Sur, I am not only immersed in the academic realm but also deeply connected to the vibrant community that surrounds me.

My journey in the field of computer science has been a thrilling exploration of problem-solving, coding, and innovation. I am committed to honing my skills to contribute meaningfully to the ever-expanding digital frontier. Beyond the realms of algorithms and programming languages, I am eager to understand the real-world applications of technology and how it can be harnessed to address societal challenges.

Living in Agusan del Sur has provided me with a unique perspective, emphasizing the importance of community and collaboration.</p>
                </div>
                
                
                <ul className='flex mt-2 gap-4 items-center'>
                   
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}
