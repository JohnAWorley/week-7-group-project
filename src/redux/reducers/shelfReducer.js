const shelf = (state = [], action) => {
    switch (action.type) {
      case 'SET_SHELF':
        return 1;
      default:
        return state;
    }
  };

  export default shelf;
  