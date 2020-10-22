import React, { Component } from 'react'
import { ILoginStateModel, ILoginProps, ILoginModel } from './models';
import { defaultLoginState, login } from './store';
import { connect } from "react-redux";
import { IReducerState } from "../../helpers"

export class LoginComponent extends Component<ILoginProps, ILoginStateModel> {

    state = defaultLoginState;

    handleInputChange = (event: any) => {
        const model = {
            ...this.state,
            [event.target.name]: event.target.value
        }

        this.setState({...model})
    }

    render() {
        return (
            <div className="card mt-md-5">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={this.handleInputChange} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => {e.preventDefault(); this.props.loginRequestAction(this.state)}}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IReducerState) => {
    return {
        ...state.loginStore
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        loginRequestAction: (loginStateModel: ILoginModel) => dispatch(login(loginStateModel))
    }
}

export const Login = connect (
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent)