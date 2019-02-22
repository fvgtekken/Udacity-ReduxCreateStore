const action = {
  type: 'DELETE_FLAVOR',
  flavor:'Vanilla'
};

let state = [{ flavor: 'Chocolate', count: 36 }, { flavor: 'Vanilla', count: 210 }]

function appReducer (state = [], action) {
  
  if (action.type === 'DELETE_FLAVOR') {
    return state.filter((ele)=> ele.flavor!==action.flavor )
  }

  return state
}

console.log(appReducer(state, action));