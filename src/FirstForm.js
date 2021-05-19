import React, {useContext, useState} from 'react';
import {FormContext} from "./FormContext";
import {Button, Input, InputLabel, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    input:{
        display : "flex",
        justifyContent : "center",
        width : 400,
        marginBottom : 40,
        margin : '0 auto',
        background: 'transparent',
    },
    button:{
        width : 200,
        margin : '0 auto',
        display : 'block'
    }
})
const FirstForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [data,setData] =useContext(FormContext)
    const classes = useStyles()
    function handleSubmit(e) {
        e.preventDefault();
        let newDataOne = data.userData;
        newDataOne.firstName = firstName;
        newDataOne.lastName = lastName;
        setData({userData:newDataOne, firstName : '', lastName : '', formOneDisplay : 'none',formTwoDisplay:'', finalDisplay: 'none'})

    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    return (
        <div style={{display : data.formOneDisplay}}>
                        <form onSubmit={handleSubmit}>
                            <InputLabel htmlFor='firstName'>type your first name</InputLabel>
                            <Input id='firstName' type='text' className={classes.input}  name='firstName' value={firstName} onChange={handleFirstNameChange} required/>
                            <InputLabel htmlFor='lastName'>type your lastname</InputLabel>
                            <Input id='lastName' type='text' name='lastName' className={classes.input} value={lastName}  onChange={handleLastNameChange} required/>
                            <Button type='submit' variant='contained' color='primary' className={classes.button}>Submit</Button>
                        </form>
        </div>
    );
};

export default FirstForm;