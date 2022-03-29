<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Frontend Mentor | Interactive rating component</title>
	<meta name="description" content="Frontend Mentor | Interactive rating component" />
	<meta name="author" content="https://www.frontendmentor.io/profile/YourFavoriteKyle" />

	<!-- Add custom fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="bg-very-dark-blue">
	<div class="flex h-screen">
		<div class="m-auto w-fit mobile:w-11/12 sm:w-7/12 md:w-6/12 lg:w-4/12 desktop:w-3/12">
			<div
				class="space-y-5 py-10 px-6 rounded-3xl bg-gradient-to-b from-modal-gradient-1 to-modal-gradient-2"
			>
				<slot />
			</div>
		</div>
	</div>
</div>
