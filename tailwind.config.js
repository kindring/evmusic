module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  // 禁用指定的css类
  corePlugins: {
    container: false,
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
