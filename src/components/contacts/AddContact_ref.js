import React, { Component } from 'react'

class AddContact extends Component {
    /*state ={
        name: '',
        phone: '',
        email: ''
    }*/

    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.phoneInput = React.createRef();
        this.emailInput = React.createRef();        
    }

    onSubmit = e => {
        e.preventDefault();
        //console.log(this.state);

        const contact = {
            name: this.nameInput.current.value,
            phone: this.phoneInput.current.value,
            email: this.emailInput.current.value,
        }

        console.log(contact);
    };

    //onChange = (e) => this.setState({[e.target.name]: e.target.value});

    static defaultProps = {
        name: 'Xavier',
        phone: '1212121211',
        email:'xyv@gmail.com'
    }

    render() {
        //const {name, phone, email} = this.state;
        const {name, phone, email} = this.props;
        return (
            <div className="card mb-3">
               <div className="card-header"> Add Contact </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                className="form-control form-control-lg"
                                placeholder="Enter Name"  
                                //value={name} 
                                defaultValue={name}
                                //onChange={this.onChange} 
                                ref={this.nameInput}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text"
                                name="phone"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone Number" 
                                //value={phone}  
                                defaultValue={phone}
                                //onChange={this.onChange}
                                ref={this.phoneInput}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                placeholder="Enter Email" 
                                //value={email}  
                                defaultValue={email}
                                //onChange={this.onChange}
                                ref={this.emailInput}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Add Contact"
                            className="btn btn-block btn-light"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;