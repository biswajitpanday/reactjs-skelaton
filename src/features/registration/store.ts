import { IRegistrationModel, IRegistrationStateModel } from './models';
import { Dispatch } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const defaultRegistrationState: IRegistrationStateModel = {
    fullName: '',
    username: '',
    password: '',
    country: '',
    gender: '',
    dateOfBirth: new Date(),
    agreement: false,
    isBusy: false,
    errorMessage: '',
    isFormValid: false
}


const slice = createSlice({
    name: 'registrationStore',
    initialState: defaultRegistrationState,
    reducers: {
        
    }
})

export default slice.reducer;

export const registration = (registrationModel: IRegistrationModel) => async (dispatch: Dispatch) => {
    try {
        console.log(registrationModel);
    }
    catch (error) {
        console.log(error);
    }
}