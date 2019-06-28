import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import axios from 'axios'

class Index extends Component{

    state = {
        title: 'I am idex page',
        tile2: ''
    }

    // static async getInitalProps(){
    //     let userData = {};
    //     try{
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    //         userData = response.data;
    //     } catch(err){
    //         console.error(err);
    //     }             
    //     return {initialData:[1,2,3], userData};
    // }

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         title: 'I am idex page'
    //     }
    //     console.log('constro')
    // }
     //fetch
  componentDidMount() {

    fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.title)

        this.setState({
          title2: data.title
        });
      });
  }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    updateTitle = () => {
        this.setState({title: 'I am update title'})
    }

    render(){
        console.log('render')
        
        return(
            <BaseLayout>
                <h1>This is index page!!!</h1>
                <h2>{this.state.title}</h2>
                 <h2>{ this.state.title2 }</h2>
                <button onClick={this.updateTitle}>Change Title</button>
            </BaseLayout>
        )
    }
}

export default Index;