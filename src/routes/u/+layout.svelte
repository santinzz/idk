<script>
	import logo from '$lib/assets/logo.webp';
	import { Button } from '@/components/ui/button';
</script>

<div class="max-w-7xl mx-auto pr-4">
	<header class="flex justify-between items-center">
		<nav>
			<img src={logo} alt="logo" width="80" height="80" />
		</nav>
		<nav>
			<Button size="lg">Create Board</Button>
		</nav>
	</header>

  <main class="pl-4">
    <slot />
  </main>
</div>
