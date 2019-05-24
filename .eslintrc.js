module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  globals: {
    wp: true
  },
  env: {
    node: true,
    es6: true,
    amd: true,
    browser: true,
    jquery: true
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      generators: false,
      objectLiteralDuplicateProperties: false
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['import'],
  settings: {
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },
  rules: {
    'no-console': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }
    ],
    'react/react-in-jsx-scope': 'ignore',
    'react/prop-types': 'ignore',
    'react/display-name': 'ignore',
  }
};
