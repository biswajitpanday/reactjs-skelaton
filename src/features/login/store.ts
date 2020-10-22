import { ILoginModel, ILoginStateModel } from './models';
import { Dispatch } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const defaultLoginState: ILoginStateModel = {
    username: '',
    password: '',
    isBusy: false,
    errorMessage: '',
    isFormValid: false
}


const slice = createSlice({
    name: 'loginStore',
    initialState: defaultLoginState,
    reducers: {
        
    }
})

export default slice.reducer;

export const login = (loginModel: ILoginModel) => async (dispatch: Dispatch) => {
    try {
        console.log(loginModel);
    }
    catch (error) {
        console.log(error);
    }
}