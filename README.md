### 🏠 [Homepage](https://app.tđ.vn)

## Request

-   IDE: [VSCode](https://code.visualstudio.com/download)
-   NodeJs: 12.x or newer (https://nodejs.org/en/download)
-   VsCode Extensions:
    1. Eslint
    2. Prettier - Code formatter
-   Yarn: npm i yarn -g
-   VSCode setting.json:

```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "editor.formatOnSave": true
```

## Install

```sh
yarn install
```

## Usage

### Auto fix rule

```sh
yarn lint
```

### Auto format code

```sh
yarn format
```

### Start dev

```sh
yarn dev
```

### Build prod

```sh
yarn build
```
