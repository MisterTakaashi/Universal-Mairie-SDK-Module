import * as Firebase from 'firebase';
export declare class FirebaseService {
    storage: Firebase.storage.Storage;
    constructor();
    uploadText(base64Image: any): Firebase.storage.UploadTask;
    uploadImage(name: any, folder: any, base64Image: any): Firebase.storage.UploadTask;
    getImage(ref: any): Promise<any>;
    getNewFileName(name: any): string;
}
