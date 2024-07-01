<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
	import { Button } from '@/components/ui/button';
  import { loginSchema, type LoginSchema, type FormFields } from './schema';
  import {
    type SuperValidated,
    type Infer,
    superForm
  } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  export let data: SuperValidated<Infer<LoginSchema>>;
  export let formFields: FormFields[];
 
  const form = superForm(data, {
    validators: zodClient(loginSchema),
  });

  const { form: formData, enhance } = form;
</script>

<form method="post" use:enhance class="space-y-7">
  {#each formFields as field}
    <Form.Field {form} name={field.name}>
      <Form.Control let:attrs>
        <Form.Label class="text-lg">{field.label}</Form.Label>
        <Input {...attrs} bind:value={$formData[field.name]} placeholder={field.placeholder}/>
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  {/each}

  <Button class="w-full text-lg" size="lg" type="submit">Submit</Button>
</form>