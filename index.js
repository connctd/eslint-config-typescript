
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
	"extends": ["airbnb","plugin:@typescript-eslint/recommended"],
	"plugins": ["@typescript-eslint"],
	"rules": {
		"import/no-extraneous-dependencies": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"react/jsx-filename-extension": 0,
		"import/prefer-default-export": 0,
		"react/jsx-indent": 0,
		"react/prop-types": 0,
		"semi": [2, "never"],
		"quotes": [2, "double"],
		"react/button-has-type": 0, //https://github.com/yannickcr/eslint-plugin-react/issues/1555
		"@typescript-eslint/explicit-member-accessibility": 0,
		"@typescript-eslint/indent": 0,
		"import/no-unresolved": 0,
		"@typescript-eslint/member-delimiter-style": [
			2, {
				"multiline": {
					"delimiter": "none"
				},
				"singleline": {
					"delimiter": "comma",
					"requireLast": true
				}
			}
		],
		"jsx-a11y/label-has-associated-control": 0, // Does not work correctly with component inputs
		"jsx-a11y/label-has-for": 0,
		"spaced-comment": 0 // doesn't work with typescript trippe comments
	}
}
