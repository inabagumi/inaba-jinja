module.exports = {
  extends: ['@inabagumi/react'],
  parserOptions: {
    project: 'tsconfig.json'
  },
  root: true,
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
