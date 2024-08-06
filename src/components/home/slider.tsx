"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slider() {
    const [image, setImage] = useState<number>(0)

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 250); // 1000 milliseconds = 1 second

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (counter === 100) {
            setImage(image + 1 !== 3 ? image + 1 : 0)
        }

    }, [counter, image]);

    return (
        <>
            <div className="col-span-3 border-b">
                <Image src={image === 0 && "/slider-0.png" || image === 1 && "/slider-1.png" || "/slider-2.png"} alt="grids.email" width={1000} height={1000} />
            </div>
            <div className="border-l grid grid-rows-3 grid-cols-1 cursor-pointer border-b">
                <div onClick={() => setImage(0)} onKeyDown={() => setImage(0)} className="hover:bg-neutral-900 cursor-pointer flex items-center justify-center">
                    <p className="text-muted-foreground">Emailing on a new level.</p>
                </div>
                <div onClick={() => setImage(1)} onKeyDown={() => setImage(1)} className="hover:bg-neutral-900 border-t border-b cursor-pointer flex items-center justify-center">
                    <p className="text-muted-foreground">Make it yours!</p>
                </div>
                <div onClick={() => setImage(2)} onKeyDown={() => setImage(2)} className="hover:bg-neutral-900 cursor-pointer flex items-center justify-center">
                    <p className="text-muted-foreground">On every device...</p>
                </div>
            </div>
        </>
    )
}