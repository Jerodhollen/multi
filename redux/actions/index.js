// Make call to fetch user, save user, etc.
import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase/compat/app'

export function fetchUser() {
    return ((dispatch) => {
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                console.log(snapshot.data())
                dispatch({ type: USER_STATE_CHANGE, currentUser: snapshot.data()
                })
            }else {
                console.log('does not exist')
            }
        })
    })
}