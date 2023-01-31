import { redirect } from "@sveltejs/kit";
import {currentUser} from '$lib/utils';

export const POST = ({locals}) => {
    locals.pb.authStore.clear()
    currentUser.set(null)

    throw redirect(303, '/');
}