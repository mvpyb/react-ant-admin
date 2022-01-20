import tracker from '../utils/tracker'
import onload from '../utils/onload'
import getLastEvent from '../utils/getLastEvent'
import getSelector from '../utils/getSelector'
export function timing() {
  let FMP, LCP
  // 增加一个性能条目的观察者
  if ( PerformanceObserver ) {
    new PerformanceObserver( ( entryList, observer ) => {
      const perfEntries = entryList.getEntries()
      FMP = perfEntries[0]// startTime 2000以后
      observer.disconnect()// 不再观察了
    } ).observe( { entryTypes : ['element'] } )// 观察页面中的意义的元素

    new PerformanceObserver( ( entryList, observer ) => {
      const perfEntries = entryList.getEntries()
      LCP = perfEntries[0]
      observer.disconnect()// 不再观察了
    } ).observe( { entryTypes : ['largest-contentful-paint'] } )// 观察页面中的意义的元素

    new PerformanceObserver( ( entryList, observer ) => {
      const lastEvent = getLastEvent()
      const firstInput = entryList.getEntries()[0]
      console.log( 'FID', firstInput )
      if ( firstInput ) {
        // processingStart开始处理的时间 startTime开点击的时间 差值就是处理的延迟
        const inputDelay = firstInput.processingStart - firstInput.startTime
        const { duration } = firstInput// 处理的耗时
        if ( inputDelay > 0 || duration > 0 ) {
          tracker.send( {
            kind : 'experience', // 用户体验指标
            type : 'firstInputDelay', // 首次输入延迟
            inputDelay, // 延时的时间
            duration, // 处理的时间
            startTime : firstInput.startTime,
            selector : lastEvent ? getSelector( lastEvent.path || lastEvent.target ) : ''
          } )
        }

      }
      observer.disconnect()// 不再观察了
    } ).observe( { type : 'first-input', buffered : true } )// 观察页面中的意义的元素
  }

  // 用户的第一次交互 点击页面
  onload( function() {
    setTimeout( () => {
      const {
        fetchStart,
        connectStart,
        connectEnd,
        requestStart,
        responseStart,
        responseEnd,
        domLoading,
        domInteractive,
        domContentLoadedEventStart,
        domContentLoadedEventEnd,
        loadEventStart
      } = performance.timing
      tracker.send( {
        kind : 'experience', // 用户体验指标
        type : 'timing', // 统计每个阶段的时间
        connectTime : connectEnd - connectStart, // 连接时间
        ttfbTime : responseStart - requestStart, // 首字节到达时间
        responseTime : responseEnd - responseStart, // 响应的读取时间
        parseDOMTime : loadEventStart - domLoading, // DOM解析的时间
        domContentLoadedTime : domContentLoadedEventEnd - domContentLoadedEventStart,
        timeToInteractive : domInteractive - fetchStart, // 首次可交互时间
        loadTIme : loadEventStart - fetchStart // 完整的加载时间
      } )


      const FP = performance.getEntriesByName( 'first-paint' )[0]
      const FCP = performance.getEntriesByName( 'first-contentful-paint' )[0]
      // 开始发送性能指标
      console.log( 'FP', FP )
      console.log( 'FCP', FCP )
      console.log( 'FMP', FMP )
      console.log( 'LCP', LCP )
      tracker.send( {
        kind : 'experience', // 用户体验指标
        type : 'paint', // 统计每个阶段的时间
        firstPaint : FP.startTime,
        firstContentfulPaint : FCP.startTime,
        firstMeaningfulPaint : FMP.startTime,
        largestContentfulPaint : LCP.startTime
      } )
    }, 3000 )
  } )

}
