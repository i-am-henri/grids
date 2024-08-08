import Form from "@/components/forms/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cookies } from "next/headers";
import { RegisterUser } from "./action";
import CheckApiKey from "./check-api-key";

export default function Register() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <CheckApiKey key={cookies().get("encryptedData")?.value} />
            <Form schema={{
                password: "z.string()"
            }} data={{
                password: "password"
            }} action={RegisterUser}
                className="min-w-full sm:w-[250px] md:min-w-[350px] lg:min-w-[500px] space-y-2 text-end">
                <h2 className="text-xl text-primary font-mono text-start">Register now</h2>
                <Input disabled type="email" value={"henri@selfmail.app"} />
                <Input type="password" name="password" placeholder="your password" />
                <Button>
                    Register
                </Button>
            </Form>
        </div>
    )
}