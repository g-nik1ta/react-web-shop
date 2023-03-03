import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { app } from '../firebase';

const db = getFirestore(app);
const catalogRef = collection(db, "catalog");
const storage = getStorage(app);

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

    static async getAllImage(limitedProductsTitles) {
        let response = [];

        if (limitedProductsTitles) {
            response = await Promise.all(limitedProductsTitles.map(async (folderName) => {
                const urls = { mini: [], normal: [] };

                const folderRefNormal = ref(storage, `assets/catalog/${folderName}/normal`);
                const folderRefMini = ref(storage, `assets/catalog/${folderName}/mini`);

                const itemsMini = await listAll(folderRefMini);
                const itemsNormal = await listAll(folderRefNormal);

                const miniUrls = await Promise.all(itemsMini.items.map(async (item) => {
                    const url = await getDownloadURL(item);
                    return { urlName: item.name.split('.jp')[0], url }
                }))

                const normalUrls = await Promise.all(itemsNormal.items.map(async (item) => {
                    const url = await getDownloadURL(item);
                    return { urlName: item.name.split('.jp')[0], url };
                }))

                return ({ folderName, urls: { mini: miniUrls, normal: normalUrls } });

            }))
        }
        return response;
    }
}