import React, { Component } from 'react'
const SignUpSuccess = (values, step) => {
    
    if ((step !== 11 && values.user_type == 'carer') ||
        (step !== 10 && values.user_type == 'participant') || 
        (values.user_type == '')) {
        return null
    }
        return (
            <div>
                {console.log(values)}
                <h1>Success!</h1>
            </div>
        )
    }

    export default SignUpSuccess;
