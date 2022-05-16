import { SIDE_BAR , SET_URL , SET_LI} from "../actions"

const initialState = { 
    sideBar: false,
    url: "/",
    li: "Destacado"
}

export default function reducer(state = initialState , action : any){ 
    switch(action.type){ 
        case SIDE_BAR: {
            return { ...state , sideBar: action.payload}
        }
        case SET_URL: { 
            return { ...state , url: action.payload}
        }
        case SET_LI: {
            return { ...state , li: action.payload}
        }
        default: 
        return state
    }
 }