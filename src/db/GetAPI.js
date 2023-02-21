import {
  takeLatest,
  call,
  put
} from "redux-saga/effects";
import FetchFb from './API'
// import AppFb from '../Firebase/Firebase'
// function* loadData(){
//   try{
//     const data = yield new Promise((resovle) =>{
//       AppFb.child("Products").on("value" ,resovle)
//     });
//     if(data.val() !== null){
//       yield put({
//         type: "API_CALL_SUCCESS",
//         payload: data
//       })
//     }
//   }catch (error) {

//   }
// }

//  async function FetchFb(){
//   const dbRef = database;
//   const [letData , setLetData] = useState([])
//       const starCountRef = await ref(dbRef, `Products`);
//       onValue(starCountRef, (snapshot) => {
//         const dataFBB = snapshot.val();
//         setLetData(dataFBB)
//       });
//   return letData
// }
function* workerSaga() {
  const data = yield call(FetchFb);
  yield put({
    type: "API_CALL_SUCCESS",
    payload: data
  });
}

export function* mySaga(){
  yield takeLatest('GET_API',workerSaga);
}
