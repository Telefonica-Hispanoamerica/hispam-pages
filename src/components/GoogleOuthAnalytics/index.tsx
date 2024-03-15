import { useEffect, useState } from 'react'
import axios from "axios";

declare var google: { 
	accounts: {
		oauth2: any; 
		id: {
			prompt(): unknown; 
			initialize: (
				arg0: { 
					client_id: string; 
					callback: (response: any) => void; 
				}
			) => void; 
			renderButton: (
				arg0: HTMLElement, 
				arg1: { 
					theme: string; 
					size: string;
				}
			) => void; 
		}; 
	}; 
};

const GoogleOuthAnalytics = () => {

    const [ user, setUser ] = useState({
		name: "",
		picture: ""
	});

	const [ tokenClient, setTokenClient ] = useState<any>({});
	const [ tokenClientSearch, setTokenClientSearch ] = useState<any>({});

	const CLIENT_ID = "800509512985-bauracst77a2vi7o03rm4m52s1emm0t3.apps.googleusercontent.com";
	const PROPERTY_ID = "427375830";
	const API_KEY = "AIzaSyDAM_VNE30sxJlzFoLpUGIL62CvibcARV4"
	const SCOPES = "https://www.googleapis.com/auth/drive.file";
	const SCOPES_SEARCH = "https://www.googleapis.com/auth/webmasters";

	function handleCallbackResponse(response: any) {
		console.log("Encoded JWT ID token: " + response.credential)
		var base64Url = response.credential.split('.')[1];
		var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
			return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
		}).join(''));
		setUser(JSON.parse(jsonPayload));

		(document.getElementById("signDiv") as HTMLElement).hidden = true;
	}

	function handleSignOut(event:any) {
		setUser({name: "", picture: ""});
		(document.getElementById("signDiv") as HTMLElement).hidden = false;
	}

	function createDriveFile() {
		tokenClient.requestAccessToken();
	}

	function createReportSearchConsole() {
		tokenClientSearch.requestAccessToken();
	}

    useEffect(() => {

		//https://www.youtube.com/watch?v=roxC8SMs7HU
		google.accounts.id.initialize({
			client_id: CLIENT_ID,
			callback: handleCallbackResponse
		});

		google.accounts.id.renderButton(
			(document.getElementById("signDiv") as HTMLElement),
			{ theme: "outline", size: "large"}
		);

		google.accounts.id.prompt();

		//Apis google: https://www.youtube.com/watch?v=C0DUNy6RjNw
		
		setTokenClient(
			google.accounts.oauth2.initTokenClient({
				client_id: CLIENT_ID,
				scope: SCOPES,
				callback: (tokenResponse: any) => {
					console.log("tokenResponse", tokenResponse)
					//We now have access to a live token to use for ANY google API
					if(tokenResponse && tokenResponse.access_token) {
						//global headers
						const headers = {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${tokenResponse.access_token}`
						}						

						//runReport
						const postData = {
							"dateRanges": [
								{ 
									"startDate": "2024-02-01", 
									"endDate": "2024-02-15"
								}
							],
							"dimensions": [
								{ "name": "country" }
							],
							"metrics": [
								{ "name": "activeUsers" }
							]
						}
						axios.post(`https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:runReport`, postData, { headers })
						.then(response => {
							console.log('Response:', response.data);
						})
						.catch(error => {
							console.error('Error:', error);
						});

						//batchRunReports

						const postData1 = {
							"requests": [
								{
									"dimensions": [
										{
										  	name: "sessionSa360Keyword"
											// name: "country"
										}
									],
									"metrics": [
										{
										  	name:"totalUsers"
										}
									],
									"dateRanges": [
										{ 
											"startDate": "2024-02-01", 
											"endDate": "2024-02-15"
										}
									],
								}
							]
						}
						axios.post(`https://analyticsdata.googleapis.com/v1beta/properties/${PROPERTY_ID}:batchRunReports`, postData1, { headers })
						.then(response => {
							console.log('Response:', response.data);
						})
						.catch(error => {
							console.error('Error:', error);
						});
					}
				}
			})
		)

		setTokenClientSearch(
			google.accounts.oauth2.initTokenClient({
				client_id: CLIENT_ID,
				scope: SCOPES_SEARCH,
				callback: (tokenResponse: any) => {
					console.log("tokenResponse", tokenResponse)
					//We now have access to a live token to use for ANY google API
					if(tokenResponse && tokenResponse.access_token) {
						//global headers
						const headers = {
							'Content-Type': 'application/json',
							'Authorization': `Bearer ${tokenResponse.access_token}`,
							'Accept': 'application/json'
						}
						//Search Console
						
						const postData2 = {
							"startDate": "2024-02-01",
							"endDate": "2024-02-15",
							"dimensionFilterGroups":[
								{
									"filters":[
										{
											"dimension":"COUNTRY",
											"operator": "EQUALS",
											"expression": "FRA"
										}
									]
								}
							]
						}
						axios.post(`https://searchconsole.googleapis.com/webmasters/v3/sites/sc-domain%3Amaaaik.site/searchAnalytics/query?key=${API_KEY}`, postData2, { headers })
						.then(response => {
							console.log('Response:', response.data);
						})
						.catch(error => {
							console.error('Error:', error);
						});
					}
				}
			})
		)
			
	}, []);

    return (
        <>
            <div id="signDiv"></div>
            {
                user.name.length != 0 && <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            }
            { user &&
                <div>
                    <img src={user?.picture} />
                    <h3>{user?.name}</h3>
                    <input type="submit" onClick={createDriveFile} value="Create File"/>
                    <input type="submit" onClick={createReportSearchConsole} value="Report Search Console"/>
                </div>
            }
        </>
    )

}

export default GoogleOuthAnalytics;