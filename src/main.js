import App from './App.svelte';

let vardy = 'images/vardy-leicester.jpeg'

const app = new App({
	target: document.body,
	props: {
		name: 'Acres'
	}
});

export default app;