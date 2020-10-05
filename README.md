# Open-Certificates
A platform built in React to create custom web course or activity completion certificates similar to the ones released by Coursera and EDx. The certificates are sharable with a URL of type example.com/AbcDeFG
The platform is built fully in React. Currently, it does not support databases, but the integrations for MongoDB and Firebase are coming soon.


### Usage details
1. The logo for the certificate can be changed from the variable orgLogo in Certificate.js
2. The navbar logo and brand name can be changed in the Navbar.js file by modifying the companyName and logo variables.
3. To create new certificates, add new certificates to the certificates variable in certificates.js

Each certificate object should have the following parameters:
```javascript
"wYgaaTEsQO": {
		type: "Volunteering Certificate",
		recipient: "First Name",
		date: "1 January 2020",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		signature: "Signature",
		sponsor: "assets/img/sponsor.png"
}
```
- An id (e.g. wYgaaTEsQO), used for retrieval of the certificate. The link to access it will be example.com/wYgaaTEsQO
- A type, recipient, date, description and signature to display in the info section or in the certificate area.
- A sponsor parameter (optional) containing the image href link. If specificed, this logo will be displayed to the right of the orgLogo (defined in part 1).
- The date is simply treated as a string, therefore there is no need for specific formatting.
