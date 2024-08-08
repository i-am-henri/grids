<p align="center">
    <a href="../README.md">🏠 Home</a>
    <a href="./overview.md">🔦 Overview</a>
    <a href="./features.md">🏙️ Features</a>
    <a href="./selfhosting.md">💻 Selfhosting</a>
    <a href="./contributing.md">🧑‍💻 Contributing</a>
    <a href="./screenshots.md">🖥️ Screenshots</a>
</p>
<p align="center">
🔦 This page is a guide.
</p>

## Plugins

Plugins are a great option to extends the functionality of grids.email. You can use the plugins from creators in the marketplace or you can create your own with Typescript and our [npm package]() (work in progress). This guide will show you how to create a plugin with our npm package easily in under 5 minutes.

### Create a new plugin

First of all, you need to create a new plugin. You can do this with the following command:

```bash
npx ....
```

(Command does not exist yet)

This will create a new sample plugin in the choosen folder. You can try this plugin on our desktop app by importing it in the `plugins` folder. You can now start creating your plugin in the `src` folder. The following guide will show you how to create a plugin which counts the number of emails from a specific sender in your inbox.

### First, create a new class for your plugin which will be exported.

```typescript
import { Plugin } from "@grids/plugin";

export class EmailCounterPlugin extends Plugin {
  // your code
}
```

We can now create a name for our plugin and a description.

```typescript
export class EmailCounterPlugin extends Plugin {
  name = "Email Counter";
  description =
    "Counts the number of emails from a specific sender in your inbox.";
}
```

The next step is to extend the permissions of this new plugin.

```typescript
export class EmailCounterPlugin extends Plugin {
  name = "Email Counter";
  description =
    "Counts the number of emails from a specific sender in your inbox.";

  permissions = ["read:email", "read:user", "read:senders", "db"];
}
```

We have now permissions to read the emails, the users, the senders and to write into the database.

---

⚒️ All of this is not done yet. In fact, we haven't even started to write the code for this plugin system yet. Please keep this in mind, it's for now only a concept.
