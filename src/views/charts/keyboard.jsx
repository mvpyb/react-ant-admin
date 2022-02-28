
import React, { Component } from 'react'
import { connect } from 'react-redux'
import echarts from '@/vendor/echarts'
import debounce from 'loadsh/debounce'

class KeyboardChart extends Component {
  state = {
    chart : null
  };

  componentDidMount() {
    debounce( this.initChart.bind( this ), 300 )()
    window.addEventListener( 'resize', () => this.resize() )
  }

  UNSAFE_componentWillReceiveProps( nextProps ) {
    if ( nextProps.sidebarCollapsed !== this.props.sidebarCollapsed ) {
      this.resize()
    }
  }

  componentWillUnmount() {
    this.dispose()
  }

  resize() {
    const chart = this.state.chart
    if ( chart ) {
      debounce( chart.resize.bind( this ), 300 )()
    }
  }

  dispose() {
    if ( !this.state.chart ) {
      return
    }
    window.removeEventListener( 'resize', () => this.resize() ) // 移除窗口，变化时重置图表
    this.setState( { chart : null } )
  }

  setOptions() {
    const xAxisData = []
    const data = []
    const data2 = []
    for ( let i = 0; i < 50; i++ ) {
      xAxisData.push( i )
      data.push( ( Math.sin( i / 5 ) * ( i / 5 - 10 ) + i / 6 ) * 5 )
      data2.push( ( Math.sin( i / 5 ) * ( i / 5 + 10 ) + i / 6 ) * 3 )
    }
    this.state.chart.setOption( {
      backgroundColor : '#08263a',
      grid : {
        left : '5%',
        right : '5%'
      },
      xAxis : [
        {
          show : false,
          data : xAxisData
        },
        {
          show : false,
          data : xAxisData
        }
      ],
      visualMap : {
        show : false,
        min : 0,
        max : 50,
        dimension : 0,
        inRange : {
          color : [
            '#4a657a',
            '#308e92',
            '#b1cfa5',
            '#f5d69f',
            '#f5898b',
            '#ef5055'
          ]
        }
      },
      yAxis : {
        axisLine : {
          show : false
        },
        axisLabel : {
          textStyle : {
            color : '#4a657a'
          }
        },
        splitLine : {
          show : true,
          lineStyle : {
            color : '#08263f'
          }
        },
        axisTick : {
          show : false
        }
      },
      series : [
        {
          name : 'back',
          type : 'bar',
          data : data2,
          z : 1,
          itemStyle : {
            normal : {
              opacity : 0.4,
              barBorderRadius : 5,
              shadowBlur : 3,
              shadowColor : '#111'
            }
          }
        },
        {
          name : 'Simulate Shadow',
          type : 'line',
          data,
          z : 2,
          showSymbol : false,
          animationDelay : 0,
          animationEasing : 'linear',
          animationDuration : 1200,
          lineStyle : {
            normal : {
              color : 'transparent'
            }
          },
          areaStyle : {
            normal : {
              color : '#08263a',
              shadowBlur : 50,
              shadowColor : '#000'
            }
          }
        },
        {
          name : 'front',
          type : 'bar',
          data,
          xAxisIndex : 1,
          z : 3,
          itemStyle : {
            normal : {
              barBorderRadius : 5
            }
          }
        }
      ],
      animationEasing : 'elasticOut',
      animationEasingUpdate : 'elasticOut',
      animationDelay( idx ) {
        return idx * 20
      },
      animationDelayUpdate( idx ) {
        return idx * 20
      }
    } )
  }

  initChart() {
    if ( !this.el ) return
    this.setState( { chart : echarts.init( this.el, 'macarons' ) }, () => {
      this.setOptions()
    } )
  }
  render() {
    return (
      <div
        style={{ width : '100%', height : 'calc(100vh - 100px)' }}
        className='app-container'
      >
        <div
          style={{ width : '100%', height : '100%' }}
          ref={( el ) => ( this.el = el )}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.app
  }
}

export default connect( mapStateToProps )( KeyboardChart )
