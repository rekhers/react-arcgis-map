export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  }
}

export const addLayer = (layer) => {
  return {
    type: 'ADD_LAYER',
    layer
  }
}