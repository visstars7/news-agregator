const tailwindcss = require('tailwindcss')

module.exports = {
    plugins : [tailwindcss('./src/config/tailwind.config.js'),require('autoprefixer')]
}