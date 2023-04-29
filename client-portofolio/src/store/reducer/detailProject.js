
import { FETCH_DETAIL_PROJECT } from "../action/actionType";

const initialState ={
  detailProject:[]
};
const detailprojectReducer = (state = initialState, action)=>{
  console.log(action)
  switch (action.type) {
    case FETCH_DETAIL_PROJECT:
      return {
        ...state,
        detailProject: action.payload,
        
      };
    default:
      return state
  }
}
export default detailprojectReducer;