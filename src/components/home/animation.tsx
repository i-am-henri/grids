"use client"
import { Rive } from "@rive-app/canvas";
import { useEffect } from "react";
export default function GridAnimation() {
    useEffect(() => {
        const riveInstance = new Rive({
            src: "/mail-message.riv",
            autoplay: true,
            canvas: document.getElementById("rive-canvas") as HTMLCanvasElement,
        })
        return () => riveInstance.cleanup()
    })
    return (
        <div className="row-span-2 border-b border-l">
            <canvas id="rive-canvas" className="w-full h-full" />
        </div>
    )
}