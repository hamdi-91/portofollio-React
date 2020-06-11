import React, { Component } from 'react';
import Car from './car';
import  './myCss.css';

const titleCol={fontSize:'50px' , color:'red'}

class Form extends Component {
    state = {
        username: '',
        color: '',
        colors: ["", "red", "blue", "pink", "green", "yellow"],
        comments: ''
    }

    handlePseudo = e => {
        this.setState({
            username: e.target.value
        })
    }
    handleColor = event => {
        this.setState({
            color: event.target.value
        })

    }
    handleComment = e => {
        this.setState({
            comments: e.target.value
        })
    }

    handleSubmitForm= e => {
        e.preventDefault();
        console.log(`username: ${this.state.username} color: ${this.state.color} comments: ${this.state.comments}`)
    }
    render() {
        const myClass= this.props.head ? 'blue' : 'red';
        return (
            <div>
                <Car color={this.state.color} height='400' />
                <h1 style={titleCol}> Commentaire</h1>
                <p className={myClass}> c'est un message juste pour passer um message , merci de recevoir ce message  </p>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type='text' value={this.state.username} onChange={this.handlePseudo} />
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>{
                            this.state.colors.map((color, index) => {
                                return <option key={index} value={color}>{color}</option>
                            })
                        }
                        </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
                    </div>
                    <button>Valider</button>
                </form>
            </div>
        )
    }
}

export default Form;