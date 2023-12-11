const react = require('@vitejs/plugin-react');
module.exports = {
  plugins: [react()],
  build: {
    lib: {
      fileName: () => `index.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        '@reduxjs/toolkit',
        'react-redux',
        'prop-types'
      ]
    }
  }
};