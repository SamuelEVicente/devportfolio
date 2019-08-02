import React, { Component } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import { TextField } from '@material-ui/core';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    comments: Yup.string()
        .max(500, 'Too long!: Please enter a brief comment')
        .required('Required')
})

class ContactForm extends Component {

    submitValues = values => {
        console.log(values)
    }
    render() {
        return (
            <div id-="contactSection" style={{ marginBottom: 150, flexDirection: 'column' }}>
                <h1>Contact</h1>
                <h1 className="hr" >{}</h1>
                <Formik
                    initialValues={{ name: '', email: '', comments: '' }}
                    validationSchema={ContactSchema}
                    onSubmit={
                        values => this.submitValues(values)
                    }
                >
                    {({
                        values,
                        touched,
                        errors,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    }) => (
                            <Form className='contact-form' style={{flexDirection: 'column'}}>
                                <TextField  name="name" className='text-input' placeholder='Name'/>
                                {/* {errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                ) : null} */}
                                <TextField name="email" type="email" className='text-input'  placeholder='Email'/>
                                {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
                                <TextField name="comments" className='comment-text-input'  placeholder='Comments'/>
                                {/* {errors.comments && touched.comments ? (
                                    <div>{errors.comments}</div>
                                ) : null} */}
                                <button type="submit">Submit</button>
                            </Form>
                        )}
                </Formik>
            </div>
        )
    }
}

export default ContactForm