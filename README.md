### 🏠 [Homepage](https://github.com/letrungdo/nextjs-typescript)

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
npm install
```

## Usage

### Auto fix rule

```sh
npm run lint
```

### Auto format code

```sh
npm run format
```

### Start dev

```sh
npm run dev
```

### Build staging

```sh
npm run build:staging
```

### Build prod

```sh
yarn build
```
