import Form from "@/components/forms/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {IconArrowTriangleRight, IconBrandGithub, IconMail, IconMoneybag, IconMoneybagFill} from "@irsyadadl/paranoid"
import { RegisterApiKey } from "./action";
import { z } from "zod";

/*
 * This is the start page. Here you can give the
 * client your api-key. Then you'll be redirected
 * to set a password, the email is automaticly 
 * fetched from the api.
 */
export default function Start() {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <Form data={{
        key: "key"
      }} schema={{
        key: "z.string()"
      }} action={RegisterApiKey} className="space-y-2">
        <h2 className="text-2xl">The minimal <Link className="" href={"https://selfmail.app"}>selfmail</Link> client.</h2>
        <Input placeholder="Api key" />
        <Button className="space-x-2 group" variant={"default"} size={"sm"}>
          <p>Submit</p> <IconArrowTriangleRight className="h-4 w-4 group-hover:text-yellow-700 duration-300"  />
        </Button>
      </Form>
      <footer className="absolute bottom-5 flex space-x-2">
        <Link href="https://github.com/i-am-henri/grids" target="_blank"><IconBrandGithub /></Link>
        <Link href="https://"><IconMail /></Link>
      </footer>
    </div>
  )
}