<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>



<div>
	<div class="-py-10 absolute h-48 w-full">
		<img
			class="h-full w-full rounded-none rounded-b-xl object-cover"
			src={data.meta.image}
			alt={data.meta.title}
		/>
	</div>
	<div class="py-40" style="background-image: url('https://awv3node-homepage.surge.sh/build/assets/stars.svg'); background-size: cover;">
		<article>
			<hgroup>
				<h1>{data.meta.title}</h1>
				<p>{data.meta.description}</p>
				<p>Published at {formatDate(data.meta.date)}</p>
			</hgroup>
			<div class="prose py-20"> 
				<svelte:component this={data.content} />
			</div>
		</article>
	</div>
</div>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
		padding-block: var(--size-9);
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
