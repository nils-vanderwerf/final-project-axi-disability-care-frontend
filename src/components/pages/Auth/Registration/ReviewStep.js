import React, { Component } from 'react'

const SignUpSuccess = ({ step, values }) => {
    if ((step !== 10 && values.user_type == 'carer') ||
        (step !== 9 && values.user_type == 'participant') ||
        (values.user_type == '')) {
        console.log(`Step: ${values.step}`)
        return null
    }
    return (
        <div>
            {console.log(step)}
            <h1>Review</h1>
        </div>
    )
}

export default SignUpSuccess
