import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// decrypt the data
async function decryptData(key: CryptoKey, encryptedData: string) {
	const combinedData = new Uint8Array(
		atob(encryptedData)
			.split("")
			.map((char) => char.charCodeAt(0)),
	);
	const iv = combinedData.slice(0, 12);
	const data = combinedData.slice(12);

	const decryptedData = await crypto.subtle.decrypt(
		{
			name: "AES-GCM",
			iv: iv,
		},
		key,
		data,
	);

	const decoder = new TextDecoder();
	return decoder.decode(decryptedData);
}

// load the data from the cookie store
async function loadFromLocalStorage(
	key: CryptoKey,
): Promise<string | undefined> {
	const base64Data = cookies().get("encryptedData")?.value;
	if (!base64Data) {
		return undefined;
	}
	return await decryptData(key, base64Data);
}

/**
 * Register the user into the database. We will use the api key
 * to fetch aditional information from the user like the username
 * and the main email.
 *
 * @param {FormData} e The form data from the register page.
 * @returns {Promise<string | undefined>} an error message or undefined if everything is ok.
 */
export async function RegisterUser(e: FormData): Promise<string | undefined> {
	"use server";

	const password = e.get("password") as string;
	if (!password) {
		return "Password is not defined.";
	}

	const apiKey = cookies().get("encryptedData")?.value;
	if (!apiKey) {
		return "Api key is not defined. Please refer to the start page and add your api key.";
	}
	// TODO: fetching the user data from the api key (can't do it for now, because the api endpoint does not exist yet)

	// checks done, now we can register the user
	// const user = await db.user.create({
	// 	data: {},
	// });
	// if (!user) {
	// 	return "User is not defined. Please try it again later.";
	// }

	// all done, redirect to the welcome page to set everything up
	redirect("/onboard/welcome");
}
