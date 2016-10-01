var helper = require('sendgrid').mail;

module.exports = function (to_in, subject_in, content_in) {

	var from_email = new helper.Email('noreply@rider.n1z.pt');
	var to_email = new helper.Email(to_in);
	var content = new helper.Content('text/plain', content_in);
	var mail = new helper.Mail(from_email, subject_in, to_email, content);
	 
	var sg = require('sendgrid')('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');
	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON(),
	});
	 
	sg.API(request, function(error, response) {
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});
}
