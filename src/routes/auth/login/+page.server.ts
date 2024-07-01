import type { PageServerLoad } from './$types.js';
import { superValidate } from 'sveltekit-superforms';
import { loginSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import * as bcrypt from 'bcrypt';
import { getUserByEmail } from '@/actions/get-user.js';
import { lucia } from '@/server/auth.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(loginSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(loginSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const [error, user] = await getUserByEmail(form.data.email);

		if (error || !user || typeof user === 'string') {
			throw new Error(error ? (error as string) : 'User not found.');
		}

		if (!user.password) {
			throw new Error('User not found.');
		}

		// Check if the password is correct
		const isValid = await bcrypt.compare(form.data.password, user.password);

		if (!isValid) {
			throw new Error('Invalid credentials.');
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/');
	}
};
