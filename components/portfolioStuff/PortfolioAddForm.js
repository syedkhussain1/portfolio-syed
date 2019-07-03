/////////////Fromik Implementation///////////
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';

// const valiateInputs = (values) => {
//     let errors = {};

    
//     if (!values.title) {
//       errors.title = 'Required';
//     } 
//     return errors;
// }

const PortfolioAddForm = (props) => (
  <div>
    <Formik
      initialValues={{ title: '',
                     description: '',
                     stack: '',
                     url: ''
                    }}

    //   validate={valiateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
            <FormGroup>
                <Label>Title: </Label>
                <Field className="form-control" type="text" name="title" />
                <ErrorMessage name="title" component="div" />
            </FormGroup>

            <FormGroup>
                <Label>Description: </Label>
                <Field className="form-control" type="textarea" name="description" component="textarea"/>
                <ErrorMessage name="description" component="div" />
            </FormGroup>

            <FormGroup>
                <Label>Stack used: </Label>
                <Field className="form-control" type="text" name="stack" />
                <ErrorMessage name="stack" component="div" />
            </FormGroup>

            <FormGroup>
                <Label>URL: </Label>
                <Field className="form-control" type="text" name="url" />
                <ErrorMessage name="url" component="div" />
            </FormGroup>

          <Button color="info" type="submit" disabled={isSubmitting}>
            Add New Portfolio
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioAddForm;





/////////////React form way to implement ////////////
// import React from 'react'


// class PortfolioAddForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           title: '',
//           description: '',
//           stack: '',
//         };
  
//       this.TitleChangeHandler = this.TitleChangeHandler.bind(this);
//       this.DescriptionChangeHandler = this.DescriptionChangeHandler.bind(this);
//       this.StackChangeHandler = this.StackChangeHandler.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     TitleChangeHandler(event) {
//       this.setState({title: event.target.value});
//     }

//     DescriptionChangeHandler(event) {
//         this.setState({description: event.target.value});
//       }
    
//     StackChangeHandler(event) {
//       this.setState({stack: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Title: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.stack);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Title :
//             <input type="text" value={this.state.title} onChange={this.TitleChangeHandler} />
//           </label>
//           <label>
//             Description :
//             <input type="text" value={this.state.description} onChange={this.DescriptionChangeHandler} />
//           </label>
//           <label>
//           Programming Stack used :
//           <input type="text" value={this.state.stack} onChange={this.StackChangeHandler} />
//         </label>
//         <br/>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

//   export default PortfolioAddForm;