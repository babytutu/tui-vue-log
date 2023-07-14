# tui-vue-log

## Install

```bash
yarn add tui-vue-log -D
```

### vue2

main.js

```js
import Vue from 'vue'

import log from 'tui-vue-log'

Vue.use(log)
```

### vue3

main.ts

```ts
import { createApp } from 'vue'
import log from 'tui-vue-log'

const app = createApp(App)

// two way to use

// single use
app.use(log)

// with options
app.use(log, {
  style: 'padding: 8px; color: #fff',
  background: ['#333', 'red'],
  border: '6px'
})
```

## Usage

vue2 & vue3

### vue2

```js
this.log('title', 123)
```

### vue3

```ts
import { ref, inject } from 'vue'

const log: any = inject('log')

log('title', 123)

log('object', {
  name: 'abc',
  age: 18
})
```

### html

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://unpkg.com/vue@2.5.16/dist/vue.min.js"></script>
  <script src="./dist/index.umd.js"></script>
</head>

<body>
  <script>
    Vue.use(log)
    new Vue({
      el: '#app',
      created () {
        this.log('Hello World!', { name: 'hehe' })
      },
    })
  </script>
</body>

</html>
```

## Options

|name|type|default|desc|
|---|---|---|---|
|style|string|padding: 4px 8px; color: #fff;|css|
|background|array|['#606060', '#409EFF']|colors|
|border|string|4px|border width|
