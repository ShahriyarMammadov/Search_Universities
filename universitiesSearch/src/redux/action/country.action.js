import axios from "axios";

export const searchUniversities = (values) => {
    return async (dispatch) => {
        dispatch({
            type: "SEARCH_START",
        });

        try {
            let response = await axios.get(
                `http://universities.hipolabs.com/search?name=${values}`
            );
            dispatch({
                type: "GET_DATA_SUCCESS",
                payload: response.data,
            });
        } catch (error) {
            dispatch({
                type: "GET_DATA_FAILED",
                payload: error,
            });
        }
    };
}