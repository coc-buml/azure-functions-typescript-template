import { Context } from '@azure/functions'
import { HttpRequest } from '@azure/functions'
import { Substitute } from '@fluffy-spoon/substitute'
import { httpTrigger } from '../endpoint-name/index'

describe.each([
	['Philipp Schmid', 'Hello Philipp Schmid.'],
	['', 'Please pass a name on the query string or in the request body.'],
	[null, 'Please pass a name on the query string or in the request body.'],
])('handler function', (input, output) => {
	// let consoleOutput: any[] = []

	// beforeEach(() => {
	// 	consoleOutput = []
	// })

	// beforeAll(() => {
	// 	console.error = (...output: any) => consoleOutput.push(output)
	// 	console.log = (...output: any) => consoleOutput.push(output)
	// })

	test(`returns correct greeting for '${input}' in the query`, async () => {
		// this request a mock request for our function the input from the above array
		const request = Substitute.for<HttpRequest>()
		;(request.query.returns as any)({})
		;(request.body.returns as any)({ name: input })

		// this creates a mock context for our function
		const context = Substitute.for<Context>()
		;(context.req as any).returns({ req: request })

		// calls our function
		const response = await httpTrigger(context, request)

		// tests for the response
		expect(response.body).toBe(output)

		// expect(consoleOutput.length).toBeGreaterThan(0)
	})
})
