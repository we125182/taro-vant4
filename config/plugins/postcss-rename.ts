export default function(opts = { ':root': 'page' }) {
  const keys = Object.keys(opts)
  return {
    postcssPlugin: 'postcss-rename',
    Rule(rule) {
      if (keys.includes(rule.selector)) {
        rule.selector = rule.selector.replace(rule.selector, opts[rule.selector])
      }
    }
  }
}
