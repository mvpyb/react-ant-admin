import { css } from '@emotion/css'
// import { useEffect } from 'react'

export function useEmotionCss(cb) {
  return css(cb())
}

// export function useTitle( title ) {
//   useEffect(function () {
//     document.title = title
//   }, [title])
//   useEffect( () => {
//     return () => document.title = ''
//   }, [] )
// }
//
// export function useAsyncEffect(effect, dependencies = []) {
//   return useEffect(() => {
//     const cleanupPromise = effect()
//     return () => { cleanupPromise.then(cleanup => cleanup && cleanup()) }
//   }, dependencies)
// }
