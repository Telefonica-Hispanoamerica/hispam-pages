import React, { useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
// import { PROPERTY_ID, CLIENT_ID } from '../from_somewhere';

const GoogleAnalyticsApp = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const propertyId = '427375830';
    const startDate = '2024-02-13';
    const endDate = '2024-02-13';    
    

    const googleLogin = useGoogleLogin( {                
        clientId: '762464612635-dmp5i555cvn8rcenf3v32d5cf6kg5ou5.apps.googleusercontent.com',
        responseType: 'token',
        onSuccess: async ( tokenResponse ) => {
            const accessToken = tokenResponse?.access_token;
            if ( accessToken ) {                
                fetchData(accessToken)
            }
        },
        onError: ( error ) => {
            console.error( error );
        }
    } );

	const fetchData = async ( accessToken ) => {
		try {
		//   const metrics = [{ name: 'activeUsers' }];
		//   const dimensions = [{ name: 'country' }];
		const metrics = [
			{
				name: "activeUsers"
			},
			{
				name: "newUsers"
			},
			{
				name: "totalRevenue"
			}
		];
		const dimensions = [{ name: 'date' }];

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const requestBody = {
			dateRanges: [{ startDate, endDate }],
			metrics,
			dimensions,
		};

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const headers = {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${ accessToken }`,
		};

		// const apiResponse = await axios.post(
		//     `https://analyticsdata.googleapis.com/v1beta/properties/${ propertyId }:runReport`,
		//     // requestBody,
		//     // { headers }
		//     {            
		//         dateRanges: [
		//             { 
		//                 startDate: "2023-09-01", 
		//                 endDate: "2023-09-15" 
		//             }
		//         ],
		//         dimensions: [
		//             { 
		//                 name: "country" 
		//             }
		//         ],
		//         metrics: [
		//             { 
		//                 name: "activeUsers" 
		//             }
		//         ]            
		//     },
		//     {
		//         'Content-Type': 'application/json',
		//         Authorization: `Bearer ${ accessToken }`,
		//     }
		// );

		// const apiResponse = await axios.post(
		//     `https://analyticsdata.googleapis.com/v1beta/properties/${ propertyId }:runReport`,
		//     requestBody,
		//     { headers }
		//   );		

		const apiResponse = await axios(
			{
				method: 'post',
				url: `https://analyticsdata.googleapis.com/v1beta/properties/${ propertyId }:runReport`,
				// url: `https://www.googleapis.com/analytics/v3`,
				// url: `https://analyticsreporting.googleapis.com/v4/reports:batchGet`,
				data: {            
					dateRanges: [
						{ 
							startDate: "2023-09-01", 
							endDate: "2023-09-15" 
						}
					],
					dimensions: [
						{ 
							name: "country" 
						}
					],
					metrics: [
						{ 
							name: "activeUsers" 
						}
					]            
				},
				headers: {
					// 'Content-Type': 'application/json',
					// Authorization: `Bearer ${ accessToken }`,
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Headers":	"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
					Authorization: `Bearer ${ accessToken }`,
					// post: {
					// 	"Content-Type": "application/json",
					// 	"Access-Control-Allow-Origin": "*",
					// 	"Access-Control-Allow-Headers":	"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
					// 	Authorization: `Bearer ${ accessToken }`,
					// }
				}
			}
		);
			
			// const apiResponse = await axios(
			// 	{
			// 		method: 'post',
			// 		url: `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
			// 		// url: `https://analyticsreporting.googleapis.com/v4/reports:batchGet`,
			// 		data: {            
			// 			dateRanges: [
			// 				{ 
			// 					startDate: "2023-09-01", 
			// 					endDate: "2023-09-15" 
			// 				}
			// 			],
			// 			dimensions: [
			// 				{ 
			// 					name: "country" 
			// 				}
			// 			],
			// 			metrics: [
			// 				{ 
			// 					name: "activeUsers" 
			// 				}
			// 			]            
			// 		},
			// 		headers: {
			// 			// 'Content-Type': 'application/json',
			// 			Authorization: `Bearer ${ accessToken }`,
			// 		}
			// 	}
			// );
			
			const responseData = apiResponse.data;
			console.log( "responseData", responseData );
		} catch ( error ) {
		console.error( error );
		}
	};

	useEffect( () => {
		if ( googleLogin.tokenResponse?.access_token ) {
			fetchData( googleLogin.tokenResponse.access_token );
		}
	}, [googleLogin.tokenResponse] );

	return (
		<div className="App">
			<h1>Google Analytics Report</h1>
			<button onClick={ googleLogin }>Check Analytics</button>
		</div>
	);
};

export default GoogleAnalyticsApp;