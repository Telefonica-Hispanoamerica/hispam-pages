const initAuth = () => {
    return window.gapi.auth2.init({
        client_id: "762464612635-dmp5i555cvn8rcenf3v32d5cf6kg5ou5.apps.googleusercontent.com", //paste your client ID here
        scope: "https://www.googleapis.com/auth/analytics.readonly",
    });
};

export const checkSignedIn = () => {
    return new Promise((resolve, reject) => {
        initAuth() //calls the previous function
        .then(() => {
            const auth = window.gapi.auth2.getAuthInstance(); //returns the GoogleAuth object
            resolve(auth.isSignedIn.get()); //returns whether the current user is currently signed in
        })
        .catch((error) => {
            reject(error);
        });
    });
};

    export const renderButton = () => {
        window.gapi.signin2.render("signin-button", {
            scope: "profile email",
            width: 240,
            height: 50,
            longtitle: true,
            theme: "dark",
            onsuccess: onSuccess,
            onfailure: onFailure,
        });
    };
  
    const onSuccess = (googleUser) => {
            console.log("Logged in as: " + googleUser.getBasicProfile().getName());
    };
    
    const onFailure = (error) => {
        console.error(error);
    };