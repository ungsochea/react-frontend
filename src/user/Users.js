import React, { Component } from 'react'
import { list } from './apiUser'
import DefaultProfile from '../images/user-avatar.jpg'

class Users extends Component {
    constructor(){
        super()
        this.state ={
            users:[]
        }
    }

    componentDidMount(){
        list().then(data =>{
            if(data.error){
                console.log(data.error);
            }else{
                this.setState({ users:data })
            }
        })
    }

    renderUser = users =>(
        <div className="row">
                {
                    users.map((user,i)=>(
                        <div className="card col-md-4" key={i}>
                            <img className="card-img-top" src={ DefaultProfile } alt={ user.name } style={{ width:'100%',height:'15vw',objectFit:'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{ user.name }</h5>
                                <p className="card-text">
                                    { user.email }
                                </p>
                                <a href="/" className="btn btn-raised btn-sm btn-primary">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))
                }
        </div>
    )

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Users</h2>
                    {this.renderUser(users)}
            </div>
        )
    }
}

export default Users;

