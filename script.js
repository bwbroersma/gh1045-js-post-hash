var hash = document.location.hash;
if (hash.length > 1) {
  var input = document.getElementById("internetnl-mail-url");
  var email = hash.substr(1);
  var atOffset = email.lastIndexOf("@");
  if (atOffset > -1) {
    email = email.substr(atOffset);
  }
  // require a minimal length: single letter domain + dot + 2 letter tld = 4
  // if this requirement is not met, or an email template character { is found, redirect to internet.nl
  if (email.length > 3 && email.indexOf('{') == -1) {
    input.value = email;
    document.forms[0].submit();
  } else {
    location.href = 'https://internet.nl/';
  }
}
