export default {
  install: (app: any, options: any) => {
    const {
      border = '4px',
      background = ['#606060', '#409EFF'],
      style,
    } = options || {}

    const css = style || 'padding: 4px 8px; color: #fff;'

    const version = Number(app.version.split('.')[0])

    /**
     * console
     * @param {string} key key
     * @param {any} value value
     */
    function log(key: string, value: any) {
      let filePath = ''
      if (version > 2) {
        const [route] = app?.config?.globalProperties?.$route?.matched
        filePath = route?.components?.default?.__file || ''
      }
      console.log(
        `%c${key}%c${JSON.stringify(value)}`, // Console Message
        `border-radius: ${border} 0 0 ${border}; background: ${background[0]}; ${css}`,
        `border-radius: 0 ${border} ${border} 0; background: ${background[1]}; ${css}`,
        filePath.replace(/.*\/src(.*$)/, '$1')
      )
    }

    if (version > 2) {
      app.provide('log', log)
    } else {
      app.prototype.log = log
    }
  },
}