"use client"

import { toast } from "@pheralb/toast"
import { useEffect } from "react"

export default function CheckApiKey({
    key
}: Readonly<{ key: string | undefined }>) {
    useEffect(() => {
        if (!key || key.length === 0) {
            toast.warning({
                text: "No Api key found",
                description: "You have not provided an api key. Please go to the start page and register your api key."
            })
        }
    })
    return (
        <>
        </>
    )
}