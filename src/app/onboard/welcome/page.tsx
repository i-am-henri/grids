/**
 * The welcome page will be shown when the user is 
 * successfully registered. It will show a welcome
 * message and a link to the dashboard. You can 
 * customize also your dashboard in this page.
 * 
 * This page is for the following actions:
 * - Create aliases
 * - Choose a theme
 * - Choose plugins
 * - Create a team account
 */
export default async function Welcome() {
    return (
        <div className="items-center justify-center flex flex-col min-h-dvh">
            <h1 className="text-3xl font-mono text-primary">Welcome to grids.email!</h1>
            <p>You have been successfully registered. You can now go to the <a href="/dashboard" className="font-mono text-primary underline">dashboard</a>.</p>
        </div>
    )
}