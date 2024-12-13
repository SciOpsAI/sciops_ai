<script lang="ts">
	import * as config from '$lib/config'
	let footer
</script>

<nav
	class="bg-silver top-0 flex flex-wrap justify-around rounded-t-lg bg-gray-800 py-3  shadow-lg" 
>
	<p style="color:greenyellow">{config.title} &copy {new Date().getFullYear()}</p>

	<div class="px-1">
		<img src="/feup.png" alt="logo" class="h-30 w-20" style="border-radius: 0; object-fit: contain;" />
	</div>
	<p class="quote" style="color:greenyellow">Tomorrow's Breakthroughs, Today's Reality!</p>
</nav>

<style>
	nav {
		background-color: var(--surface-2);
		padding: var(--size-3);
		width: 100%;
		margin-inline: auto;
	}
	p {
		color: var(--text-1);
		text-decoration: none;
		padding: var(--size-2);
	}
	.quote {
		color: var(--text-2);
		text-decoration: none;
		padding: var(--size-2);
	}
</style>
