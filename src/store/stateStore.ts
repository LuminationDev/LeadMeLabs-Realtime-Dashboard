import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";
import { Database, getDatabase, ref, onValue, child } from "firebase/database";
import { getAuth } from "firebase/auth";
import type { User } from 'firebase/auth'
import type { Station } from "@/types/Station";
import type { QaChecks } from "@/types/QaCheck";

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

//Lab data types
type LabsData = {
    [labName: string]: StationList
}
type StationList = {
    [stationId: number]: Station
}

export const useStateStore = defineStore({
    id: 'state',
    state: () => ({
        auth: getAuth(),
        user: null as User | null,
        labsData: null as LabsData | null,
        qaData: null as QaChecks | null,
        database: null as Database | null,
    }),
    actions: {
        initializeAuth() {
            this.auth.onAuthStateChanged((user) => {
                this.user = user;
                if (user) {
                    this.setupConnection();
                }
            });
        },
        setupConnection() {
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
        },
        logout() {
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
    }
});
