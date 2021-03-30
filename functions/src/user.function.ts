import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// admin.initializeApp();

const db = admin.firestore();

export const createUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onCreate((user) => {
    return db.collection('Users').doc(user.uid).create({
      name: user.displayName,
      email: user.email,
      id: user.uid,
    });
  });

export const deleteUser = functions
  .region('asia-northeast1')
  .auth.user()
  .onDelete((user) => {
    return db.collection('Users').doc(user.uid).delete();
  });
