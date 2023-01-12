export const initialState={
    basket:[],
    user: null,
};

 export default function reducer(state,action){
    
    console.log(action)
    switch(action.type){
        case 'add_to_basket':
            return{...state,
                basket:[...state.basket,action.product]
            }
            
            case 'remove_from_basket':
                return{state}
                
                default: return state;
    }
}