
var config1 = {
		"users": {
			"url": "https://reqres.in/api/users?page=2",
			"type": "get",
			"data": null
		},
		"users-single": {
			"url": "https://reqres.in/api/users/2",
			"type": "get",
			"data": null
		},
		"users-single-not-found": {
			"url": "https://reqres.in/api/users/23",
			"type": "get",
			"data": null
		},
		"unknown": {
			"url": "https://reqres.in/api/unknown",
			"type": "get",
			"data": null
		},
		"unknown-single": {
			"url": "https://reqres.in/api/unknown/2",
			"type": "get",
			"data": null
		},
		"unknown-single-not-found": {
			"url": "https://reqres.in/api/unknown/23",
			"type": "get",
			"data": null
		},
		"post": {
			"url": "https://reqres.in/api/users",
			"type": "post",
			"data": {
				"name": "morpheus",
				"job": "leader"
			}
		},
		"put": {
			"url": "https://reqres.in/api/users/2",
			"type": "put",
			"data": {
				"name": "morpheus",
				"job": "zion resident"
			}
		},
		"patch": {
			"url": "https://reqres.in/api/users/2",
			"type": "patch",
			"data": {
				"name": "morpheus",
				"job": "zion resident"
			}
		},
		"delete": {
			"url": "https://reqres.in/api/users/2",
			"type": "delete",
			"data": null
		},
		"register-successful": {
			"url": "https://reqres.in/api/register",
			"type": "post",
			"data": {
				"email": "sydney@fife",
				"password": "pistol"
			}
		},
		"register-unsuccessful": {
			"url": "https://reqres.in/api/register",
			"type": "post",
			"data": {
				"email": "sydney@fife"
			}
		},
		"login-successful": {
			"url": "https://reqres.in/api/login",
			"type": "post",
			"data": {
				"email": "peter@klaven",
				"password": "cityslicka"
			}
		},
		"login-unsuccessful": {
			"url": "https://reqres.in/api/login",
			"type": "post",
			"data": {
				"email": "peter@klaven"
			}
		},
		"delay": {
			"url": "https://reqres.in/api/users?delay=3",
			"type": "get",
			"data": null
		}
	};

