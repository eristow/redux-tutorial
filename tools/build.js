/*eslint-disable no-console */
import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import colors from 'colors'

process.env.NODE_ENV = 'production'

console.log('Generating minified bundle for production via Webpack...'.blue)

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(err.bold.red)
        return 1
    }

    const jsonStats = stats.toJson()

    if (jsonStats.errors.length > 0) {
        return jsonStats.errors.map(error => console.log(error.red))
    }

    if (jsonStats.warnings.length > 0) {
        console.log('Webpack generated the following warnings: '.bold.yellow)
        jsonStats.warnings.map(warning => console.log(warning.yellow))
    }

    console.log(`Webpack stats: ${stats}`)
    console.log('Your app has been compilied in production mode and written to /public.'.green)

    return 0
})