import Form from "@/components/forms/form";
import Slider from "@/components/home/slider";
import { Input } from "@/components/ui/input";
import { IconArrowRightFill, IconBrandGithub, IconFileText, IconSupport, IconVideoCam } from "@irsyadadl/paranoid";
import Link from "next/link";
import { RegisterApiKey } from "./action";
/*
 * This is the start page. Here you can give the
 * client your api-key. Then you'll be redirected
 * to set a password, the email is automaticly 
 * fetched from the api.
 */
export default function Start() {
  return (
    <div className="lg:w-[900px]">
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:w-[600px] md:mx-auto w-full md:w-[800px] border">
          <div className="flex items-center justify-center col-span-1 border-b border-r">
            <h2 className="text-xl text-primary font-mono">grids.email</h2>
          </div>
          <div className="col-span-2 border-b">
            <p className="px-5 py-2 text-neutral-300">Grids is a selfhosted email client that allows you to send and receive emails from your own domain with the selfmail api.</p>
          </div>
          <div className="space-y-2 col-span-2 border-r p-2">
            <Form action={RegisterApiKey} data={{
              key: "key"
            }} schema={{

            }} className="flex relative group items-center">
              <Input placeholder="Api key" />
              <div className="absolute right-2 flex items-center">
                <IconArrowRightFill className="h-5 w-5 text-muted-foreground cursor-pointer group-focus-within:text-primary" type="submit" />
              </div>
            </Form>
            <p className="text-muted-foreground leading-4 text-sm">You can get your api key from the <Link className="underline" href={"https://selfmail.app"}>selfmail</Link> website. Never share your api key with anyone. This is an official selfmail client.</p>
          </div>
          <div className="grid grid-cols-4">
            <Link href="https://github.com/i-am-henri/grids" target="_blank" className="flex items-center justify-center border-r hover:bg-neutral-900"><IconBrandGithub className="h-7 w-7" /></Link>
            <Link href="/docs" target="_blank" className="flex items-center justify-center border-r hover:bg-neutral-900"><IconFileText className="h-7 w-7" /></Link>
            <Link href="/docs" className="flex items-center justify-center border-r hover:bg-neutral-900"><IconVideoCam className="h-7 w-7" /></Link>
            <Link href="/contact" className="flex items-center justify-center hover:bg-neutral-900"><IconSupport className="h-7 w-7" /></Link>
          </div>
        </div>
      </div >
      <div className="grid grid-cols-4 border">
        <div className="col-span-2 flex items-center justify-center border-b border-r">
          <h2 className="text-xl text-primary font-mono">Customizable!</h2>
        </div>
        <div className="col-span-2 border-b flex items-center justify-center p-2 text-muted-foreground">
          <p>Minimalistic selfmail client, completely open source and customizable with a ton of themes and plugins.</p>
        </div>
        <Slider />
        <div className="flex items-center justify-center border-b border-r">
          <h2 className="text-xl text-primary font-mono">Client ?!</h2>
        </div>
        <div className="col-span-2 border-b flex items-center justify-center p-2 border-r">
          <p className="text-muted-foreground">
            This is a client for selfmail. This means, this is an alternative to the official selfmail frontend, in this case with a much cleaner design.
          </p>
        </div>

      </div>
      <div className="h-24" />
    </div>
  )
}