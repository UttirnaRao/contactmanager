import React, { Component } from 'react'

class Test extends Component {

    state ={
        title:'',
        body:''
    };
    
    componentDidMount() {
        //console.log('componentDidMount...');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            //.then(json => console.log(json));
            //.then(data => console.log(data));
            .then(data => this.setState({
                title:data.title,
                body:data.body})
                );
    }

    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount...');
    // }

    // componentDidUpdate() {
    //     console.log('componentDidUpdate...');
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate...');
    // }

    // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    //         console.log('componentWillReceiveProps...');
    // }

    // //new ones from the website articel
    // static getDerivedStateFromPropes(next.Props, prevState) {
    //     return {
    //         test: 'something';
    //     }
    // }

    // getSnapshotBeforeUpdate(prevProps,PrevState) {
    //     console.log('getSnapshotBeforeUpdate...');
    // }
    
    render() {

        const {title, body} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        );
    }
}
export default Test;