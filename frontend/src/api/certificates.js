let certificates = {
	"wYgaaTEsQO": {
		type: "Volunteering Certificate",
		recipient: "First Name",
		date: "1 January 2020",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus urna at risus tempor faucibus. Praesent nibh erat, gravida id tristique ac, pellentesque sit amet arcu. Quisque nisi nunc, aliquet quis lorem a, blandit fringilla dolor. Ut venenatis metus laoreet porta hendrerit. Aenean a fringilla arcu. Aenean consectetur leo eget lectus molestie, eu dignissim arcu tempus. Maecenas sit amet interdum libero. Mauris semper vehicula tincidunt. Nunc egestas ut enim eget cursus",
		signature: "Signature"
	}
}

let getCertificate = (id) => {
	return certificates[id];
}

export default getCertificate;