# mofron-comp-login
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

login component for mofron

it makes easy to build login page


# Install
```
npm install mofron mofron-comp-login
```

# Sample
```html
<require>
    <tag module="mofron-comp-login">Login</tag>
</require>

<Login title="mofron" color="#f0e6fa","#fdfdfd","#b4b4fd">
</Login>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | authConf | string | uri path |
| | | function | send callback function |
| | mainColor | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | option | style option |
| | accentColor | mixed (color) | string: color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | option | style option |

