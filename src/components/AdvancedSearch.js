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
const min = min => value => value && value < min ? `Min is ${min}` : undefined
const max = max => value => value && value > max ? `Max is ${max}` : undefined

const minYear1900 = min(1900)  
const maxYear2019 = max(2019)  
const minIMDB0 = min(0);
const maxIMDB10 = max(10);


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div style={{display:'flex', marginTop:'10px'}}>
      <label style={{width: '100px'}}>{label}</label>
      <div style={{display:'flex', flexDirection:'column'}}>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span style={{color: 'red'}}>{error}</span>) || (warning && <span style={{color: 'red'}}>{warning}</span>))}
      </div>
    </div>
  )

  const renderDropdownList = ({ input, label, data, valueField, textField }) => (
  <div style={{display:'flex', marginTop:'10px'}}>
    <label style={{width: '100px'}}>{label}</label>  
    <select style={{width: '180px'}} name="genre" {...input}>
        {data.map((v, key) => {
            return <option key={key} value={v.id}>{v.title}</option>;
        })}
    </select>
  </div>
)

let AdvancedSearch = (props) =>  {
    const {handleSubmit, pristine, reset, submitting} = props;
    return (
        <div> 
            
                <Col>
                <h6><strong>Advanced Search</strong></h6>
                <hr/>
                <Form onSubmit={handleSubmit}>
                            <Field  name="startYear" label="Start Year" component={renderField} type="text" validate={[ required, minYear1900, maxYear2019 ]}/>
                            <Field name="endYear" label="End Year" component={renderField} type="text"  validate={[ required, minYear1900, maxYear2019 ]}/>
                            <Field name="type" label="Type" component={renderDropdownList} data={ContentTypes} type="text"  validate={[ required ]}/>
                            <Field name="genre" label="Genre" component={renderDropdownList} data={Genres} type="text" validate={[ required ]}/>
                            <Field name="imdbMin" label="Min IMDB Score" component={renderField} type="text"  validate={[ required, minIMDB0, maxIMDB10 ]}/>
                            <Field name="imdbMax" label="Max IMDB Score" component={renderField} type="text" validate={[ required, minIMDB0, maxIMDB10 ]}/>
                            <hr/>
                            <Button type='submit' variant='danger'style={{marginTop:'5px'}}>Search</Button>
                    </Form>
                </Col>             
        </div>
    )
}

export default reduxForm({
    form: 'advanced-search',

})(AdvancedSearch);
