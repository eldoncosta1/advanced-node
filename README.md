# Project NodeJs with TDD, Clean Architecture and Typescript

## Configurando ambiente

## Criando alias git

```jsx
// alterando editor padrão das configurações
git config --global core.editor code

git config --global --edit

// configuração de alias para comandos git
[alias]
	s = !git status -s
	c = !git add. && git commit -m
	amend = !git add. && git commit --amend --no-edit
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s %C(cyan)[%cn] %C(green)%cr'
```

```jsx
vscode settings.json

{
  "tabnine.experimentalAutoImports": true,
  "workbench.colorTheme": "Aura Soft Dark (Soft Text)",
  "workbench.tree.indent": 15,
  "terminal.integrated.fontSize": 14,
  "terminal.integrated.shell.osx": "/bin/zsh",
  "editor.tabSize": 2,
  "editor.fontSize": 16,
  "editor.lineHeight": 26,
  "editor.renderWhitespace": "boundary",
  "editor.semanticHighlighting.enabled": false,
  "editor.rulers": [
    80,
    120
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.exclude": {
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    // "**/node_modules": true
  },
  "files.associations": {
    ".sequelizerc": "javascript",
    ".stylelintrc": "json",
    ".prettierrc": "json",
    "*.tsx": "typescriptreact"
  },
  "typescript.tsserver.log": "verbose",
  "material-icon-theme.activeIconPack": "nest",
  "material-icon-theme.folders.associations": {
    "infrastructure": "app",
    "application": "components",
    "infra": "app",
    "entities": "class",
    "domain": "class",
    "schemas": "class",
    "typeorm": "database",
    "repositories": "mappings",
    "http": "container",
    "migrations": "tools",
    "modules": "components",
    "implementations": "core",
    "dtos": "typescript",
    "fakes": "mock",
    "websockets": "pipe",
    "protos": "pipe",
    "grpc": "pipe",
    "providers": "include",
    "subscribers": "messages",
    "useCases": "controller",
    "kafka": "scripts",
    "mappers": "meta",
    "_shared": "shared",
    "eslint-config": "tools",
    "kube": "kubernetes"
  },
  "material-icon-theme.files.associations": {
    "ormconfig.json": "database",
    "tsconfig.json": "tune",
    "*.proto": "3d",
    "*.webpack.js": "webpack"
  },
  "cSpell.enableFiletypes": [
    "!asciidoc",
    "!c",
    "!cpp",
    "!csharp",
    "!go",
    "!handlebars",
    "!haskell",
    "!jade",
    "!java",
    "!latex",
    "!php",
    "!pug",
    "!python",
    "!restructuredtext",
    "!rust",
    "!scala",
    "!scss"
  ],
  "editor.suggestSelection": "first",
  "cSpell.userWords": [
    "chakra",
    "middlewares",
    "prefetch",
    "rocketseat"
  ],
  "cSpell.language": "en,pt,pt_BR",
  "workbench.productIconTheme": "fluent-icons",
  "terminal.integrated.showExitAlert": false,
  "splitHTMLAttributes.closingBracketOnNewLine": true,
  "workbench.iconTheme": "material-icon-theme",
  "code-runner.clearPreviousOutput": true,
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": null
    }
  ],
  "[prisma]": {
    "editor.defaultFormatter": "Prisma.prisma",
    "editor.formatOnSave": true
  },
  "sync.gist": "8206213b8dd6c6bc444ff2d0b5d37c31",
  "files.eol": "\n",
  "peacock.favoriteColors": [
    {
      "name": "Angular Red",
      "value": "#dd0531"
    },
    {
      "name": "Azure Blue",
      "value": "#007fff"
    },
    {
      "name": "JavaScript Yellow",
      "value": "#f9e64f"
    },
    {
      "name": "Mandalorian Blue",
      "value": "#1857a4"
    },
    {
      "name": "Node Green",
      "value": "#215732"
    },
    {
      "name": "React Blue",
      "value": "#61dafb"
    },
    {
      "name": "Something Different",
      "value": "#832561"
    },
    {
      "name": "Svelte Orange",
      "value": "#ff3d00"
    },
    {
      "name": "Vue Green",
      "value": "#42b883"
    }
  ],
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
}
```

[https://node.green/](https://node.green/)

## Biblioteca para apagar pasta dist sempre que o typescript gerar um build

```jsx
// Biblioteca para apagar pasta dist sempre que o typescript gerar um build

npm i rimraf
```

## Configuração básica typescript

```jsx
// configuração básica typescript

{
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src",
    "target": "es2021",
    "sourceMap": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "module": "CommonJS",
    "moduleResolution": "node",
    "esModuleInterop": true,
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@/tests/*": ["../tests/*"]
    },
    // "strict": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictPropertyInitialization": true,
    "noImplicitAny": true
  },
  "include": ["src"]
}
```

## Ensinando o javascript resolvendo path

```jsx
npm i -D @types/node

npm i module-alias
npm i -D @types/module-alias
```

## Module stric

```jsx
Atalho para habilitar várias outras configurações ao mesmo tempo
```

## Configurando eslint

```jsx
https://www.npmjs.com/package/eslint-config-standard-with-typescript

npm install --save-dev \
  typescript@^4 \
  eslint@^7.12.1 \
  eslint-plugin-promise@^5.0.0 \
  eslint-plugin-import@^2.22.1 \
  eslint-plugin-node@^11.1.0 \
  @typescript-eslint/eslint-plugin@^4.0.1 \
  eslint-config-standard-with-typescript@latest

// .eslintrc.json

{
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Configurando jest

```jsx
npm i -D jest @types/jest ts-jest

npx jest --init
```

## Lint staged husky

```jsx
npm i -D lint-staged

npm i -D husky
https://github.com/typicode/husky

// configurando husky
npm set-script prepare "husky install"
npm run prepare // verificando se husky está correto

// criando um hook no husky no pre commit
npx husky add .husky/pre-commit "npx lint-staged"

// criando hook para executar testes
npx husky add .husky/pre-push "npm run test:coverage"
```
