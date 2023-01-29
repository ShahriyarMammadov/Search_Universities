let initialState = {
    loading: true,
    data: undefined,
    error: undefined,
    value: undefined,
};

export const universitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DATA_START":
            return {
                ...state,
                loading: true,
            };

        case "GET_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case "GET_DATA_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "SEARCH_START":
            return {
                ...state,
                loading: true,
            };

        case "SEARCH_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };

        case "SEARCH_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
