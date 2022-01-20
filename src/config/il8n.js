import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 如果需要检测当前浏览器的语言或者从服务器获取配置资源可以安装下面依赖
// import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

import lang from '@/locales'

i18n
// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// l文档: https://github.com/i18next/i18next-http-backend
//   .use( Backend )

// detect user language
// 文档: https://github.com/i18next/i18next-browser-languageDetector
//   .use( LanguageDetector )

// pass the i18n instance to react-i18next.
  .use( initReactI18next )

// init i18next
// 文档参数: https://www.i18next.com/overview/configuration-options
  .init( {
    fallbackLng : 'zh',
    lng : 'zh',
    debug : true,
    resources : lang,
    interpolation : {
      escapeValue : false
    }
  } )

export default i18n
