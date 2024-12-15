import logo192 from '../assets/logo192.png';


export default function Navbar() {
    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-4 lg:px-20 xl:px-36'>
        <div className="flex justify-between items-center text-white">
            <img src={logo192} className="App-logo w-10 rounded-full" alt="logo192.png" />
            <ul className="hidden md:flex">
            <li className="p-4"><a href="#home" className="hover:underline">About</a></li>
            <li className="p-4"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-4"><a href="#honors" className="hover:underline">Gallery</a></li>
            <li className="p-4"><a href="#certs" className="hover:underline">Certfications</a></li>
            </ul>
            
        </div>
    </div>
    )
}
