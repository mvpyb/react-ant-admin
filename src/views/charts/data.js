
export const dataTest = {
  // 点集
  nodes: [
    {
      id: 'node1', // 节点的唯一标识
      x: 50, // 节点横坐标
      y: 150, // 节点纵坐标
      label: '起始点' // 节点文本
    },
    {
      id: 'node2',
      x: 650,
      y: 300,
      label: '目标点'
    }
  ],
  // 边集
  edges: [
    // 表示一条从 node1 节点连接到 node2 节点的边
    {
      source: 'node1', // 起始点 id
      target: 'node2', // 目标点 id
      label: '我是连线' // 边的文本
    }
  ]
}

const legendX = 20
const legendBeginY = 50
const legendYPadding = 25
export const data = {
  nodes: [
    {
      id: 'level1',
      x: legendX,
      y: legendBeginY,
      label: '受灾情况严重',
      label_en: 'Severely Affected',
      style: {
        fill: '#FD5854',
        lineWidth: 0
      }
    },
    {
      id: 'level2',
      x: legendX,
      y: legendBeginY + legendYPadding,
      label_en: 'Affected',
      label: '受灾情况一般',
      style: {
        fill: '#FDA25A',
        lineWidth: 0
      }
    },
    {
      id: 'level3',
      label: '受灾情况较轻',
      label_en: 'Lightly Affected',
      x: legendX,
      y: legendBeginY + legendYPadding * 2,
      style: {
        fill: '#FFD574',
        lineWidth: 0
      }
    },
    {
      id: 'level4',
      label: '火灾未涉及',
      label_en: 'Not Affected',
      x: legendX,
      y: legendBeginY + legendYPadding * 3,
      style: {
        fill: '#3A5A3C',
        lineWidth: 0
      }
    },
    {
      id: 'legendSize',
      label: '圆面积代表城市人口总数',
      label_en: 'Node Size - Population',
      x: legendX,
      y: legendBeginY + legendYPadding * 4,
      size: 15,
      style: {
        fill: '#3A5A3C',
        lineWidth: 0
      }
    },
    {
      id: 'legendBar',
      label: '受灾点数量',
      label_en: 'Bar Height - # Fire Points',
      x: legendX,
      y: legendBeginY + legendYPadding * 5 + 10,
      type: 'rect',
      size: [2, 30],
      style: {
        fill: '#3A5A3C',
        lineWidth: 0
      }
    }
  ]
}

export const imgs = {
  'state-New South Wales': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/828aec79-8123-4ca7-baa8-1422a964003a.svg',
    width: 183,
    height: 146
  },
  'state-Victoria': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/463d3b0c-b03f-40b3-b6e9-6309b5d637cf.svg',
    width: 116,
    height: 88
  },
  'state-Queensland': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/617bc829-50e5-4537-978e-81bf424cb8fd.svg',
    width: 215,
    height: 311
  },
  'state-Western Australia': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/c8b4cbb0-57fd-4c18-bbd1-4993b52e5048.svg',
    width: 221,
    height: 357
  },
  'state-South Australia': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/6582ef8e-e5ce-4815-9183-b6a70caeb1db.svg',
    width: 169,
    height: 198
  },
  'state-Tasmania': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/056fb079-58c1-4697-bb66-15f08512cfb8.svg',
    width: 50,
    height: 45
  },
  'state-Northern Territory': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/a616ae60-ebe6-4e61-b085-1a207237e193.svg',
    width: 140,
    height: 243
  },
  'country-australia': {
    src: 'https://gw.alipayobjects.com/zos/basement_prod/85c5e2e2-c015-495a-8710-3c881c49a3ed.svg',
    width: 559,
    height: 464
  }
}
