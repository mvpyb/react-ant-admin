
import React, { useEffect } from 'react'
// doc      : https://openlayers.org/en/latest/doc/quickstart.html
// examples : https://openlayers.org/en/latest/examples/
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'

import GeoJSON from 'ol/format/GeoJSON'
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style'
import { OSM, Vector as VectorSource } from 'ol/source'
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'

import styles from './index.module.scss'

const source = new VectorSource({
  url: 'https://openlayers.org/en/latest/examples/data/geojson/switzerland.geojson',
  format: new GeoJSON()
})
const style = new Style({
  fill: new Fill({
    color: 'rgba(255, 255, 255, 0.6)'
  }),
  stroke: new Stroke({
    color: '#319FD3',
    width: 1
  }),
  image: new CircleStyle({
    radius: 5,
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.6)'
    }),
    stroke: new Stroke({
      color: '#319FD3',
      width: 1
    })
  })
})
const vectorLayer = new VectorLayer({
  source: source,
  style: style
})
const view = new View({
  center: [0, 0],
  zoom: 4
})

const YuStreetMap = (props) => {
  const mapEl = React.useRef(null)
  const initMap = () => {
    new Map({
      target: mapEl.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view
    })
  }

  useEffect(() => {
    initMap()
  }, [])

  return (
    <div ref={mapEl} className={styles.map} style={{ height: '447px' }}></div>
  )
}

export default YuStreetMap
