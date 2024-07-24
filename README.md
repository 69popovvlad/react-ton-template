# React + TypeScript + Vite + TonConnect UI React

This template provides minimal setup for running React in Vite, as well as an example of connecting a wallet on the TON network and reading the balance through the orbs-network

## Stack
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TonConnect UI React](https://docs.ton.org/develop/dapps/ton-connect/react)
- [ORBS TON-access](https://www.orbs.com/ton-access/)
- [Flowbite-React](https://flowbite-react.com/)

## How to run

- Preinstall [Node.js](https://nodejs.org)
- Install `pnpm` or use `npm` instead

- Clone this repo
```bash
git clone git@github.com:69popovvlad/react-ton-template.git
cd react-ton-template
```

- Copy `.env.example` to `.env`
```bash
cp .env.example .env
```

- Install all dependencies for a project
```bash
pnpm i
```

- Run dev mode
```bash
pnpm dev
```

- Or build it
```bash
pnpm build
```

## Write your own style with [tailwindcss](https://tailwindcss.com/)
Create a new file `<your_new_style>.css` in the `./src/syles` folder
and add the line `@import './styles/<your_new_style>.css';` to the file `./src/index.css`

## Components
Add all new components to the `./src/components` folder, for example as the `WalletBalance` component