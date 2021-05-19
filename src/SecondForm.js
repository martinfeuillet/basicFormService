import React, {useContext, useState} from 'react';
import {Button, Input, InputLabel, makeStyles} from "@material-ui/core";
import {FormContext} from "./FormContext";

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

const SecondForm = () => {
    const classes = useStyles()
    const [birthday, setBirthday] = useState('')
    const [city, setCity] = useState('')
    const [data,setData] =useContext(FormContext)

    function handleSubmit(e) {
        e.preventDefault();
        let newDataTwo = data.userData
        newDataTwo.birthday = birthday
        newDataTwo.city = city
        setData({userData:newDataTwo, birthday : '', city : '', formOneDisplay : 'none', formTwoDisplay: 'none',finalDisplay: '', titleDisplay : 'none'})
    }

    function handleBirthdayChange(e) {
        setBirthday(e.target.value)
    }

    function handleCityChange(e) {
        setCity(e.target.value)
    }



    return (
        <div style={{display : data.formTwoDisplay}}>
                <form onSubmit={handleSubmit}>
                <InputLabel htmlFor='birthday'>Date of birth</InputLabel>
                <Input id='birthday' type='text' className={classes.input}  name='birthday' value={birthday} onChange={handleBirthdayChange} />
                <InputLabel htmlFor='city'>Where do you leave</InputLabel>
                <Input id='city' type='text' name='city' className={classes.input} value={city} onChange={handleCityChange} />
                <Button type='submit' variant='contained' color='primary' className={classes.button}>Submit</Button>
                </form>
        </div>
    );
};

export default SecondForm;