import { AzureFunction, Context, HttpRequest } from '@azure/functions'

export const httpTrigger: AzureFunction = async (_context: Context, _req: HttpRequest): Promise<any> => {
	console.log('HTTP trigger function processed a request.')
	const name = _req.body.name
	const responseMessage = name ? `Hello ${name}.` : 'Please pass a name on the query string or in the request body.'

	return {
		// status: 200, /* Defaults to 200 */
		body: responseMessage,
	}
}
