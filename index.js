
module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		jest: true
  },
	parserOptions: {
	  jsx: true,
		useJSXTextNode: true
	},
	plugins: [
		'@typescript-eslint/eslint-plugin'
	],
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'indent': 'off',
		'lines-between-class-members': 'off',
		'import/no-unresolved': 'off',
		'no-alert': 'warn',
		'max-len': ['warn', { code: 150 }],
		'import/extensions': 'off',
		'max-classes-per-file': 'off',
		'no-use-before-define': 'off',
		'comma-dangle': ['error', 'never'],

		'@typescript-eslint/indent': ['error', 2],
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-types': 'off',

		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',

		'react/jsx-filename-extension': 'off',
		'react/prop-types': 'off',
		'react/jsx-indent': ['error', 2],
		'react/jsx-indent-props': ['error', 2]
	}
}
