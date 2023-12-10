export default function(opts = { ':root': 'page' }) {
  const keys = Object.keys(opts)
  return {
    postcssPlugin: 'postcss-rename',
    Rule(rule) {
      if (rule.source.input.file.indexOf('vant/es/') >  -1) {
        if (keys.includes(rule.selector)) {
          rule.selector = rule.selector.replace(rule.selector, opts[rule.selector])
        } else if (rule.selector === '.h5-input,.h5-button,.h5-textarea') {
          rule.remove()
        }
      }
    }
  }
}
