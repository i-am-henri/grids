import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

async function saveToLocalStorage(key: CryptoKey, data: string) {
	const encryptedData = await encryptData(key, data);
	const base64Data = btoa(
		String.fromCharCode(...new Uint8Array(encryptedData)),
	);
	cookies().set("encryptedData", base64Data);
}

async function generateKey() {
	const key = await crypto.subtle.generateKey(
		{
			name: "AES-GCM",
			length: 256,
		},
		true,
		["encrypt", "decrypt"],
	);
	return key;
}

async function encryptData(key: CryptoKey, data: string) {
	const encoder = new TextEncoder();
	const encodedData = encoder.encode(data);
	const iv = crypto.getRandomValues(new Uint8Array(12));

	const encryptedData = await crypto.subtle.encrypt(
		{
			name: "AES-GCM",
			iv: iv,
		},
		key,
		encodedData,
	);

	const combinedData = new Uint8Array(iv.byteLength + encryptedData.byteLength);
	combinedData.set(iv, 0);
	combinedData.set(new Uint8Array(encryptedData), iv.byteLength);

	return combinedData;
}

/**
 * Api route to save the api key into the cookie
 * storage. This is used to authenticate the user.
 * The user will be redirected to the register page
 * to register the password.
 *
 * @returns {Promise<string | undefined>}
 */
export async function RegisterApiKey(e: FormData): Promise<string | undefined> {
	"use server";

	const data = e.get("key") as string;

	const parse = await z.string().min(32).safeParseAsync(data);
	if (!parse.success) {
		return "Wrong type: The api key must be a string with a minimum length of 32.";
	}

	const key = await generateKey();

	await saveToLocalStorage(key, data);

	// all done, redirect to the register page
	redirect("/onboard/register");
}
