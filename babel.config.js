module.exports = {
  presets: [
    ['@babel/preset-env', {modules: false, targets: {node: 'current'}}],
    ['@babel/preset-typescript'],
    ["@babel/preset-react"],
  ],
  plugins: [
    "transform-object-rest-spread",
    "transform-class-properties",
    "@babel/plugin-external-helpers"
  ]
};