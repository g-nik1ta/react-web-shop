import { collection, doc, getDocs, getFirestore, query, setDoc, where } from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);
const catalogRef = collection(db, "catalog");
const feedbackRef = collection(db, "feedback");
const authUsersRef = collection(db, "authUsers");
const userRef = collection(db, "authUsers");
const categoryRef = collection(db, "category");

function wait() {
    return new Promise(resolve => {
        setTimeout(resolve, 10000);
    });
}

export default class PostService {
    static async getAllProducts() {
        let arr = [];
        const querySnapshot = await getDocs(catalogRef);
        querySnapshot.forEach((doc) => {
            arr.push(doc.data().product)
        });
        return arr;
    }

    static async sendFeedbackForm(formValues) {
        await setDoc(doc(feedbackRef, String(formValues.id)), {
            id: formValues.id,
            name: formValues.name,
            telephone: formValues.telephone,
            email: formValues.email,
            message: formValues.message,
            isRead: false
        })
    }

    static async sendRegisterForm(formValues) {
        await setDoc(doc(authUsersRef, String(formValues.id)), {
            id: formValues.id,
            email: formValues.email,
            name: formValues.name,
            surname: formValues.surname,
            telephone: formValues.telephone,
        })
    }

    static async getLoginUser(email) {
        let arr = [];
        const q = query(userRef, where("email", "==", email.trim()));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        return arr[0];
    }

    static async getCategory() {
        let arr = [];
        const querySnapshot = await getDocs(categoryRef);
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        return arr;
    }
}