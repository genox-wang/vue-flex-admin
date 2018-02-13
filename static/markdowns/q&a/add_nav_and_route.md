# How to Add Nav and Route

> 1. Create `.vue` page in pages folder
> 2. add nav and route in `configs/nav.json`

```json
[
  {
      "name": "Dashboard",            // nav group name
      "action": "dashboard",          // nav group icon
      "items": [
      {
          "path": "/",                // sub nav route path
          "name": "Dashboard",        // sub nav route name
          "component": "Dashboard",   //sub name route .vue file relative path in pages folder
          "action": ""                // temporarily no sue
      }
    ]
  },
  {
      "name": "Develop",
      "action": "home",
      "items": [
      {
          "path": "/icons/meterial",
          "name": "Material Icons",
          "component": "MaterialIcons",
          "action": ""
      },
    ]
  }
]

```
