<script>
	export let name;
	let src = "images/vardy-leicester.jpeg";
	let coolGif = "public/images/giphy (7).gif";
</script>

<main>
	
	<h1> Hello {name}!</h1>
	
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to EAT ME ASS.</p>
	
	<img src="images/giphy (7).gif" alt= "vardy"/>
	<br>
	<img {coolGif} alt="tight gif">

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>