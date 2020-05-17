import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup'
//import {v1 as uuid} from 'uuid';
import axios from 'axios';

class AddContact extends Component {
    state ={
        name: '',
        phone: '',
        email: '',
        errors: {}
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {name, phone, email} = this.state;

        //check fields
        if(name === '') {
            this.setState({errors: {name: 'Name is Required'}});
            return;
        }
        
        if(phone === '') {
            this.setState({errors: {phone: 'Phone Number is Required'}});
            return;
        }

        if(email === '') {
            this.setState({errors: {email: 'Email is Required'}});
            return;
        }

        const newContact = {
            //id: uuid(),
            name,
            phone,
            email
        };

        const res = await axios
        .post('https://jsonplaceholder.typicode.com/users', newContact)
        //.then(res => dispatch({type: 'ADD_CONTACT', payload:res.data }));
        dispatch({type: 'ADD_CONTACT', payload:res.data });

        //dispatch({type: 'ADD_CONTACT', payload:newContact });

        //clear after a submit / no blank submits
        this.setState({
            name:'',
            phone:'',
            email:'',
            errors: {}
        });

        //redirecting back to the home back after adding a contact
        this.props.history.push('/');
    };

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    render() {
        const {name, phone, email, errors} = this.state;
        
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                       <div className="card mb-3">
                            <div className="card-header"> Add Contact </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />

                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone Number"
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />

                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />

                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-block btn-light"
                                    />
                                </form>
                            </div>
                        </div> 
                    )
                }}
            </Consumer>
        );
    }
}

export default AddContact;