const initialState = {
    open: false,
    choice: true,
    id: 0,
}

const confirm = (state = initialState, action) => {
    switch (action.type) {
        case 'DIALOG_OPEN':
            return {
                ...state,
                open: true,
            }
        case 'DIALOG_CLOSE':
            return {
                ...state,
                open: false,
            }
        case 'SET_CHOICE':
            return {
                ...state,
                choice: action.payload,
            }
        case 'SET_ITEM_ID':
            return {
                ...state,
                id: action.payload,
            }
        default:
            return state;
    }
};

export default confirm;