const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isSuccess: true
}

const reviews = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_REVIEWS_PENDING':
            return {
                ...state,
                data:[],
                isLoading: true,
                isError: false,
            }
        case 'GET_REVIEWS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_REVIEWS_FULFILLED':
            return {
                ...state,
                data: [{a:'tes'},{b:'tes2'}],
                isLoading: false,
                isError: false
            }
        case 'GET_DETAIL_REVIEW_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'GET_DETAIL_REVIEW_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'GET_DETAIL_REVIEW_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        case 'POST_REVIEWS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'POST_REVIEWS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'POST_REVIEWS_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        case 'DELETE_REVIEWS_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case 'DELETE_REVIEWS_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'DELETE_REVIEWS_FULFILLED':
            return {
                data: action.payload.data.data,
                isLoading: false,
                isError: false
            }
        default:
            return state
    }
}

export default reviews