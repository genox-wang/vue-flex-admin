# Why Vuetifyjs.min.css override css in .vue

> Notice the import order in `main.js`

> Important! material-icon.css must import before vuetify.min.js

```js
// vuetify.min.css must import before App
import 'material-design-icons/iconfont/material-icons.css'; // important!
import 'vuetify/dist/vuetify.min.css';

...

import App from './App';

```
