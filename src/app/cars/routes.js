// https://router.vuejs.org/en/advanced/lazy-loading.html
const Results = r => require.ensure([], () => r(require('./main')), 'results-bundle')

export default [
	{
	    name: 'results.index',
	    path: '/results',
	    component: Results
	}
]
