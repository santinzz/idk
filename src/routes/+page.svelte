<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { session, user } = data;

	import logo from '$lib/assets/logo.webp';
	import { Button } from '@/components/ui/button';
</script>

<div class="max-w-7xl mx-auto px-4">
	<header class="flex justify-between items-center">
		<nav>
			<img src={logo} alt="logo" width="100" height="100" />
		</nav>
		<nav class="flex gap-4">
			{#if session}
				<Button>
					<a href={`/u/${user?.username}/boards`}>Dashboard</a>
				</Button>
				<form method="post">
					<Button type="submit">Logout</Button>
				</form>
			{:else}
				<Button>
					<a href="/auth/login">Login</a>
				</Button>
				<Button>
					<a href="/auth/register">Register</a>
				</Button>
			{/if}
		</nav>
	</header>
	<main>
		<div class="pt-32 flex gap-y-4 flex-col items-center">
			<h1 class="text-5xl font-extrabold text-gray-700">Best easy and fast tasks manager</h1>
			<p class="text-2xl opacity-80 font-medium text-gray-70">Keep everything in order.</p>
			<a
				href="/auth/register"
				class="bg-blue-700 text-2xl font-medium hover:bg-blue-800 transition rounded-md text-white px-4 py-3"
			>
				Create an account
			</a>
		</div>
	</main>
</div>
