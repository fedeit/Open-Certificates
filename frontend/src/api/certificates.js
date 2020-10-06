/*

 For usage with a small number of certificates, there's no need to use a database.
 The certificates dictionary contains all the certs on the system.

 !IMPORTANT: For larger uses, implementation with a database is a must.
 Implementation with Firebase and MongoDB coming soon!

*/

// Get certificates from JSON file
import * as parsedJSON from '../data/certs.json';
//Get an Object of certs from the JSON content
const certificates = parsedJSON.default;
// Functiont to get the certificate by id and return it
let getCertificate = (id) => {
	return certificates[id];
}

export default getCertificate;
