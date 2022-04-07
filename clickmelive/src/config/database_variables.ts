export default {
	uri: process.env.MONGODB_URI || '',
	name: process.env.MONGODB_DBNAME || '',
	user: process.env.MONGODB_USERNAME || '',
	password: process.env.MONGODB_PASSWORD || '',
};
