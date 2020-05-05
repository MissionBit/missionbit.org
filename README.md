# Mission Bit Website

## Setup

* Recommended: Set up [Visual Studio Code](#visual-studio-code-setup)
* Install [Node.js](https://nodejs.org/en/download/)
* Check out a local copy of this repository (e.g. with [Github Desktop](https://desktop.github.com/))
* Run `npm install` from the Terminal (or [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal))

## Usage

These are the Terminal commands to work with the site:

Run the development server:

```bash
npm run dev
```

Fix any formatting or lint issues:

```bash
npm run fix
```

Run a full build of the site:

```bash
npm run build
```

Run the static export of the site:

```bash
npm run export
```

## Visual Studio Code Setup

[Visual Studio Code](https://code.visualstudio.com/) is the editor we
recommend for working on this site.

Download Visual Studio Code from
[code.visualstudio.com](https://code.visualstudio.com/)

For each of the following commands, launch VS Code Quick Open (⌘+P),
paste the command, and press enter:

```vscode
ext install vscode-styled-jsx
ext install vscode-styled-jsx-languageserver
ext install msjsdiag.debugger-for-chrome
ext install editorconfig.editorconfig
ext install dbaeumer.vscode-eslint
ext install esbenp.prettier-vscode
ext install bungcip.better-toml
```

## Coding Conventions

This site is built with the [Next.js](https://nextjs.org/) framework in
[Typescript](https://www.typescriptlang.org/) using
[React](https://reactjs.org/).

The user interface is primarily built using components from
[Material-UI](https://material-ui.com/) and we use Material-UI's styling
solution [@material-ui/styles](https://material-ui.com/styles/basics/)
to manage CSS.

Code formatting and style is managed automatically with
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).
This is automatically run before each git commit by
[husky](https://github.com/typicode/husky).

At this time, the entirety of the site is built in a way such that
it can be statically rendered as plain HTML with `next export`, there
are no routes that depend on any server-side code other than the redirects.
