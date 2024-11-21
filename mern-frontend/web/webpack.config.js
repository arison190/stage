const path = require('path');

module.exports = {
    entry: './src/index.js',  // Point d'entrée de votre application
    output: {
        path: path.resolve(__dirname, 'dist'),  // Dossier de sortie
        filename: 'bundle.js',  // Nom du fichier de bundle
    },
    module: {
        rules: [
            // Règle pour traiter les fichiers JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            // Règle pour traiter les fichiers .scss
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  // Injecte le CSS dans le DOM
                    'css-loader',    // Charge le fichier CSS
                    'sass-loader'    // Compile le SASS en CSS
                ]
            }
        ]
    },
    optimization: {
        minimize: false  // Désactive la minification pour éviter les fichiers .min.css
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']  // Assurez-vous que Webpack reconnaît les fichiers .scss
    }
};
