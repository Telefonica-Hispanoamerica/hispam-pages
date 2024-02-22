import { GoogleLogin } from "react-google-login";

const clientId2 = "800509512985-bauracst77a2vi7o03rm4m52s1emm0t3.apps.googleusercontent.com";

function ButtonLogin() {

    const onSuccess = (response: any) => {
		console.log("ONSUCCESS", response.profileObj);
	}

	const onFailure = (res: any) => {
		console.log("Something went wrong", res)
	}

    return (
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId2}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                disabled={false}
            />  
        </div>      
    )
}

export default ButtonLogin;