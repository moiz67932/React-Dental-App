import { React, useRef, useEffect } from 'react'
import Doctors from '../assets/Doctors.jpg';
import Tick from '../assets/Tick.png';
import Badge from '../assets/Warranty.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const Featuring = () => {

    let p1 = useRef(null);
    let p2 = useRef(null);
    let p3 = useRef(null);
    let p4 = useRef(null);
    let img = useRef(null);
    let badge = useRef(null);

    useEffect(() => {
        gsap.fromTo(p1, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, duration: 2, scrollTrigger: {
                trigger: p1,
            }
        })
        gsap.fromTo(p2, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, delay: 0.5, duration: 2, scrollTrigger: {
                trigger: p1,
            }
        })
        gsap.fromTo(p3, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, delay: 0.75, duration: 2, scrollTrigger: {
                trigger: p1,
            }
        })
        gsap.fromTo(p4, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, delay: 1, duration: 2, scrollTrigger: {
                trigger: p1,
            }
        })
        gsap.fromTo(img, { opacity: 0, y: 30 }, {
            opacity: 1, y: 0, delay: 1, duration: 2, scrollTrigger: {
                trigger: p1,
            }
        })
        gsap.fromTo(badge, { opacity: 0, y: 30}, {
            opacity: 1, y: 0, delay: 1.5,duration: 0.75, scrollTrigger: {
                trigger: p1,
            }
        })

    })
    return (
        <>
            <div className="bg-[#2a6c83] text-white pt-24 mt-[13px] pb-24 px-28">
                <div className="bg-[#2a6c83] text-white py-16  px-8 border-r-white border-[0.09em] rounded-3xl">
                    <div className="bg-[#2a6c83] p-10 flex flex-row gap-10">
                        <div className="left">
                            <div className="text-[50px] font-serif pb-6 font-sembold" ref={el => p1 = el}>Dentistry Done Right</div>
                            <div className="relative font-karla text-lg pb-8 font-sembold " ref={el => p2 = el}>Adults and kids, we welcome patients of all ages! Our team is passionate about building lifetime relationships through positive experiences, featuring:</div>
                            <div className="font-karla text-lg pb-6 font-sembold" ref={el => p3 = el}>
                                <div className="flex flex-row pb-2 gap-2">
                                    <img src={Tick} className='w-6 h-6' alt="" />
                                    Transparent Pricing
                                    <br /></div>
                                <div className="flex flex-row pb-2 gap-2">
                                    <img src={Tick} className='w-6 h-6' alt="" />
                                    Unparalleled Warranty <br /></div>
                                <div className="flex flex-row pb-2 gap-2">
                                    <img src={Tick} className='w-6 h-6' alt="" />
                                    FREE Whitening (for life!) <br /></div></div>
                                    <div className="flex flex-row gap-2"  ref={el => p4 = el}> 
                                    <div className="text-[#e7ca71] text-[60px] rounded-full font-light"> | </div>
                            <div className="font-karla text-lg italic font-sembold mt-6">
                                 “Our word is our worth. We promise to do it right, timely, and for a fair price.”</div>
                                </div> 
                        </div>
                        <div className="right ">
                            <img src={Doctors} className='w-[1300px]' ref={el => img = el} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end -mt-[200px] -mr-14 relative" ref={el=>badge=el}>
                    <img src={Badge} className='w-[240px]
                 ' alt="" />
                 </div>

            </div>
        </>
    )
}

export default Featuring