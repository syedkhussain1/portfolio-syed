import React from 'react'


class PortfolioAddForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          description: '',
          stack: '',
        };
  
      this.TitleChangeHandler = this.TitleChangeHandler.bind(this);
      this.DescriptionChangeHandler = this.DescriptionChangeHandler.bind(this);
      this.StackChangeHandler = this.StackChangeHandler.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    TitleChangeHandler(event) {
      this.setState({title: event.target.value});
    }

    DescriptionChangeHandler(event) {
        this.setState({description: event.target.value});
      }
    
    StackChangeHandler(event) {
      this.setState({stack: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Title: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.stack);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Title :
            <input type="text" value={this.state.title} onChange={this.TitleChangeHandler} />
          </label>
          <label>
            Description :
            <input type="text" value={this.state.description} onChange={this.DescriptionChangeHandler} />
          </label>
          <label>
          Programming Stack used :
          <input type="text" value={this.state.stack} onChange={this.StackChangeHandler} />
        </label>
        <br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default PortfolioAddForm;