"use client"

import { toast } from "@pheralb/toast"
import { useFormStatus } from "react-dom"
import { KeySchema, z, ZodSchema, ZodTypeAny } from "zod"

interface Props extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode,
    action: (formData: FormData) => void | Promise<void | string> | string,
    /** Schema validation on the client side */
    schema: Record<string, string>,
    data: Record<string, string>
}

/**
 * This is a default form which will return a toast in case of an 
 * error in the server action.
 */
export default function Form({ children, schema, data, ...props }: Props) {
    const { pending } = useFormStatus()

    const ZodTypes: Record<string, ZodTypeAny> = {}

    // TODO: fix this shit
    for (const s in schema) {
        const func = new Function("z", `return ${schema[s]}`)(z) as unknown
        ZodTypes.s = func
        console.log(func)
    }

    return (
        <form {...props} action={async (e) => {
            const formData: Record<string, string> = {}

            for (const value in data) {
                if (value.hasOwnProperty(value) && data[value]) {
                    formData.key = e.get(data[value]) as string
                }
            }
            // parse the schema
            const formDataSchema = z.object(ZodTypes).safeParse(formData)
            if (!formDataSchema.success) {
                toast.error({
                    text: "Client side error",
                    description: "You have to define all values."
                })
                return
            }
            const a = await props.action(e)
            if (a) toast.error({
                text: "Internal Server Error",
                description: a
            })
        }} >
            {children}
        </form>
    )
}