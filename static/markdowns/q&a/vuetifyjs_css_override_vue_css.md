# Why Vuetifyjs.min.css override css in .vue

> Notice the import order in `main.js`

```js
// vuetify.min.css must import before App

import 'vuetify/dist/vuetify.min.css';

...

import App from './App';
```
