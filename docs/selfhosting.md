<p align="center">
    <a href="../README.md">🏠 Home</a>
    <a href="./overview.md">🔦 Overview</a>
    <a href="./features.md">🏙️ Features</a>
    <a href="./selfhosting.md">💻 Selfhosting</a>
    <a href="./contributing.md">🧑‍💻 Contributing</a>
    <a href="./screenshots.md">🖥️ Screenshots</a>
</p>
<p align="center">
🔦 You are on the <b>Selfhosting</b> page.
</p>

## Selfhost grids

There are multiple ways to selfhost grids. The easiest way is to use the official docker image. You can find the docker image [here]().

### Docker

⚠️ This is **not** yet avaiable, it's a sample guide. We are working on it hard to make it available as soon as possible.

#### Pull the image

```bash
docker pull grid3/grid3_client:latest
```

#### Run the image

```bash
docker run -d --name grid3_client -p 9001:9001 grid3/grid3_client:latest
```

#### Stop the image

```bash
docker stop grid3_client
```

#### Remove the image

```bash
docker rm grid3_client
```

Another way is to clone the github repository, build the project with the command

```bash
bun build
```

or run it with the command

```bash
bun run
```

We are using [Bun](https://bun.sh/) as our package manager for the best performance. So make sure to install bun before building the project.

⚠️ There is no docker image at the moment. We plan to add later a image.
