import React, { Component } from 'react'
import { IRegistrationModel, IRegistrationProps, IRegistrationStateModel } from './models';
import { defaultRegistrationState, registration } from './store';
import { connect } from "react-redux";
import { IReducerState } from "../../helpers/rootStore"
import DatePicker from "react-datepicker";

export class RegistrationComponent extends Component<IRegistrationProps, IRegistrationStateModel> {

    state = defaultRegistrationState;

    handleInputChange = (event: any) => {
        const model = {
            ...this.state,
            [event.target.name]: event.target.value
        }

        this.setState({...model})
    }

    handleDateChange = (date: any) => {
        console.log(date);
        const model = {
            ...this.state,
            dateOfBirth: date
        }
        this.setState({...model})
    }

    render() {
        return (
            <div className="card mt-md-5">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputName">Full Name</label>
                            <input type="text" name="fullName" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" placeholder="Enter FullName" value={this.state.fullName} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email address</label>
                            <input type="email" name="username" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDob">Date Of Birth</label>
                            <DatePicker className="form-control" id="inputDob" name="dob" selected={new Date(this.state.dateOfBirth)} value={this.state.dateOfBirth} onChange={(date: any) => this.handleDateChange(date)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Password</label>
                            <input type="password" name="password" className="form-control" id="inputPassword" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); this.props.registrationRequestAction(this.state)}}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IReducerState) => {
    return {
        ...state.registrationStore
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        registrationRequestAction: (registrationStateModel: IRegistrationModel) => dispatch(registration(registrationStateModel))
    }
}

export const Registration = connect (
    mapStateToProps,
    mapDispatchToProps
)(RegistrationComponent)