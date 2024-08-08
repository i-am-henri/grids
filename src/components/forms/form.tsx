"use client"

import { toast } from "@pheralb/toast"
import { useFormStatus } from "react-dom"

interface Props extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode,
    action: (formData: FormData) => undefined | Promise<undefined | string> | string,
    /** Schema validation on the client side */
    schema: Record<string, string>,
    data: Record<string, string>
}

/**
 * This is a default form which will return a toast in case of an 
 * error in the server action. It will also validate the given
 * data with the given zod schema.
 * 
 * TODO: implement client side validation
 */
export default function Form({ children, schema, data, ...props }: Props) {
    const { pending } = useFormStatus()
    return (
        <form {...props} action={async (e) => {
            const formData: Record<string, string> = {}

            const a = await props.action(e)
            if (a) return toast.error({
                text: "Internal Server Error",
                description: a
            })
        }} >
            {children}
        </form>
    )
}