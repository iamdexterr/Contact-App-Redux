const initialState = [{
    id: 0,
    name: 'Dinesh Rawat',
    number : 234242334,
    email : 'iamdinesh@gmail.com'
},
{
    id: 1,
    name: 'Aman singh',
    number : 234242334,
    email : 'god@gmail.com'

},
{
    id: 2,
    name: 'Shivani sharma',
    number : 234242334,
    email : 'shivani@gmail.com'
}

];

const contactReducer = (state= initialState,action)=>{
    switch(action.type){

        case "ADD_CONTACT" :
            state = [...state, action.payload];
            return state;

        case 'UPDATE_CONTACT':
            const updateState = state.map(contact => 
                contact.id === action.payload.id ? action.payload : contact);
                state = updateState;
                return state;      
            
        case 'DELETE_CONTACT':  
            const newContacts = state.filter(contact=> contact.id!==action.payload);
            state= newContacts
            return state;
        default: 
        return state;
    };
}

export default contactReducer;