/////////////Fromik Implementation///////////
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const valiateInputs = (validate) => {
    let errors = {};
        // if (!values.email) {
        //   errors.email = 'Required';
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = 'Invalid email address';
        // }
        return errors;
}

const PortfolioAddForm = (props) => (
  <div>
    <Formik
      initialValues={{ title: '',
                     description: '',
                     stack: '' 
                    }}

      validate={valiateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <div>
                <lable>Title: </lable>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" />
            </div>
            <div>
                <lable>Description: </lable>
                <Field type="textarea" name="description" component="textarea"/>
                <ErrorMessage name="description" component="div" />
            </div>
            <div>
                <lable>Stack used: </lable>
                <Field type="text" name="stack" />
                <ErrorMessage name="stack" component="div" />
            </div>

          <button type="submit" disabled={isSubmitting}>
            Add New Portfolio
          </button>
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