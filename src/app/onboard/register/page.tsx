import Form from "@/components/forms/form";
import { Input } from "@/components/ui/input";
import { RegisterUser } from "./action";
import { z } from "zod";

export default function Register() {
    return (
        <div className="flex items-center justify-center">
            <Form schema={{
                password: "z.string()"
            }} data={{
                password: "password"
            }} action={RegisterUser}>
                <Input disabled type="email" value={"henri@selfmail.app"} />
                <Input type="passwird" placeholder="your password" />
            </Form>
        </div>
    )
}