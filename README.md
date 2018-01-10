# mofron-comp-login
this is login view component for mofron.<br>
please see [here](https://github.com/mofron/mofron) about an overview of mofron

# Install

```bash
npm install mofron-comp-login
```

# Quick Start

```javascript
require('mofron');
let Login = require('mofron-comp-login');
new Login({
    title : 'Test App Title',
    authConf : new mofron.Param(
                 "http://login.serv.pross.php",
                 (srv_ret) => {
                   // this is callback
                 }
               ), 
    visible : true
});
```

# Class Specification
this component based by mofron-comp-appbase.
please see [appbase spacification](https://github.com/simpart/mofron-comp-appbase)
