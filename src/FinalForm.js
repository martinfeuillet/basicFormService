import React, {useContext} from 'react';
import {FormContext} from "./FormContext";
import {Button,Typography} from "@material-ui/core";


const FinalForm = () => {
    const [data,setData] =useContext(FormContext)
    const finalPerson = data.userData

    function reset() {
        setData({userData : {firstName: '', lastName: '', birthday: '',city:''},
            firstName: "",
            lastName: "",
            birthday: '',
            city: '',
            titleDisplay: '',
            formOneDisplay: '',
            formTwoDisplay: 'none',
            finalDisplay: 'none'})
    }

    function getMyAge() {
        const finalAge = parseInt(finalPerson.birthday)
        let anneactu = new Date().getFullYear()
        let age = anneactu - finalAge

        if (isNaN(finalAge)){
            return "impossible to know how old are you"
        }else if ((anneactu-finalAge) > 120 ){
            return "impossible to know how old are you, you are to old"
        }else {
            return "you are " + age
        }
    }

    return (
        <div style={{display :data.finalDisplay, marginTop : 50, backgroundColor :'transparent'}}>
                <Typography variant='h4' component='h1'>
                    hello {finalPerson.firstName} {finalPerson.lastName}
                </Typography>
                <Typography variant='h5' component='p'>
                    {finalPerson.city ? 'you are from ' + finalPerson.city : "i can't tell you where you are" }
                </Typography>
                <Typography variant='h5' component='p'>
                    {getMyAge()}
                </Typography>
                <Button onClick={reset} variant='contained' color='primary'>reset</Button>
        </div>
    );
};

export default FinalForm;