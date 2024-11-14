<script>
	import { onMount } from 'svelte'
	import Toggle from './toggle.svelte'

	let isOpen = false
	let isLargeScreen = false

	onMount(() => {
		isLargeScreen = window.innerWidth >= 768
		window.addEventListener('resize', () => {
			isLargeScreen = window.innerWidth >= 768
		})
	})

	import { writable } from 'svelte/store'
	import Modal from 'svelte-simple-modal'
	import Popup from '$lib/components/custom/Popup.svelte'
	const modal = writable(null)
	const showModal = () => modal.set(Popup)
</script>

<header>
	<nav class="navbar mx-auto py-3">
		<div class="flex flex-col md:flex-row md:items-center md:justify-between">
			<div class="flex items-center justify-between px-6">
				<div>
					<a
						class="text-2xl font-bold text-gray-800 hover:text-gray-700 lg:text-3xl dark:text-white dark:hover:text-gray-300"
						href="/">SciOps AI</a
					>
				</div>
				<div class="px-9">
					<img src="/logo.png" alt="logo" class="h-30 w-20" />
				</div>


				<!-- Mobile menu button -->
				<div class="flex md:hidden">
					<button
						type="button"
						class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
						aria-label="toggle menu"
						on:click={() => (isOpen = !isOpen)}
					>
					<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3 12h18m-18 6h18m-18-12h18"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div class={`${isOpen ? 'block' : 'hidden'} items-center md:flex`}>
				<div class="flex flex-col md:mx-6 md:flex-row pl-4 md:pl-2">
					<a
						class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
						href="/blog">Blog</a
					>
					<a
						class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
						href="/publications">Publications</a
					>
					<!-- <Modal show={$modal}>
						<a
							class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
							on:click={showModal}
							>Schedule a Call
						</a>
					</Modal> -->
					<a
						class="my-1 text-sm text-gray-700 hover:text-blue-500 md:mx-4 md:my-0 dark:text-gray-200 dark:hover:text-blue-400"
					>
						<Toggle />
					</a>
				</div>
			</div>
		</div>
	</nav>
</header>

<style>
	.navbar {
		background-color: var(--surface-2);
		width: 100%;
	}

	.navbar a {
		color: inherit;
		text-decoration: none;
		color: var(--text-2);
		transition: color 0.3s ease;
		display: inline-block;
	}

	.navbar a:hover {
		color: var(--text-1); /* Change color on hover */
		animation: rotate 0.3s ease-in-out;
	}

	@keyframes rotate {
		0% {
			transform: rotateX(0deg);
		}
		50% {
			transform: rotateX(60deg);
		}
		100% {
			transform: rotateX(0deg);
		}
	}

	a {
		color: inherit;
		text-decoration: none;
		color: var(--text-2);
		transition: color 0.3s ease;
	}
</style>
