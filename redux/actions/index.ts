
export const SIDE_BAR = "SIDE_BAR"
export const SET_URL = "SET_URL"
export const SET_LI = "SET_LI"

export const handleShowSideBar = (data : boolean) => { 
    return { type: SIDE_BAR , payload: data}
}
export const setUrl = (url : string) => { 
    return { type: SET_URL , payload: url}
}
export const setSelectLi = (value : string) => { 
    return { type: SET_LI , payload: value}
}