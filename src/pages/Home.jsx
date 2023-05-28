import React from "react";
import { Icon } from '@iconify/react';

export default function Home() {

    return (
        <>
            <div className="Content space-y-12 overflow-hidden">

                <div className="lg:hidden space-y-12">

                    <section className="top w-full h-[50vh] bg-[#003566] lg:relative lg:h-[90vh]">
                        <div className="text-center text-white p-2 space-y-4 sm:p-4 md:p-8 lg:absolute lg:flex lg:flex-col lg:justify-center lg:w-[500px] lg:h-[100vh] lg:text-left xl:p-12 xl:w-[600px] 2xl:w-[800px]">
                            <div className="mt-10 text-3xl font-bold sm:text-4xl xl:text-6xl">
                                <p>Capture a picture perfect moments with <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span>.</p>
                            </div>
                            <p className=" sm:font-medium">Streamlining the process of taking formal and beautify photos in photo booths for students and applicants.</p>
                        </div>
                        <img className="hidden lg:block lg:absolute top-[-90px] lg:right-[-250px] xl:right-[-120px] 2xl:right-[-20px] w-auto h-[800px]" src="./img1.png" />
                    </section>

                    <section className="flex flex-col space-y-8">
                        <div className="flex flex-col justify-center items-center text-[#001D3D] space-y-2">
                            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold italic">Features</p>
                            {/* <p className="text-lg md:text-xl font-semibold">QuickSnap Personal is goods for your own use.</p> */}
                        </div>
                        <div className="flex flex-wrap flex-row justify-center items-center space-y-8 lg:space-y-0 xl:space-x-6  text-center font-semibold ">
                            <div className="Card Custom-Card">
                                <img className="Card-Img" src="./gaze.jpg" alt="" />
                                <p className="Card-P">Gaze Estimation and Hand Gesture recognition using Camera Vision for navigating and menu selection</p>
                            </div>
                            <div className="Card Custom-Card">
                                <img className="Card-Img" src="./formal.jpg" alt="" />
                                <p className="Card-P">Formal capturing method of photos good for 1X1 and 2X2 photos</p>
                            </div>
                            <div className="Card Custom-Card">
                                <img className="Card-Img" src="./beauty.jpg" alt="" />
                                <p className="Card-P">Beauty capturing method of photos good for taking selfie and groupie photos.</p>
                            </div>
                        </div>
                    </section>

                </div>

                <div className="hidden lg:block">
                    <section className="w-full mt-6 lg:relative lg:h-[90vh]">
                        <div className="text-center p-2 space-y-4 sm:p-4 md:p-8 lg:absolute lg:flex lg:flex-col lg:justify-center lg:w-[500px] lg:h-[100vh] lg:text-left xl:p-12 xl:w-[600px] 2xl:w-[800px]">
                            <div className="text-[#001D3D] text-3xl font-bold sm:text-4xl xl:text-6xl">
                                <p>Capture a picture perfect moments with <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span>.</p>
                            </div>
                            <p className="text-[#001D3D] sm:font-medium">Streamlining the process of taking formal and beautify photos in photo booths for students and applicants.</p>
                        </div>
                        <img className="hidden lg:block lg:absolute top-[-90px] lg:right-[-250px] xl:right-[-120px] 2xl:right-[-20px] w-auto h-[800px]" src="./img1.png" />
                    </section>

                    <section className="flex flex-col space-y-8">
                        <div className="flex flex-col justify-center items-center text-[#001D3D] space-y-2">
                            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold italic">Features</p>
                        </div>
                        <div className="flex flex-wrap flex-row justify-center items-center space-y-8 lg:space-y-0 xl:space-x-6  text-center font-semibold ">
                            <div className="Card Custom-Card">
                                <img className="Card-Img" src="./gaze.jpg" alt="" />
                                <p className="Card-P">Gaze Estimation and Hand Gesture recognition using Camera Vision for navigating and menu selection</p>
                            </div>
                            <div className="Card Custom-Card">
                                <img className="Card-Img" src="./formal.jpg" alt="" />
                                <p className="Card-P">Formal capturing method of photos good for 1X1 and 2X2 photos</p>
                            </div>
                            <div className="Card Custom-Card">
                                <img className="Card-Img" src="./beauty.jpg" alt="" />
                                <p className="Card-P">Beauty capturing method of photos good for taking selfie and groupie photos.</p>
                            </div>
                        </div>
                    </section>
                </div>


                <section id="download" className="flex flex-col justify-center items-center p-6 mt-6 space-y-6 w-full h-auto  text-center text-white lg:text-[#001D3D] bg-[#003566] lg:bg-transparent">
                    <p className="text-3xl font-bold italic">"QuickSnap, Capturing the best moments in your life."</p>
                    <p className="lg:w-[900px]">QuickSnap is a computer vision-based application that leverages advanced techniques such as gaze estimation, palm tracking, and smile capture to create a seamless and efficient photo-capturing experience. By utilizing these cutting-edge technologies, QuickSnap eliminates the need for users to navigate through complicated menus and settings, making the photo-taking process quick and effortless.</p>
                    <p className="text-2xl font-bold">Download:</p>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <a className="Download text-white" href="./QuickSnap-Personal.txt" download="QuickSnap_Personal_v1.0">QuickSnap v.0.1<img className="h-6 ml-2" src="./dl.png" /></a>
                    </div>
                </section>

                <section className="hidden lg:hidden-none lg:flex flex-col py-12 space-y-8 text-center bg-[#003566]">
                    <p className=" text-white text-2xl sm:text-4xl lg:text-5xl font-bold italic">Developers</p>
                    <div className="flex flex-wrap flex-row justify-center items-center text-center font-semibold">
                        <div className="Card Custom-Card-Pr">
                            <img className="Card-Img top-4" src="./BM-removebg-preview.png" alt="" />
                            <div className="Card-Pr">
                                <p className="font-black">Belic, Jerryl Mae</p>
                                <p>Project Manager, Front-end Developer, Researcher</p>
                            </div>
                        </div>
                        <div className="Card Custom-Card-Pr">
                            <img className="Card-Img top-4" src="./OJ-removebg-preview.png" alt="" />
                            <div className="Card-Pr">
                                <p className="font-black">Ocampo, Jerud</p>
                                <p>Full-stack Developer</p>
                            </div>
                        </div>
                        <div className="Card Custom-Card-Pr">
                            <img className="Card-Img top-[-50px]" src="./FJ-removebg-preview.png" alt="" />
                            <div className="Card-Pr">
                                <p className="font-black">Flores, Jake</p>
                                <p>Front-end Developer, Researcher</p>
                            </div>
                        </div>
                        <div className="Card Custom-Card-Pr">
                            <img className="Card-Img top-4" src="./SJ-removebg-preview.png" alt="" />
                            <div className="Card-Pr">
                                <p className="font-black">Samson, Jon Bryan</p>
                                <p>Front-end Developer, Graphic Artist,Researcher</p>
                            </div>
                        </div>
                        <div className="Card Custom-Card-Pr">
                            <img className="Card-Img top-[-50px]" src="./TR-removebg-preview.png" alt="" />
                            <div className="Card-Pr">
                                <p className="font-black">Tajada, Russel</p>
                                <p>Front-end Developer, Researcher</p>
                            </div>
                        </div>
                        <div className="Card Custom-Card-Pr">
                            <img className="Card-Img top-4" src="./BR-removebg-preview.png" alt="" />
                            <div className="Card-Pr">
                                <p className="font-black">Barbachano, Raybhen</p>
                                <p>Front-end Developer, Researcher</p>
                            </div>
                        </div>
                        <div className="Card Custom-Card-Pr">
                            <img className="Card-Img top-4" src="./VR-removebg-preview.png" alt="" />
                            <div className="Card-Pr">
                                <p className="font-black">Veloria, Richard</p>
                                <p>Front-end Developer, Researcher</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}