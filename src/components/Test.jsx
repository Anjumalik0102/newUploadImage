import React, { useState } from 'react'
import './test.css'

const Test = () => {
    const [transition, setTransition] = useState(false)
    const [formTransition, setFormTransition] = useState(false)
    const [name, setName] = useState('')
    const [nameErr, setNameErr] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordErr, setpasswordErr] = useState(false)


    const addTrasition = () => {
        setTransition(true)
        setFormTransition(true)
    }

    const removeTrasition = () => {
        setTransition(false)
        setFormTransition(false)
    }

    return (
        <>
            <div className={'mainDiv'}>
                <div className={'container'}>
                    <div className={transition ? `loginForm hiddenForm` : `loginForm loginFormTransition`}>
                        <div className={'formAnimation'}>
                            <div className='rightDiv'  >
                                <div className='form'>
                                    <h1>Sign in</h1>
                                    <label className='label' > Name </label>

                                    <input
                                        className='field'
                                        type="text"
                                        placeholder='Enter your name'
                                        name='name'
                                        value={name}
                                        onChange={(e) => { 
                                            setName(e.target.value) 
                                            setNameErr(false)
                                        }}
                                    />
                                    {nameErr ? <p>Name is required</p> : null}
                                    <label className='label' >Password </label>

                                    <input
                                        className='field'
                                        type="password"
                                        placeholder='Enter your password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => { 
                                            setPassword(e.target.value) 
                                            setpasswordErr(false)
                                        }}

                                    />
                                    {passwordErr ? <p>password is required</p> : null}

                                    <button className="button" onClick={() => {
                                        if (name === '') {
                                            setNameErr(true)
                                            return 0
                                        }
                                        if (password === '') {
                                            setpasswordErr(true)
                                            return 0
                                        }
                                    }}>Sign In</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={formTransition ? `signUpForm signUpFormTransition` : `signUpForm hiddenForm`}>
                        <div className={'formAnimation'}>
                            <div className='leftDiv'>
                                <div className='form'>
                                    <h1>Create Account</h1>
                                    <label className='label' > Name </label>

                                    <input
                                        className='field'
                                        type="text"
                                        placeholder='Enter your name'
                                        name='name'
                                    />

                                    <label className='label' >Email </label>
                                    <input
                                        className='field'
                                        type="email"
                                        placeholder='Enter your email'
                                        name='email'
                                    />
                                    <label className='label' >Password </label>

                                    <input
                                        className='field'
                                        type="password"
                                        placeholder='Enter your password'
                                        name='password'
                                    />
                                    <button className="button">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={transition ? `overlay overlayTransition` : `overlay overlayTransitionBack`}>
                        {
                            transition ?
                                <>
                                    <div className='leftDiv'>
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <button className="button" id="signUp"
                                            onClick={removeTrasition}
                                        >login</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className='leftDiv'>
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <button className="button" id="signUp"
                                            onClick={addTrasition}
                                        >Sign Up</button>
                                    </div>
                                </>
                        }

                    </div>


                </div>
            </div>

        </>
    )
}

export default Test