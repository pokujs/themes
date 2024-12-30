# Contributing

If you're thinking of contributing, thank you, and _naturally_, please **be respectful** 🙋🏻‍♂️

## Issues

By opening an **Issue**, please describe the problem. If you can share a basic repro, it will be great.

---

## Pull Requests

By opening a **Pull Request**, please describe the proposed solution and what it solves.

---

## Developing

### Environment

You will need these tools installed on your system:

- [**Node.js**](https://nodejs.org/en/download/package-manager), [**Bun**](https://bun.sh/docs/installation), or [**Deno**](https://docs.deno.com/runtime/manual/getting_started/installation).

---

Fork this project, download your forked repository locally and create a new branch from `main`.
Then run `npm ci` to clean install the node modules.

> Please, do not change the _package-lock.json_.

### Fixes

Where possible, provide an error test case that the fix covers.

### Features

It's better to discuss a new feature before actually start implementing it. You can open an [**Issue on Github**](https://github.com/pokujs/themes/issues/new), so we can discuss the **API** design implementation ideas.

> Please ensure test cases to cover new features.

<!--

---

## Testing

```sh
npm run test:node
bun run test:bun
deno task test:deno
```

-->

---

### Lint

```sh
npm run lint
```

> Also
>
> ```sh
> npm run lint:fix
> ```
