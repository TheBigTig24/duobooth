"use client";

import { useEffect, useRef } from "react";


export function PhotoSquare({ isTurn }: { isTurn: boolean }) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                });

                if (videoRef.current) {
                    (videoRef.current as HTMLVideoElement).srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing camera: ", err);
            }
        }

        startCamera();

        return() => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
                tracks.forEach(track => track.stop());
            }
        }
    }, [])

    return(
        <div className={`${isTurn ? "w-[350px] h-[250px]" : "w-[210px] h-[150px]"} border-2 border-gray-600 rounded`}>
            {isTurn ? 
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full aspect-square object-cover"
                />
                :
                null
            }
        </div>
    );
}