import { error, redirect } from "@sveltejs/kit";
import {serializeNonPOJOs} from '$lib/utils'

export const load = ({locals}) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/Auth/Login')
    } 
    const getUsersSchede = async (userId) => {
        try {
            const schedes = serializeNonPOJOs(await locals.pb.collection('schede').getFullList(undefined, {
                filter: `user = "${userId}"`
            }))
            return schedes
        } catch (err) {
            console.log('Error', err);
            throw error(err.status, err.message)
        }
    }
    return {
        schede: getUsersSchede(locals.pb.authStore.baseModel.id)
    }
}

