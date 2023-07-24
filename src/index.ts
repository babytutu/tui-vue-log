interface AppOptions {
  border?: string
  background?: string[]
  style?: string
  display?: boolean
}

export default {
  install: (app: any, options?: AppOptions): void => {
    const {
      border = '4px',
      background = ['#606060', '#409EFF'],
      style,
      display = true,
    } = options || {}

    const css = style || 'padding: 4px 8px; color: #fff;'

    const version = Number(app.version.split('.')[0])

    /**
     * console
     * @param {string} key key
     * @param {any} args args
     */
    function log(key: string, ...args: any) {
      let filePath = ''
      if (version > 2) {
        const matched = app?.config?.globalProperties?.$route?.matched || []
        filePath = matched.length
          ? matched[matched.length - 1]?.components?.default?.__file
          : ''
      }
      display &&
        console.log(
          `%c${key}%c${JSON.stringify(args)}`, // Console Message
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
