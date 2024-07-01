<script lang="ts">
  import * as Card from '$lib/components/ui/card';
	import Button from '../ui/button/button.svelte';

  export let title: string;
	export let description: string;
	export let anchorText: string | undefined;
	export let anchorHref: string | undefined;
</script>

<Card.Card class="w-[400px]">
	<Card.CardHeader>
		<Card.CardTitle class="text-5xl font-bold">{title}</Card.CardTitle>
		<Card.CardDescription class="text-lg">{description}</Card.CardDescription>
	</Card.CardHeader>
	<Card.CardContent class="pb-2">
		<slot />
	</Card.CardContent>
	{#if anchorText && anchorHref}
		<Card.CardFooter class="p-0">
			<Button href={anchorHref} class="w-full" variant="link">{anchorText}</Button>
		</Card.CardFooter>
	{/if}
</Card.Card>