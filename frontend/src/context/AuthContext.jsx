import { createContext, useReducer } from "react";

const initialState = {
    user: null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

export const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null,
            };

        case 'LOGIN_SUCCESS':
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('role', action.payload.role);
            return {
                user: action.payload.user,
                token: action.payload.token,
                role: action.payload.role,
            };

        case 'LOGOUT':
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            return {
                user: null,
                role: null,
                token: null,
            };

        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                role: state.role,
                dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
