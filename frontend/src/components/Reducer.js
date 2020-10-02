export const initialState = {
    globalTime: null,
    globalDate: null,
    user: null,
    globalName: null,
    globalPhone: null,
    globalGender: null,
    globalAge: null,
    globalEmail: null,
    globalTimeText: null
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
        case 'SET_FORM':
            return {
                ...state,
                globalName: action.globalName,
                globalEmail: action.globalEmail,
                globalPhone: action.globalPhone,
                globalGender: action.globalGender,
                globalAge: action.globalAge
            };
        default:
            return state;
    }
}

export default reducer;
