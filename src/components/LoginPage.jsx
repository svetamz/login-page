import React, { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate, Navigate } from 'react-router-dom';

export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'testuser' && password === 'testpassword123') {
            navigate('/table');
        } else {
            alert('Incorrect login or password. Please try again.');
        }
    }
    return (
        <ContentPage>
            <h2>Login</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label>Username:</label>
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label>Password:</label>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <button onClick={handleLogin} style={{ width: '200px', height: '40px', color: '#4b4b4b' }}>Login</button>
        </ContentPage>
    )
}

const ContentPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

const Input = styled.input`
    width: 200px;
    height: 20px;
    color: #4b4b4b;
    padding: 5px;
    margin-bottom: 10px;
`