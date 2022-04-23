async function signup(e) {
    e.preventDefault()
    const email = document.querySelector('#signupEmail')
    const password = document.querySelector('#signupPassword')
    console.log(email.value, password);
    try {
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        await result.user.updateProfile({
            displayName: "User"
        })
        createUserCollection(result.user)
            // await result.user.sendEmailVerification()
        console.log(result)
    } catch (err) {
        console.log(err)
        document.getElementsByClassName('message').value = err.message
        M.toast({ html: err.message, classes: "red" })
    }
    email.value = ""
    password.value = ""

}

async function login(e) {
    e.preventDefault()
    const email = document.querySelector('#loginEmail')
    const password = document.querySelector('#loginPassword')

    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        console.log(result.user.email)
        console.log(result)

    } catch (err) {
        console.log(err)
        document.getElementById('login_message').value = "asa"
    }
    email.value = ""
    password.value = ""

}

function createUserCollection(user) {
    firebase.firestore().collection('users')
        .doc(user.uid)
        .set({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            phone: "",
            specialty: "",
            portfolioUrl: "",
            experience: ""
        })
}

//  async function login(e){
//     e.preventDefault()
//     const email  = document.querySelector('#loginEmail')
//     const password  = document.querySelector('#loginPassword')

//     try{
//       const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//       document.getElementById('login_message').value=result.user.email
//      console.log(result)  
//     }catch(err){
//         console.log(err)
//      document.getElementById('login_message').value="asa"
//     }
//     email.value = ""
//     password.value = ""

// }