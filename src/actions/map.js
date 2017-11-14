export const createMap = (view) => {
  return {
    type: 'CREATE_MAP',
    view
  }
}

export const toggleLayer = (bool) => {
  return {
    type: 'TOGGLE_LAYER',
    bool
  }
}

