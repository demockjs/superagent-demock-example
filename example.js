var request = require('superagent'),
	superagentDemock = require('superagent-demock');

superagentDemock(request);

request('api/foo/index.json').then(function (response) {
	console.log(response.body);
});

request.post('api/foo/index.json').then(function (response) {
	console.log(response.body);
});