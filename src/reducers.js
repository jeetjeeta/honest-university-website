import {TOGGLE_FACULTIES} from './constants'

const initialState={
	page: "home",
};

export const Reducer=(state=initialState,action={})=>
{
	switch (action.type) {
		case TOGGLE_FACULTIES:
			// statements_1
			return Object.assign({},state,{page: 'faculties'});
			break;
		default:
			// statements_def
			return state;
			break;
	}

	
}