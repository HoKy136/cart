import {  ref,  onValue } from "firebase/database";
import {database} from '../Firebase/Firebase'
// async function fetchData() {
//     let response = await axios.get(`https://639af01231877e43d67c3261.mockapi.io/api/products`);
//     let products = await response.data;
//     return products;
//   }
  
async function FetchFb(){
   const getData = []
      const dbRef = database;
      const starCountRef = await ref(dbRef, `Products`);
      const getAwait = await onValue(starCountRef, (snapshot) => {
      getData.push(snapshot.val())
      });
  return getData
}
export default FetchFb