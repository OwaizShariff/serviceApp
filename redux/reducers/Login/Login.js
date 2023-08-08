import * as types from '../../actionType';

const initialState = {
    sendOtpData: []
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEND_OTP_LOADING:
            return {
                ...state,
                loading: true,
            }
        case types.SEND_OTP_SUCCESS:
            return {
                ...state,
                sendOtpData: action.payload,
                loading: false,
            }
        case types.STYLE_LIST_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
                sendOtpData: [],
            }
        default:
            return state;
    }
}