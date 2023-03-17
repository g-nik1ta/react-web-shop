import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);
const catalogRef = collection(db, "catalog");
const feedbackRef = collection(db, "feedback");

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 25000);
    });
}

export default class PostService {
    static async getAll() {
        let arr = [];
        const querySnapshot = await getDocs(catalogRef);
        querySnapshot.forEach((doc) => {
            arr.push(doc.data().product)
        });
        return arr;
    }

    static async sendForm(formValues) {
        await setDoc(doc(feedbackRef, String(formValues.id)), {
            id: formValues.id,
            name: formValues.name,
            telephone: formValues.telephone,
            email: formValues.email,
            message: formValues.message,
            isRead: false
        })
    }
}