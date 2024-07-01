<script lang="ts">
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
	import { registerSchema, type RegisterSchema, type FormField } from './schema';
	import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '@/components/ui/input';
	import * as Form from '$lib/components/ui/form';
  import { Button } from '@/components/ui/button';

  export let formFields: FormField[];
  export let data: SuperValidated<Infer<RegisterSchema>>;

  const form = superForm(data, {
    validators: zodClient(registerSchema)
  })

	const { form: formData, enhance } = form;
</script>

<form method="post" use:enhance class="space-y-4">
  {#each formFields as field}
    <Form.FormField {form} name={field.name}>
      <Form.Control let:attrs>
        <Form.Label class="text-lg opacity-90">{field.label}</Form.Label>
        <Input {...attrs} bind:value={$formData[field.name]} placeholder={field.placeholder} type={field.type}/>
      </Form.Control>
      {#if field.name === 'username'} 
        <Form.FormDescription class="opacity-65 text-xs">
          Your username will be visible to other users
        </Form.FormDescription>
      {/if}
      <Form.FieldErrors />
    </Form.FormField>
  {/each}

	<Button class="w-full text-lg" size="lg" type="submit">Submit</Button>
</form>
