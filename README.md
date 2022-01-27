<h1>
  <img height="64" src="https://pinia.esm.dev/logo.svg" alt="Pinia logo">
  Pinia Plugin Undo Redo
</h1>

A Pinia plugin that is able to undo and redo a action easily.

## Install

npm

```sh
npm install --save-dev pinia-plugin-undo-redo
```

yarn

```sh
yarn add -D pinia-plugin-undo-redo
```

pnpm

```sh
pnpm install -D pinia-plugin-undo-redo
```

## usage

main.js

```js
import pinia from './store'

// omit...
app.use(pinia)
```

store.js

```js
import { createPinia } from 'pinia'
import PiniaUndoAndRedo from '../../index'

const pinia = createPinia()

pinia.use(PiniaUndoAndRedo)

```

app use

```js
import { useStore } from '@/store'

const store = useStore()

store.redo()

store.undo()

```