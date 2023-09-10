module.exports = {
  parserOptions: {
    project: ['tsconfig.json'],
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'unicorn'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // tailwind 관련
    'plugin:tailwindcss/recommended',
    // prettier 관련 설정 extends는 가장 마지막에 위치해야한다.
    // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'docker/*', '**/*.spec.ts', 'dist/*', 'node_modules/*', 'test/*', '.next/*'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'unicorn/no-empty-file': 'error',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unused-prop-types': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
    'import/extensions': ['off'],
    'import/prefer-default-export': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'import/no-unresolved': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'react/destructuring-assignment': ['error', 'never'],
    'no-console': 'error',
    '@next/next/no-img-element': 'error',
    camelcase: 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx'],
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cls', 'classnames', 'clsx', 'ctl'],
      classRegex: '^(class(Name)?|\\w+Style)$',
      config: 'tailwind.config.js',
      cssFiles: './src/**/*.css',
    },
  },
  ignorePatterns: ['next.config.js'],
};
