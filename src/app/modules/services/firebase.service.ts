import { Injectable } from '@angular/core';

import { UniversalMairieSdkModule } from '../universal-mairie-sdk/universal-mairie-sdk.module';

import * as Firebase from 'firebase';

let universal_firebase_config;

@Injectable()
export class FirebaseService {
  public storage: Firebase.storage.Storage;

  constructor() {
    universal_firebase_config = {
      apiKey: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_API_KEY,
      authDomain: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_AUTH_DOMAIN,
      databaseURL: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_DATABASE_URL,
      storageBucket: UniversalMairieSdkModule.UNIVERSAL_CONFIG.FIREBASE_STORAGE_BUCKET
    };

    if (!Firebase.apps.length) {
      Firebase.initializeApp(universal_firebase_config);
    }

    this.storage = Firebase.storage();
  }

  uploadText(base64Image): Firebase.storage.UploadTask {
    var testRef = this.storage.ref('test/test.txt');
    return testRef.putString(base64Image, 'base64');
  }

  uploadImage(name, folder, base64Image): Firebase.storage.UploadTask {
    var testRef = this.storage.ref(folder + '/' + name);
    return testRef.putString(base64Image, 'base64');
  }

  getImage(ref): Promise<any> {
    var imageRef = this.storage.ref(ref);
    return imageRef.getDownloadURL();
  }

  getNewFileName(name): string {
    let date = new Date();

    return name + '-' + date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + '-' + date.getHours() + ':' + date.getMinutes();
  }
}
