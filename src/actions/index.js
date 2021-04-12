export const setFavorite = (payload) => ({
    type : 'SET_FAVORITE', 
    payload 
});

export const deleteFavorite = (payload) => ({

    type : 'DELETE_FAVORITE', 
    payload,
});

export const setSection = (payload) => ({

    type : 'SET_SECTION',
    payload,

})

export const setFilter = (payload) => ({

    type: 'SET_FILTER',
    payload,
});