import React, { Component } from 'react'
import { isAuthenticated } from '../auth/index'

class Profile extends Component {

    constructor(){
        super()
        this.state = {
            user:"",
            redirectToSignin:false
        }
    }

    componentDidMount(){
        console.log("user is from route params", this.props.match.params.userId)
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Profile</h2>
                <p>{ isAuthenticated().user.name }</p>
                <p>{process.env.REACT_APP_API_URL}/signup</p>
            </div>
        )
    }
}

export default Profile;
