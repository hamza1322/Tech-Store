import {GET_ERRORS, CLEAR_ERRORS} from "../actions/types";

const initialState = {
    msg : {},
    status : null,
    id : null
};
export default function(state = initialState, action){
    switch(action.type){
        case GET_ERRORS:
            const res =  {
                msg : "Unknown Error",
                status: 500,
                id: null
            }
            try{
                const res = {
                    msg : action.paylod.msg,
                    status: action.paylod.status,
                    id: action.paylod.id
                }
                 
            }catch(error){
                const res =  {
                    msg : "Unknown Error",
                    status: 500,
                    id: null
                }
            }
            return res;
            
        case CLEAR_ERRORS:
            return {
                msg : {},
                status: null,
                id: null
            }
        default:
            return state;
    }
}