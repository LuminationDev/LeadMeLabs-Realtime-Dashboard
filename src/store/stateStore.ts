import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref, onValue, child, set, off } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import { getAuth } from "firebase/auth";
import type { User } from 'firebase/auth'
import type { QaChecks } from "@/interfaces/QaCheck.ts";
import type { Notification, PreviewImage, NotificationData, AcknowledgementData } from "@/interfaces/notification.ts";
import type { LabsData } from "@/types/Data.ts";

const firebaseConfig = {
    apiKey: "AIzaSyBn_8I5cTvWiPfeTnkKcHw0CpXbuLs716M", //localhost only API key
    authDomain: "leadme-labs.firebaseapp.com",
    databaseURL: "https://leadme-labs-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "leadme-labs",
    storageBucket: "leadme-labs.appspot.com",
    messagingSenderId: "676443233497",
    appId: "1:676443233497:web:006cb9cec48d3ba53972c8",
    measurementId: "G-8NZCSW9ZNB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const useStateStore = defineStore({
    id: 'state',
    state: () => ({
        auth: getAuth(),
        user: null as User | null,
        database: null as Database | null,
        labsData: null as LabsData | null,
        qaData: null as QaChecks | null,
        notificationData: null as NotificationData | null,
        acknowledgementData: null as AcknowledgementData | null,
        previewImages: [] as PreviewImage[],
        downloadURLs: [] as string[],
    }),
    actions: {
        /**
         * Listen for changes in the firebase auth, this occurs when a user logs in or out. On log in, set up the
         * necessary listeners using the setupConnection.
         */
        initializeAuth() {
            this.auth.onAuthStateChanged((user) => {
                this.user = user;
                if (user) {
                    this.setupConnection();
                }
            });
        },

        /**
         * Collect the database reference and attach the required listeners.
         */
        setupConnection: function () {
            if (this.database) {
                return;
            }

            this.database = getDatabase();
            const dbRef = ref(getDatabase());

            //Listen for changes in the Lab data
            const labRef = child(dbRef, 'lab_realtime_data');
            onValue(labRef, (snapshot) => {
                if (snapshot.exists()) {
                    this.labsData = snapshot.val();
                } else {
                    console.log('No data available');
                    this.labsData = null;
                }
            }, (error) => {
                console.error('Error listening for data changes:', error);
            });

            //Listen for changes in the QA data
            const qaRef = child(dbRef, 'lab_qa_checks');
            onValue(qaRef, (snapshot) => {
                if (snapshot.exists()) {
                    this.qaData = snapshot.val();
                } else {
                    console.log('No data available');
                    this.qaData = null;
                }
            }, (error) => {
                console.error('Error listening for data changes:', error);
            });

            //Listen for changes in the Notification data
            const notificationRef = child(dbRef, 'lab_notifications/notifications');
            onValue(notificationRef, (snapshot) => {
                if (snapshot.exists()) {
                    this.notificationData = snapshot.val();
                } else {
                    console.log('No data available');
                    this.notificationData = null;
                }
            }, (error) => {
                console.error('Error listening for data changes:', error);
            });

            //Listen for changes in the Acknowledgements
            const acknowledgementRef = child(dbRef, 'lab_notifications/acknowledgements');
            onValue(acknowledgementRef, (snapshot) => {
                if (snapshot.exists()) {
                    this.acknowledgementData = snapshot.val();
                } else {
                    console.log('No data available');
                    this.acknowledgementData = null;
                }
            }, (error) => {
                console.error('Error listening for data changes:', error);
            });
        },

        /**
         * Uploads notification data to the Firebase Realtime Database.
         *
         * @param {String} key - A UUID to store the data against.
         * @param {Notification} data - The notification data to be uploaded.
         * @returns {Promise<string>} - A promise that resolves to an empty string on success or an error message on failure.
         */
        async uploadNotificationData(key: string, data: Notification): Promise<string> {
            const newNotificationRef = ref(getDatabase(), `lab_notifications/notifications/${key}`);

            try {
                await set(newNotificationRef, data);
                console.log('Data uploaded successfully');
                this.downloadURLs = []; // Reset after each upload
                return ""; // Return the generated UUID
            } catch (error: any) {
                console.error('Error uploading data:', error);
                return error.toString(); // Ensure you return a string
            }
        },

        /**
         * Uploads multiple images to a specified folder in Firebase Storage.
         *
         * @param {string} folder - The folder path where images will be uploaded.
         * @returns Promise<void> - A promise that resolves when all images are uploaded.
         */
        async uploadNotificationImage(folder: string) {
            if (this.previewImages.length === 0) {
                alert('No files selected');
                return;
            }

            // Extract the files into a new array
            const files = this.previewImages.map(image => image.file);
            const storage = getStorage();

            this.downloadURLs = [];
            for (const file of files) {
                const fileRef = storageRef(storage, `Notifications/${folder}/${file.name}`);
                try {
                    const snapshot = await uploadBytes(fileRef, file);
                    const url: string = await getDownloadURL(snapshot.ref);
                    this.downloadURLs.push(url);
                    console.log('File uploaded successfully:', url);
                } catch (error) {
                    console.error('Error uploading file:', error);
                }
            }
        },

        /**
         * Deletes notification data from the Firebase Realtime Database.
         *
         * @param {string} firebaseKey - The auto generated key given to the entry by firebase.
         * @returns Promise<string> - A promise that resolves to an empty string on success or an error message on failure.
         */
        async deleteNotificationData(firebaseKey: string|number): Promise<string> {
            const dbRef = ref(getDatabase(), `lab_notifications/notifications/${firebaseKey}`);
            return await set(dbRef, null)
                .then(async () => {
                    console.log('Data deleted successfully');
                    await this.deleteNotificationImageFolder(firebaseKey);
                    return "";
                })
                .catch((error) => {
                    console.error('Error deleting data:', error);
                    return error;
                });
        },

        /**
         * Deletes all files within a specified folder in Firebase Storage.
         *
         * @param {string} folder - The folder path to be deleted.
         * @returns {Promise<void>} - A promise that resolves when all files in the folder are deleted.
         */
        async deleteNotificationImageFolder(folder: string|number): Promise<void> {
            const storage = getStorage();
            const folderRef = storageRef(storage, `Notifications/${folder}`);

            try {
                const listResults = await listAll(folderRef);
                if (listResults.items.length > 0) {
                    const deletePromises = listResults.items.map(itemRef => deleteObject(itemRef));
                    await Promise.all(deletePromises);
                    console.log('All files in the folder have been deleted successfully');
                } else {
                    console.log('No files to be deleted');
                }
            } catch (error) {
                console.error('Error deleting folder:', error);
            }
        },

        /**
         * Reset the images array, ready for the next notification.
         */
        resetPreviewImages(): void {
            this.previewImages = [];
        },

        /**
         * Remove any active listeners before signing the current user out of the session.
         */
        logout() {
            const dbRef = ref(getDatabase());
            //Remove any current listeners
            const labRef = child(dbRef, 'lab_realtime_data');
            const qaRef = child(dbRef, 'lab_qa_checks');
            const notificationRef = child(dbRef, 'lab_notifications');

            off(labRef);
            off(qaRef);
            off(notificationRef);

            this.auth.signOut().then(() => {
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    getters: {
        loggedIn(state) {
            return !!(state.user && state.user.email);
        },

        getPreviewImages(state) {
            return state.previewImages;
        }
    }
});
