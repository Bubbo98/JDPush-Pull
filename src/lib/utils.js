import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';

const pb = new PocketBase('http://127.0.0.1:8090');

const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj);
}

export const currentUser = writable(serializeNonPOJOs(pb.authStore.model));

export const generateUsername = (name) => {
    const id = randomBytes(2).toString('hex');
    return  `${name.slice(0, 5)}${id}`;
}

export const getUrl = (collectionId, recordId, fileName) => {
    return `http://127.0.0.1:8090/api/files/${collectionId}/${recordId}/${fileName}`
}