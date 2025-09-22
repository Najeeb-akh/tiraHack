module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    // Disable problematic rules that might cause build issues
    'no-caller': 'off',
    'no-eval': 'off',
    'no-implied-eval': 'off',
    'no-cond-assign': 'off'
  }
};
