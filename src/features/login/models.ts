import { IBaseState } from '../../common/models';

export interface ILoginModel {
    username: string;
    password: string;
}

export interface ILoginStateModel extends IBaseState, ILoginModel {
    isFormValid: boolean;
}