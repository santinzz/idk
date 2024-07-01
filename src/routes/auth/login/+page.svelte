<script lang="ts">
	import CardWrapper from "@/components/card-wrapper/card-wrapper.svelte";
	import LoginForm from "./login-form.svelte";
	import type { PageData } from "./$types";

  export let data: PageData;

  const { title, description, anchorHref, anchorText } = data.cardData
</script>

<CardWrapper
  {title}
  {description}
  {anchorText}
  {anchorHref}
>
  <LoginForm data={data.form} formFields={data.formFields}/>
</CardWrapper>