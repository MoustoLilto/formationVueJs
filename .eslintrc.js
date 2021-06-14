module.exports = {
    root: true,
    env: {
        node: true,
        'jest/globals': true,
    },
    plugins: ['vue', 'jest'],
    extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/prettier'],
    rules: {
        'import/extensions': ['warn', { js: 'never', vue: 'never' }],
        'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-else-return': 'off',
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: [
                    'state', // for vuex state
                    'acc', // for reduce accumulators
                    'axiosRequestConfig', // for axios request config
                ],
            },
        ],
        'no-shadow': 'off',
        'no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-use-before-define': 'off',
        'prefer-destructuring': 'off',

        'prettier/prettier': [
            'warn',
            {
                tabWidth: 4,
                semi: true,
                trailingComma: 'es5',
                arrowParens: 'always',
                printWidth: 100,
                singleQuote: true,
                htmlWhitespaceSensitivity: 'ignore',
            },
        ],
        'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true,
            },
        },
    ],
};
