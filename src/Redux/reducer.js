import { ADD_TODO, FORGET_PASSWORD, SET_AUTHENTICATE, SET_REGISTER, TOGGLE_TODO } from "./ActionsType";


const initialValues = {
    Todos:[],
    LOGIN:[],
    LOGUP:[],
    FORGETPASSWORD:''
} 


export default function ReducerTodos (state=initialValues, action) {


  switch(action.type){
    case ADD_TODO:
            return {
                ...state,
                Todos:action.payload
            };



    case TOGGLE_TODO:
     return {
            // Todos:[...state.Todos, { checked:false }],
            Todos: state.Todos.map((todo) => {
            return  todo.id === action.payload.id ? {...todo, checked:!todo.checked} : todo }),
      };

    // case REMOVE_TODO:
    //  return {
    //     Todos: state.Todos.filter((todo) => {  
    //     return todo.id !== action.payload.id 
    //     })
    // };

    case SET_AUTHENTICATE:
        return {
            ...state,
            LOGIN: [...state.LOGIN, { email: action.payload.email, password: action.payload.password, valid: action.payload.isValid }]
    };
   
   case SET_REGISTER:
    return {...state, 
        LOGUP:[...state.LOGUP, {name: action.payload.name, email:action.payload.email, password:action.payload.password}]
    };

    // case SET_TOKEN:
    //     return {...state,
    //       authenticated:action.payload
    //     }

    case FORGET_PASSWORD:
        return {...state,
            FORGETPASSWORD:action.payload.email
    };
       
           
    default:
        return state;
    }
}