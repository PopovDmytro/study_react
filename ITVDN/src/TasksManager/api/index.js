const CLIENT_ID = '834472686534-cjkf1tgfp9onae6iucamidact9t2jbhu.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
	authorize(params) {
		return new Promise((resolve, reject) => {
			gapi.auth.authorize(
				{
					'client_id': CLIENT_ID,
					'scope' : SCOPES,
					'immediate' : params.immediate,
					'cookie_policy': 'single_host_origin'
				},
				authResult => {
					console.log(authResult);
				}
			);
		})
	}
}