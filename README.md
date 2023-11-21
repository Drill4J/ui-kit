# Drill4J Project · [![Build Status](https://github.com/Drill4J/ui-kit/workflows/Publish/badge.svg)](https://github.com/Drill4J/ui-kit/actions)

<img src="./logo.svg" alt="Logo" width="128" align="right">

Drill4J UI components library.

## Prerequisites

1. Install Node 12.22.12

    > TODO: update Node to current stable.
    > 
    > Issue: for some reason, when built with Node 16.x, some Tailwind styles passed via `tw=` tag aren't computed correctly and end up in the final html as `css=[Object object]`
    >
    > Guess: possibly an issue with either (or all) of deps versions - `twin.macro`, `tailwind`, `styled-components` 

## Development

1. run `npm i` to install dependencies
2. use `npm run build` to build sources
3. use the `npm run serve` to host files with local webserver
    - paste the link from terminal into `admin-ui-root-config/index.ejs` in `<script type="systemjs-importmap">` section to use these files in Admin UI during development 
4. use `npm run start` to deploy storybook

## Documentation

Visit [Wiki](https://github.com/Drill4J/ui-kit/wiki) page

## Technology

Used technology stack:
## Links

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [StyledComponents](https://styled-components.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)
