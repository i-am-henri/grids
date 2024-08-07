"use server"

import React from "react";

/**
 * The welcome page will be shown when the user is 
 * successfully registered. It will show a welcome
 * message and a link to the dashboard. You can 
 * customize also your dashboard in this page.
 */
export default function Welcome() {
    return (
        <div>
            <h1>Welcome to grids.email</h1>
            <p>You have successfully registered. You can now go to the <a href="/dashboard">dashboard</a>.</p>
        </div>
    )
}