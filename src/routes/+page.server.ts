import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './auth/login/$types';
import { lucia } from '@/server/auth';

export const load: PageServerLoad = async (event) => {
	const user = event.locals.user;
	const session = event.locals.session;

	return {
		user,
		session
	};
};

export const actions: Actions = {
	default: async (event) => {
		if (!event.locals.session) {
			return fail(401, {
				error: 'unauthorized',
				message: 'You must be logged in to log out.'
			});
		}

		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		redirect(302, '/auth/login');
	}
};
