/*

 For usage with a small number of certificates, there's no need to use a database.
 The certificates dictionary contains all the certs on the system.

 !IMPORTANT: For larger uses, implementation with a database is a must.
 Implementation with Firebase and MongoDB coming soon!

*/

// List of certificates to be managed by the system
let certificates = {
	"wYgaaTEsQO": {
		type: "Volunteering Certificate",
		recipient: "First Name",
		date: "1 January 2020",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus urna at risus tempor faucibus. Praesent nibh erat, gravida id tristique ac, pellentesque sit amet arcu. Quisque nisi nunc, aliquet quis lorem a, blandit fringilla dolor. Ut venenatis metus laoreet porta hendrerit. Aenean a fringilla arcu. Aenean consectetur leo eget lectus molestie, eu dignissim arcu tempus. Maecenas sit amet interdum libero. Mauris semper vehicula tincidunt. Nunc egestas ut enim eget cursus",
		signature: "Signature"
	}
}

// Functiont to get the certificate by id and return it
let getCertificate = (id) => {
	return certificates[id];
}

export default getCertificate;
