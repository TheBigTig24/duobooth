"use client";

import { useEffect, useState } from "react";
import { PhotoSquare } from "@/components/photosquare";
import "../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

export default function Photobooth() {

    const [currPhotoSqr, setCurrPhotoSqr] = useState(0);
    const [startCountdown, setStartCountdown] = useState(false);
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
            let interval: ReturnType<typeof setInterval> | undefined = undefined;
        if (startCountdown && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => (prev - 1));
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(interval);
            setStartCountdown(false);
            setSeconds(5);

            // Photo Logic

        }

        return () => clearInterval(interval);
    }, [startCountdown, seconds]);

    return(
        <main className="flex items-center justify-center min-h-screen bg-blue-300">

            {/* Left Side */}
            <div className="lg:w-1/3 flex flex-col">

            </div>

            {/* Middle */}
            <div className="lg:w-1/3 flex flex-col gap-3 items-center">
                <PhotoSquare isTurn={(currPhotoSqr == 0) ? true : false}></PhotoSquare>
                <PhotoSquare isTurn={(currPhotoSqr == 1) ? true : false}></PhotoSquare>
                <PhotoSquare isTurn={(currPhotoSqr == 2) ? true : false}></PhotoSquare>
                <PhotoSquare isTurn={(currPhotoSqr == 3) ? true : false}></PhotoSquare>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/3 min-h-screen flex flex-col gap-5 items-center justify-evenly">
                <span className="text-3xl ">Prepare for a Picture</span>
                <span className="text-lg">{seconds}</span>
                <button className="border-1 border-black bg-gray-200 w-12 h-12 rounded-full transition-colors
                    hover:bg-gray-300 hover:scale-105 transition-transform duration-100 cursor-pointer"
                    onClick={() => setStartCountdown(true)}>
                    <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                </button>
            </div>
        </main>
    );
}