import { IBaseState } from '../../common/models';

export interface IRegistrationModel {
    fullName: string;
    username: string;
    password: string;
    dateOfBirth: string;
    gender: string;
    country: string;
    agreement: boolean;
}

export interface IRegistrationStateModel extends IBaseState, IRegistrationModel {
    isFormValid: boolean;
}

export interface IRegistrationProps extends IBaseState {
    registrationRequestAction: (registrationModel: IRegistrationModel) => void;
}