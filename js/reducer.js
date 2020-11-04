let state;

function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = reducer(state, action)
  render()
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button');
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})

//Oh yea! Not much new here.
//But that didn't stop the dopamine hit.
//We saw that by thinking about redux from the perspective of action -> reducer -> new state,
//we are able to get going. Then it's just a matter of tackling each problem.
