import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from '../auth/$types';

interface Params {
	user: string;
}

export const load: LayoutServerLoad = (event) => {
	const user = event.locals.user;

	if (!user) {
		return redirect(302, '/auth/login');
	}

	const { user: userParam } = event.params as Params;

	if (userParam !== user.username) {
		return redirect(302, `/u/${user.username}`);
	}

	return {
		user
	};
};
