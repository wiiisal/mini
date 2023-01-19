export const initialState={
    basket:[],
    user: null,
};

 export default function reducer(state,action){
    
    console.log(action)
    switch(action.type){
        case"SET_USER":
        return{
            ...state,user:action.user
        }
        case 'add_to_basket':
            return{...state,
                basket:[...state.basket,action.product]
            }
            
            case 'remove_from_basket':
                return{state}
                
                default: return state;
    }
}