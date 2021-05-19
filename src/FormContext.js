import {createContext, useState} from "react";

export const FormContext = createContext()

export const FormProvider = props => {
    const [data,setData] =useState({
        userData : {firstName: '', lastName: '', birthday: '',city:''},
        firstName: "",
        lastName: "",
        birthday: '',
        city: '',
        titleDisplay: '',
        formOneDisplay: '',
        formTwoDisplay: 'none',
        finalDisplay: 'none'
    })

        return (
            <FormContext.Provider value={[data,setData]}>
                {props.children}
            </FormContext.Provider>
        )
}