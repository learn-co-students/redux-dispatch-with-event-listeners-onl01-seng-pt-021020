// add code snippets from README

let state;

const reducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1}
        case 'DECREASE_COUNT':
            return {count: state.count - 1}
        default:
            return state;
    }
}

const dispatch = action => {
    state = reducer(state, action);
    render();
}

const render = () => {
    const container = document.getElementById('container');
    container.innerText = state.count;
}

dispatch({type: 'shows zero'});

const button = document.getElementById('button');  
button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
});

const decBtn = document.getElementById('dec-btn');
decBtn.addEventListener('click', () => {
    dispatch({type: 'DECREASE_COUNT'})
});



