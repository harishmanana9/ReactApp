import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            title:this.props.title
        }
    }
    componentDidMount() {
        this.setState({name:'Harish'});
    }
    
    clickHandler() {
        alert('This is ClickHandler from class component');
    }

    render() {
        return (
            <div>
                Enter Your name <input type="text" id="studname" name="studname"
                onChange={(text) => this.setState({name:text.target.value})} />
                <br/><br/>
                <button onClick={this.clickHandler}>Click Handler Calling</button>
            <br/>
              <p>This is from class component by {this.state.name} </p>  
              <p>Title from props {this.state.title}</p>
            </div>
        )
    }
}
