import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Register the user into the database. We will use the api key
 * to fetch aditional information from the user.
 *
 * @param {FormData} e The form data from the register page.
 * @returns {Promise<string | undefined>} an error message or undefined if everything is ok.
 */
export async function RegisterUser(e: FormData): Promise<string | undefined> {
	"use server";

	const password = e.get("password") as string;

	const apiKey = cookies().get("encryptedData")?.value;
	if (!apiKey) {
		return "Api key is not defined. Please refer to the start page and add your api key.";
	}

	// all done, redirect to the welcome page to set everything up
	redirect("/onboard/welcome");
}
