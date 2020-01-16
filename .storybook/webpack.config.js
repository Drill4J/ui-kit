const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.module.rules.push({
    test: /\.module\.scss$/,
    loaders: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      },
      'sass-loader',
    ],
  });
  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loader: 'file-loader',
    include: path.resolve(__dirname, '../src/')
  })
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
