export const initialState = {
    globalTime: 11,
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
                globalTime : action.item
            };
        default:
            return state;
    }
}

export default reducer;
