export const initialState = {
    globalTime: null,
    user: null,
};


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_GLOBALTIME':
            return {
                ...state,
                globalTime : action.globalTime
            };
        default:
            return state;
    }
}

export default reducer;
