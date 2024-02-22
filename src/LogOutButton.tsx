import { GoogleLogout } from "react-google-login";

const clientId2 = "800509512985-bauracst77a2vi7o03rm4m52s1emm0t3.apps.googleusercontent.com";

function ButtonLogOut() {

    const onSuccess = () => {
		console.log("ONSUCCESS Logout");
	}

    return (
        <div id="signInButton">
            <GoogleLogout 
                clientId={clientId2}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                disabled={false}
            />  
        </div>      
    )
}

export default ButtonLogOut;