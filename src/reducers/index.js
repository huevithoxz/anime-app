const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        favoriteAnimes: [...state.favoriteAnimes, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        favoriteAnimes: state.favoriteAnimes.filter(
          (items) => items.data.id !== action.payload
        ),
      };
    case "SET_SECTION":
      return {
        ...state,
        sectionActive: action.payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
