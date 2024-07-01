<script lang="ts">
	import type { PageData } from './$types';
	import RegisterForm from './register-form.svelte';
	import CardWrapper from '@/components/card-wrapper/card-wrapper.svelte';

	export let data: PageData;

	const { 
		title,
		description,
		anchorText,
		anchorHref
	} = data.cardData;
</script>

<CardWrapper
	{title}
	{description}
	{anchorText}
	{anchorHref}
>
	<RegisterForm data={data.form} formFields={data.formFields} />
</CardWrapper>

