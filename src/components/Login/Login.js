/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import Button from '../UI/Button';
import useLogin from './useLogin';

function Login() {
    const [text, setText] = useState('');
    const { login } = useLogin();
    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 90vh;
                padding: 1rem;
            `}>
            <form
                onSubmit={(e) => e.preventDefault()}
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: 0 auto;
                    min-height: 350px;
                    max-width: 460px;
                    width: 100%;
                    text-align: center;
                    align-items: center;
                    padding: 2rem;
                `}>
                    <h1>LogIn</h1>
                
                <input
                    placeholder="Username"
                    type="text"
                    value={text}
                    name="text"
                    onChange={handleChange}
                    required
                />
                <input
                    placeholder="Password"
                    type="text"
                    required
                />
                <Button
                    handler={() => login(text)}
                    bgColor="var(--accent)"
                    size="small">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;
