import type { PageLoad } from './$types';
import type { FormFields } from './schema';

export const load: PageLoad = ({ data }) => {
	return {
		form: data.form,
		cardData: {
			title: 'Welcome back',
			description: 'Login to your account to continue',
			anchorText: "Don't have an account?",
			anchorHref: '/auth/register'
		},
		formFields: [
			{ name: 'email', label: 'Email', type: 'text', placeholder: 'johndoe@mail.com' },
			{ name: 'password', label: 'Password', type: 'password', placeholder: '********' }
		] as FormFields[]
	};
};
