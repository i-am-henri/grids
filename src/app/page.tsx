import Form from "@/components/forms/form";
import GridAnimation from "@/components/home/animation";
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
              <button className="border-none absolute right-2 flex items-center" type="submit">
                <IconArrowRightFill className="h-5 w-5 text-muted-foreground cursor-pointer group-focus-within:text-primary" />
              </button>
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
          <p>Make grid yours! Create or download themes and plugins, based on Typescript. All this with an easy to use store.</p>
        </div>
        <Slider />
        <div className="flex items-center justify-center border-b border-r">
          <h2 className="text-xl text-primary font-mono">Client ?!</h2>
        </div>
        <div className="col-span-2 border-b flex items-center justify-center p-2 ">
          <p className="text-muted-foreground">
            This is a client for selfmail. This means, this is an alternative to the official selfmail frontend, in this case with a much cleaner design.
          </p>
        </div>
        <GridAnimation />
        <div className="col-span-3 border-b flex items-center justify-center">
          <h2 className="text-xl text-primary font-mono py-2">
            Open source & selfhostable
          </h2>
        </div>
        <div className="col-span-1 border-r p-2">
          <h3 className="text-lg font-mono">easy start</h3>
          <ul className="text-muted-foreground">
            <li className="list-disc ml-5">pull the docker image</li>
            <li className="list-disc ml-5">run the docker image</li>
            <li className="list-disc ml-5">adjust the config</li>
            <li className="list-disc ml-5">🥳 and you're done</li>
          </ul>
        </div>
        <div className="col-span-3 flex items-center justify-center">
          <p className="font-mono text-muted-foreground">Made with ❤️ by <Link href="https://github.com/i-am-henri" target="_blank" rel="noreferrer" className="underline text-primary">selfmail</Link> and the <Link href="https://github.com/i-am-henri/grids/graphs/contributors" target="_blank" rel="noreferrer" className="underline text-primary">contributors</Link>.</p>
        </div>
      </div>
      <div className="h-24" />
    </div>
  )
}