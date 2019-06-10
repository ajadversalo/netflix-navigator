import React, { Component } from 'react';

import {Button, Col, Form as BootstrapForm} from 'react-bootstrap';
import Genres from '../data/genres';
import ContentTypes from '../data/contentTypes';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field, Form} from 'redux-form';


{/* Simple component which allows detailed content search using the following data:
    1. Start Year
    2. End Year
    3. Content Type
    4. Content Genre
    5. IMDB Minimum Score
    6. IMDB Maximum Score */}


const required = value => value ? undefined : 'Required'
const minYear = min => value => value && value < min ? `Min year is ${min}` : undefined
const maxYear = max => value => value && value > max ? `Max year is ${max}` : undefined

const minYear1900 = minYear(1900)  
const maxYear2019 = maxYear(2019)  

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div style={{display:'flex'}}>
      <label style={{width: '150px'}}>{label}</label>
      <div>
        <input style={{width: '200px'}} {...input} placeholder={label} type={type}/>
        {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let AdvancedSearch = (props) =>  {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <div> 
            
                <Col>
                <h6><strong>Advanced Search</strong></h6>
                <Form onSubmit={handleSubmit}>

                            <Field  name="startYear" label="Start Year" component={renderField} type="text"  validate={[ required, minYear1900, maxYear2019 ]}/>
                            <Field name="endYear" label="End Year" fullWidth component={renderField} type="text"  validate={[ required ]}/>
                            <Field name="type" label="Type" component={renderField} type="text"  validate={[ required ]}/>
                            <Field name="genre" label="Genre" component={renderField} type="text"  validate={[ required ]}/>
                            <Field name="imdbMin" label="Min IMDB Score" component={renderField} type="text"  validate={[ required ]}/>
                            <Field name="imdbMax" label="Max IMDB Score" component={renderField} type="text" validate={[ required ]}/>
                            <Button type='submit' variant='danger'style={{marginTop:'5px'}}>Search</Button>
                    </Form>
                </Col>
              
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         currentYear: state.currentYear,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
       
//     }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSearch);

export default reduxForm({
    form: 'advanced-search',

})(AdvancedSearch);
