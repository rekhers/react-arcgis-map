export const createMap = (domNode) => {
  return {
    type: 'CREATE_MAP',
    domNode
  }
}

export const addLayer = (map) => {
  return {
    type: 'ADD_LAYER',
    map
  }
}