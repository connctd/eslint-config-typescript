
module.exports = {
	"parser": "@typescript-eslint/parser",
	"env": {
		"browser": true,
		"jest": true
    },
	"parserOptions": {
	  "jsx": true,
	  "useJSXTextNode": true
	},
	"plugins": [
		"@typescript-eslint/eslint-plugin"
	],
	"extends": [
		"airbnb",
		"plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
	],
	"rules": {
		"semi": [2, "always"],
		"quotes": [2, "single"],
		"indent": 0,
		"lines-between-class-members": 0,
		"import/no-unresolved": 0,
		"no-alert": 1,
		"max-len": [1, {code: 150}],
		"import/extensions": 0,
		"max-classes-per-file": 0,
		"no-use-before-define": 0,

		"@typescript-eslint/indent": [2, 2],
		"@typescript-eslint/no-use-before-define": 2,
		"@typescript-eslint/no-unused-vars": 2,
		"@typescript-eslint/triple-slash-reference": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"@typescript-eslint/ban-types": 0,

		"import/no-extraneous-dependencies": 0,
		"import/prefer-default-export": 0,

		"react/jsx-filename-extension": 0,
		"react/prop-types": 0,
		"react/jsx-indent": [2, 2],
		"react/jsx-indent-props": [2, 2]
	}
}
