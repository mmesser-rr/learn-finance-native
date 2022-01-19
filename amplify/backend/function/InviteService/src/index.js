/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_THEPLAYERSCOMPANY_GRAPHQLAPIIDOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIENDPOINTOUTPUT
	API_THEPLAYERSCOMPANY_GRAPHQLAPIKEYOUTPUT
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
