# Open-Certificates
A platform built in React + Contentful to create custom, link-sharable, course or activity completion certificates similar to the ones released by Coursera and edX. The certificates are sharable with a URL of type example.com/AbcDeFG
The platform is built fully in React and uses Contentful to serve the certificates.


### About Contentful and React
Contentful is a "management platform to create, manage and publish content on any digital channel." Its user interface is similar to WordPress, and allows to create certificates easily. The free tier allows for up to 25.000 entries between certificates and sponsor logos.
The OpenCertificates platform, instead, is built in React. Therefore, it is easy to build and deploy on Netlify for free. This stack of React + Contentful, allows therefore to deploy a certificates platform in minutes, and at no cost for most users.

### Demo (Not running on Contentful for simplification)
Try out the demo at: https://open-certificate-demo.netlify.app/wYgaaTEsQO

### Pros of using this platform
Some pros of using this platform:
- Simple. It uses only React and contentful-react
- No need for a server, you can host unlimited for free on Netlify and serve up to 25.000 certificates through a free Contentful
- Set it up in just a few minutes

## Setup
To setup this project, you have to:
1. Configure your Contentful
2. Set the needed environment variables and logos
3. npm run build
4. Deploy your build on Netlify

### Setup: Contentful model
Each certificate must adhere to this Contentful model:
```javascript
{
	type: short text,
	recipient: short text,
	date: short text,
	description: long text,
	signature: short text,
	sponsor: media/image
}
```
The fields are used as in this example:
```javascript
{
	type: "Volunteering Certificate",
	recipient: "Full Name",
	date: "1 January 2020",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	signature: "Signature",
	sponsor: sponsor.png
}
```
- A type, recipient, date, description and signature to display in the info section or in the certificate area.
- A sponsor image (optional). If specificed, this logo will be displayed to the right of the orgLogo (defined in above in part 1).
- The date is simply treated as a string, therefore there is no need for specific formatting.

### Setup: Environment Variables

When you build this platform, you will need to define the following variables in your .env file.
```javascript
REACT_APP_ACCESS_TOKEN=API Token from Contentful
REACT_APP_SPACE_ID=Space id from Contentful
REACT_APP_CONTENT_TYPE=Content type from Contentful
REACT_APP_COMPANY_NAME=Your Organization Name
REACT_APP_COMPANY_LINK=Link to your Organization website
```
The .env file must be placed in the *frontend* folder.

### Setup: Changing the company logo
To change the company logo, simply place your own logo in the frontend/assets/img folder, and name it logo.png

### Setup: Deploy
The easiest way to use this project is probably to:
1. Connect a Netlify site to your copy of this repository
3. Deploy on Netlify
4. Each time you want to add a certificate, simply go to your Contentful, and add a new one

## Sharing a link
The link to each certificate will simply be of the format yoururl.com/abcdefgh, where the abcdefgh will simply be the ID of your content entry on Contentful.
