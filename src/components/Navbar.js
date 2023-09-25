import {React,useRef,useEffect} from 'react'
import Logo from '../assets/Logo.png';
import gsap from 'gsap';

export const Navbar = () => {

    let navbar = useRef(null);

    useEffect(() => {
        gsap.fromTo(navbar,{opacity:0,y:60},{opacity:1,y:0, duration:1})
    })

    return (
        <>
            <header >
                <nav className='flex flex-row justify-between py-8 px-10  font-karla font-semibold' ref={el=>navbar=el}>
                    <div className="">
                        <img src={Logo} className='w-20' alt="" />
                    </div>

                    <div className="flex flex-row gap-x-10 ">
                        <div className="">ABOUT </div>
                        <div className="">SERVICES</div>
                        <div className="">WARRANTY</div>
                        <div className="">NEW PATIENTS</div>
                        <div className="bg-slate-300 p-2 -my-[6px] cursor-pointer rounded-lg items-center justify-center">BOOK ONLINE</div>
                        
                    </div>
                </nav>
            </header>
        </>
    )
}
