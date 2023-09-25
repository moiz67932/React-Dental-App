import {React,useRef,useEffect} from 'react'
import Video from '../assets/BgVideo.mp4';
import gsap from 'gsap';

const Hero = () => {

    let hero = useRef(null);
    let text = useRef(null);

    useEffect(() => {
        gsap.fromTo(hero,{opacity:0},{opacity:1,duration:2, delay:1})
        gsap.fromTo(text,{opacity:0},{opacity:1, delay:2, duration:2})
    })
    return (
        <>
        <div className="" >
            <video src={Video} ref={el=>hero=el} className='absolute h-[90vh] w-full object-cover' muted autoPlay loop playsInline disablePictureInPicture></video>

            <div className="relative mx-36 w-[480px] py-40 shrink-0" ref={el=>text=el}>
                <div className="text-2xl font-karla font-semibold text-white">TRUSTED DENVER TECH CENTER DENTISTS</div>
                <div className="text-[60px] py-5 font-serif leading-[67px] text-white">Exceptional care for all ages</div>
                <div className="text-2xl py-5 font-karla font-semibold">
                    <button className='bg-slate-700 text-white px-6 py-4 rounded-lg'>
                        BOOK ONLINE
                    </button>
                </div>
                <div className="text-xl font-karla font-semibold text-white">OR CALL (720) 730-9140</div>
            </div>
            </div>
        </>
    )
}

export default Hero