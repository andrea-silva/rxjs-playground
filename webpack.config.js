module.exports = {
    devtool: 'inline-source-map',
    entry: './src/app.ts',
    output: {
        path: __dirname + '/public',
        filename: 'build/app.js',
        library: 'AS'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }

};
