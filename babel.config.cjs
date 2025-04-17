// babel.config.js
module.exports = {
    presets: [
      // Preset for compiling modern JavaScript down to compatible versions
      ['@babel/preset-env', { targets: { node: 'current' } }],
      // Preset for compiling JSX and other React features
      ['@babel/preset-react', { runtime: 'automatic' }], // 'automatic' avoids needing to import React in every file
    ],
  };