import { BASE_URL, FETCH_PROJECT } from "../action/actionType";

const initialState ={
  project:[]
};
const projectReducer = (state = initialState, action)=>{
  console.log(action)
  switch (action.type) {
    case FETCH_PROJECT:
      return {
        ...state,
        project: action.payload,
        
      };
    default:
      return state
  }
}
export default projectReducer;