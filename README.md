
<h3 align="center">
    eslint-plugin-jsx-align
</h3>

### What is this?

This plugin / rule will align your assignments in jsx:
> from

```js
<CarComponent
    company = "Tesla"
    model = "Model 3"
    estimatedRange = "300 miles"
/>
```

> to

```js
<CarComponent
    company        = "Tesla"
    model          = "Model 3"
    estimatedRange = "300 miles"
/>
```


### Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-jsx-align`:

```
$ npm install eslint-plugin-jsx-align --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-jsx-align` globally.

### Usage

Add `eslint-plugin-jsx-align` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "jsx-align"
    ],
    "rules": {
        "jsx-align/align-jsx-assignments" : "error"
    }

}
```

You might have to update the [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces) rule to allow multiple spaces in front of `=`:

```json
{
    "rules": {
        "no-multi-spaces": ["error", {"exceptions": {"ImportDeclaration": true}}]
    }
}
```
