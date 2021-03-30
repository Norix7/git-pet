import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

const expTable = [20, 50, 90, 140, 200, 270, 350, 440, 540];

const EARN_EXP = 10;

export const gitHook = functions
  .region('asia-northeast1')
  .https.onRequest(async (request, response) => {
    const pets = await db
      .collection('pets')
      .where('ownerGitHubId', '==', request.body.sender.id)
      .get();

    const pet = pets.docs[0].data();

    let level = 1;
    expTable.some((nextExp) => {
      if (pet.exp + EARN_EXP >= nextExp) {
        level++;
        return false;
      } else {
        return true;
      }
    });

    const increment = admin.firestore.FieldValue.increment(EARN_EXP);

    pets.docs.forEach((doc) =>
      doc.ref.update({
        exp: increment,
        level, //level: levelと書いても同じ。キー名と変数名が同じ場合は省略可能。
      })
    );

    response.send('success');
  });
