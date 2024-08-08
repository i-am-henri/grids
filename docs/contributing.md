<p align="center">
    <a href="../README.md">🏠 Home</a>
    <a href="./overview.md">🔦 Overview</a>
    <a href="./features.md">🏙️ Features</a>
    <a href="./selfhosting.md">💻 Selfhosting</a>
    <a href="./contributing.md">🧑‍💻 Contributing</a>
    <a href="./screenshots.md">🖥️ Screenshots</a>
</p>
<p align="center">
🔦 You are on the <b>Contributing</b> page.
</p>

## Contributing to this project

We are open to every contribution and a were thankfilly for every help ♥️. If you want to contribute to this project, you can do so in many ways.

- 📄 Create a new issue
- 📝 Create a new pull request
- 🔦 Provide feedback

## Start this project locally

When you want to run the project on your local machine, please use the following commands:

```bash
git clone https://github.com/i-am-henri/grids.git
cd grids
./start-database.bat
cp .env.example .env
bun ci
bun dev
```

To run `./start-database.bat` you need to have docker installed on your machine. This command will start a local postgres database with the password `root` and the username `root`. You can change the password and username in the `start-database.bat` file. You also have to follow the steps in the `.env.example` file to create a `.env` file with the neeeded environment variables.

### Create a new issue

If you want to create a new issue, you can do so [here](https://github.com/i-am-henri/grids/issues/new). This is not only for bugs, you can also create an issue for a feature request, feedback. If you want to create a new issue, please make sure to follow the issue template.

### Create a new pull request

If you want to create a new pull request, you can do so [here](https://github.com/i-am-henri/grids/pulls). Pull request are always welcomed but please notice, that we are checking your pull request as soon as possible but it can take it's time.
