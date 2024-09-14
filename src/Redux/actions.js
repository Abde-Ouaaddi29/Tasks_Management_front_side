import { ADD_TODO, FORGET_PASSWORD,  SET_AUTHENTICATE,  SET_REGISTER,  TOGGLE_TODO } from "./ActionsType"

export const ADDTODO = (data) => ({
    type: ADD_TODO,
    payload: data
});

export const TOGGLECHECKED = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {id}
    }
};

// export const REMOVETODO = (id) => {
//     return {
//         type: REMOVE_TODO,
//         payload: {id}
//     }
// };

export const AUTHENTICATE = (email, password, isValid) => ({
    type: SET_AUTHENTICATE,
    payload: { email, password, isValid }
});

export const REGISTER = (name, email, password, valid) => {
     return {
       type: SET_REGISTER,
       payload: {name, email, password, valid}
     }
}

// export const SETTOKEN = (data) => {
//     return {
//         type:SET_TOKEN,
//         payload:data
//     }
// }

export const FORGETPASSOWRD = (email) => {
    return {
        type: FORGET_PASSWORD,
        payload: {email}
    }
}