import * as types from '../../actionType';
import axios from 'axios';

const sendOtpLoading = () => ({
    type: types.SEND_OTP_LOADING,
})

const sendOtpSuccess = (data) => ({
    type: types.SEND_OTP_SUCCESS,
    payload: data
})
const sendOtpFail = (error) => ({
    type: types.STYLE_LIST_FAIL,
    payload: error
})

export const sendOtp = (data) => {
    return function (dispatch) {
        dispatch(sendOtpLoading());
        axios.post(`http://localhost:4000/login/otp/send-sms`,data)
            .then((resp) => {
                dispatch(sendOtpSuccess(resp.data))
            })
            .catch((error) => {
                dispatch(sendOtpFail(error))
            })
    }
}