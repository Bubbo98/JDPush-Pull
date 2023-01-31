import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';
import { currentUser } from "$lib/utils";


export const handle = async ({ event, resolve}) => {
    event.locals.pb = new PocketBase('http://127.0.0.1:8090');
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    if (event.locals.pb.authStore.isValid){
        try {
            await event.locals.pb.collection('users').authRefresh();
        } catch (_) {
            event.locals.pb.authStore.clear();
        }
    }
    currentUser.set(serializeNonPOJOs(event.locals.pb.authStore.model))
    
        const response = await resolve(event);
        response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie( { httpOnly: false}))

        return response;
};

