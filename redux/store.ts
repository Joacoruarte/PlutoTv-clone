import { legacy_createStore as createStore, applyMiddleware } from "redux"
import { createWrapper } from "next-redux-wrapper"
import reducer from "./reducer"
import { composeWithDevTools} from "redux-devtools-extension"


const initStore = () => { 
   return createStore(reducer , composeWithDevTools(applyMiddleware()))
}
export const wrapper = createWrapper(initStore)