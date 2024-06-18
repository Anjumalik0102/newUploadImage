import React, { useState } from 'react'
import './myTest.css'
const MyTest = () => {
    const [showSignIn, setShowSignIn] = useState(true)
    const [transitinSignUpContent, settransitinSignUpContent] = useState(true)
    return (
        <div className='container'>
            <div className='mainDiv'>
                <div className={`${showSignIn ? 'form' : 'form hiddenForm'}`} >
                    heloo sign In

                </div>
                <div className={`${showSignIn ? 'hiddenForm form ' : 'form moveSignUp'} `}>
                    heloo sign Up
                </div>
                <div className={`${transitinSignUpContent ? 'signUpFormContent transitoinSignUpContentBack' : 'signUpFormContent transitoinSignUpContent'}`}>
                    {transitinSignUpContent ?
                        <div>
                            hello signUp
                        </div>
                        :
                        <div>
                            hello signIn
                        </div>
                    }
                    <button onClick={() => {
                        setShowSignIn(!showSignIn)
                        settransitinSignUpContent(!transitinSignUpContent)
                    }}>{transitinSignUpContent ? 'signUp' : 'login'}</button>
                </div>
            </div>
        </div>
    )
}
export default MyTest;