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

    handleDateChange = (date: Date) => {
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
                            <label htmlFor="exampleInputName">Full Name</label>
                            <input type="text" name="fullName" className="form-control" id="exampleInputFullName" aria-describedby="fullNameHelp" placeholder="Enter FullName" value={this.state.fullName} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDob">Date Of Birth</label>
                            {/* <input type="text" name="dob" className="form-control" id="exampleInputDob" placeholder="Date of Birth" value={this.state.dateOfBirth} onChange={this.handleInputChange} /> */}
                            <DatePicker className="form-control" id="exampleInputDob" name="dob" selected={this.state.dateOfBirth} onChange={(date: Date) => this.handleDateChange(date)} />
                        </div>
                        
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
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