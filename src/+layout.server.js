import { error } from "@sveltejs/kit";

export const load = ({ locals }) => {
        const getUsersCart = async (userId) => {
            try {
                const cart = serializeNonPOJOs(await locals.pb.collection('carrello').getFullList(undefined, {
                    filter: `user = "${userId}"`
                }))
                return cart
            } catch (err) {
                console.log('Error', err);
                throw error(err.status, err.message)
            }
        }   
    
    if (locals.user) {
        return {
            user: locals.user,
            carrello: getUsersCart(locals.pb.authStore.baseModel.id)
        }
    }

    return {
        user:undefined,
        carrello: []
    }
}