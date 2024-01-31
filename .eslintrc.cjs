/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:unicorn/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react-refresh',
    'react',
    'module-resolver',
    'sort-keys-fix',
    'unicorn',
  ],
  root: true,
  rules: {
    'array-bracket-newline': [
      'error',
      'consistent',
    ],
    'arrow-body-style': [
      2,
      'as-needed',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'arrow-spacing': 'error',
    camelcase: 0,
    'class-methods-use-this': 0,
    'comma-dangle': [
      2,
      'always-multiline',
    ],
    'default-param-last': 0,
    'global-require': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-cycle': 0,
    'import/no-duplicates': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-extra-boolean-cast': 'off',
    'no-return-assign': [
      2,
      'except-parens',
    ],
    'no-shadow': 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-unused-vars': [
      'error',
    ],
    'no-use-before-define': 0,
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: [
          'block-like',
          'for',
          'while',
          'multiline-const',
          'function',
          'return',
        ],
        prev: '*',
      },
      {
        blankLine: 'never',
        next: [
          'singleline-const',
        ],
        prev: [
          'singleline-const',
        ],
      },
      {
        blankLine: 'never',
        next: [
          'singleline-let',
        ],
        prev: [
          'singleline-let',
        ],
      },
    ],
    'prefer-template': 2,
    'quote-props': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/button-has-type': 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': [
      2,
      'multiline',
    ],
    'react/jsx-no-constructed-context-values': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-unescaped-entities': 'off',
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'require-yield': 0,
    'semi': 'error',
    'sort-keys': [
      'error',
      'asc',
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
    'space-before-blocks': 'error',
    'unicorn/catch-error-name': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-thenable': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: { react: { version: '18.2' } },
};
