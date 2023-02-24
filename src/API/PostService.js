import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);
const catalogRef = collection(db, "catalog")

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 1500);
    });
}
export default class PostService {
    static async getAll() {
        let arr = [];
        // await wait();
        const querySnapshot = await getDocs(catalogRef);
        querySnapshot.forEach((doc) => {
            arr.push(doc.data().product)
        });
        return arr;
    }
}