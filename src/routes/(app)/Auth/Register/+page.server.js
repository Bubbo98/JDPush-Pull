import { redirect, error } from "@sveltejs/kit";
import { generateUsername } from '$lib/utils'


export const actions = {
    register: async ({ locals, request}) => {
        const body = Object.fromEntries(await request.formData())
        
        let username = generateUsername(body.name.split(' ').join('')).toLowerCase()
        const cart = new FormData();
        try{
            const result = await locals.pb.collection('users').create({ username, ...body})
            console.log(result.id)
            cart.append('user', result.id)
            cart.append('prodotti', [])
            await locals.pb.collection('carrello').create(cart)
            await locals.pb.collection('users').requestVerification(body.email);
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong');
        }
        throw redirect(303, '/Auth/Login');
    }
}