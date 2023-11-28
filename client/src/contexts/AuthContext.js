import React, { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext({});

const initialState = {
    token: null,
    userName: 'Guest',
};

const SET_TOKEN = 'SET_TOKEN';
const SET_USER_NAME = 'SET_USER_NAME';

const authReducer = (state, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return { ...state, token: action.payload };
        case SET_USER_NAME:
            return { ...state, userName: action.payload };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState, () => {});

    const setToken = (token) => {
        dispatch({ type: SET_TOKEN, payload: token });
    };

    const setUserName = (userName) => {
        dispatch({ type: SET_USER_NAME, payload: userName });
    };

    return (
        <AuthContext.Provider value={{ state, setToken, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
