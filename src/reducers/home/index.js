
const home = ( state=0, action )=>{
    switch(action.type){
        case 'HELLO':
            return state + 1
        default:
            return state
    }
}

export default home
