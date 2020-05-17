import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup'
//import {v1 as uuid} from 'uuid';
import axios from 'axios';

class EditContact extends Component {
    state ={
        name: '',
        phone: '',
        email: '',
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;
        this.setState({
            name: contact.name,
            phone: contact.phone,
            email: contact.email
        });
    };

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {name, phone, email} = this.state;

        //check fields / error check
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

        const updContact = {
            name,
            phone,
            email
        }

        const { id } = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updContact);

        dispatch({type: 'UPDATE_CONTACT', payload:res.data});

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
                            <div className="card-header"> Edit Contact </div>
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
                                        value="Update Contact"
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

export default EditContact;