const newItem = (state = {}, action) => {
    switch (action.type) {
        case 'CLEAR_NEW_ITEM':
            return {};
        case 'SET_NEW_ITEM':
            return action.payload;
        default:
            return state;
    }
};

export default newItem;