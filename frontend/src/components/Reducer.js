export const initialState = {
    globalTime: null,
    globalDate: null,
    user: null,
    globalName: null,
    globalPhone: null,
    globalGender: null,
    globalAge: null,
    globalChecked:false,
    globalEmail: null,
    globalTimeText: null,
    globalRating: null,
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
                globalTime : action.globalTime,
                globalTimeText : action.globalTimeText
            }
        case 'SET_GLOBALDATE':
            return {
                ...state,
                globalDate : action.globalDate,
            }
        case 'SET_RATING':
            return {
              ...state,
              globalRating: action.globalRating,
            }
        case 'SET_FORM':
            return {
                ...state,
                globalName: action.globalName,
                globalEmail: action.globalEmail,
                globalPhone: action.globalPhone,
                globalGender: action.globalGender,
                globalAge: action.globalAge,
                globalChecked: action.globalChecked
            }
        default:
            return state;
    }
}

export default reducer;
