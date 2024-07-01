import type { PageLoad } from './$types';
import type { FormField } from './schema';

export const load: PageLoad = ({ data }) => ({
	form: data.form,
	cardData: {
		title: 'Get started',
		description: 'Create an account to get started with our services',
		anchorText: 'Already have an account?',
		anchorHref: '/auth/login'
	},
	formFields: [
		{ name: 'email', label: 'Email', type: 'text', placeholder: 'johndoe@mail.com' },
		{ name: 'username', label: 'Username', type: 'text', placeholder: 'johndoe' },
		{ name: 'password', label: 'Password', type: 'password', placeholder: '********' }
	] as FormField[]
});
