import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED
} from '../actions/types';

const INIT = { 
    email: '', 
    password: '',
    user: null,
    error: ''
};

export default (state = INIT, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS: 
            return { 
                ...state, 
                user: action.payload, 
                error: '' 
            };
        case LOGIN_USER_FAILED:
            return { 
                ...state, 
                error: 'Athentication Failed', 
                password: '' 
            };
        default:
        return state;
    }
};
