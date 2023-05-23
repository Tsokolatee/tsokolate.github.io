import React from "react";

export default function Navigation() {

    const scrolltoId = () => {
        var access = document.getElementById("download");
        access.scrollIntoView({ behavior: 'smooth' }, true);
    }

    return (
        <>
            <nav className="Navbar z-10 flex flex-row justify-between items-center p-6 w-full h-auto bg-[#001D3D]">
                <div className="Logo flex flex-row items-center">
                    <img className="QuickSnap-Logo mr-4 w-auto h-8 sm:h-12" src="./Logo.png" alt="Logo" />
                    <p className="QuickSnap-Text text-2xl sm:text-4xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ff7200] to-[#ffd40b]">Quick</span><span className="text-transparent bg-clip-text bg-gradient-to-b from-[#56aed6] to-[#064170]">Snap</span></p>
                </div>
                <div className="Download-Button hidden sm:flex space-x-2">
                    <a className="Nav-Button" onClick={scrolltoId}>Download</a>
                    {/* <a className="Nav-Button" href="/Developers">Developers</a> */}
                </div>
            </nav>
        </>
    )
}