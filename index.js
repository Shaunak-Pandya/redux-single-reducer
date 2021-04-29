const redux = require('redux');
//use ES6 import statement when used with React
const createStore = redux.createStore; //alias

//Constant created to store a sting as an indentifier of Action
const BUY_CAKE = "BUY_CAKE";

//Action Funtion retuning a Object to be mapped by reducer
function buyCakeAction() {
	return {
		type : BUY_CAKE,
		info : 'First Redux  Action'
	}
}

//Temp store object
const initialState = {
	numberOfCakes : 10
}

//Reducer function (Pure Function) (previousState, action) => newState

const reducer = (state = initialState, action) => { 
//state = initialState (to keep concerns seperate) 						
	switch(action.type){
		case BUY_CAKE : return {
			...state,
			//state.numberOfCakes makes it safer to modify and save to new state without disturbing the original state (a.k.a Mutation).
			numberOfCakes : state.numberOfCakes - 1
		}

		default : return state;
	}
}


//REDUX STEPS STARTS HERE
//store creation
const store = createStore(reducer);
console.log('Initial State - ', store.getState());

//make a subscriber
const unsubscribe = store.subscribe(() => console.log('Updated State - ', store.getState(	)))

//Action Caller a.k.a dispatch(actionCallerFunction to return action object)
store.dispatch(buyCakeAction())
store.dispatch(buyCakeAction())
store.dispatch(buyCakeAction())
unsubscribe()
