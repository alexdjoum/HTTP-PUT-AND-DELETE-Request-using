import {Component} from 'react'
import axios from 'axios';

export default class Home extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            homeState: ""
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((data) => {
                //  console.log(data)
                this.setState({
                    homeState: data
                }, () => {
                    console.log(this.state.homeState)
                })
            }).catch((err) => {
                console.log(err)
            })
    }

    postData() {

        const data = {
            "userId": 233,
            "id": 233,
            "title": "les aventures de zaza",
            "body": "Alex surnomé zaza est un exper en JavaScript",
        }

        axios.post('https://jsonplaceholder.typicode.com/posts',data)
            .then((data) => { 
                console.log(data)
            })
            .catch((err) => {
                console.log(err)

            })
    }

    updateData() {
        const data = {
            "userId": "2234",
            "id": "2323",
            "title": "boris le matheux",
            "body": "Boris part à l'école tous les matins à 7h"
        }

        axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
            .then((data) => {
                console.log(data);
                })
            .catch((err) => {
                console.log(err);
            })
    }

    delData() {
        const data = {
            "userId": "2234",
            "id": "2223",
            "title": "boris le matheux",
            "body": "Boris part à l'école tous les matins à 7h"
        }

        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
            .then((data) => {
                console.log(data);
                })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <h1>Home page</h1>
                <p>Welcome to the axios</p>
                <button onClick={this.postData}>Submit</button>    
                <button onClick={this.updateData}>Update</button>    
                <button onClick={this.delData}>Delele</button>   
            </div>
        );
    }
}
