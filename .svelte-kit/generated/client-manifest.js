import * as client_hooks from '../../src/hooks.client.js';

export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')];

export const server_loads = [];

export const dictionary = {
	"/(app)": [4,[2]],
	"/(app)/Auth/Login": [~5],
	"/(app)/Auth/Register": [~6],
	"/(app)/Auth/ResetPassword": [~7],
	"/(app)/Carrello": [8,[2]],
	"/(app)/Forever": [9,[2]],
	"/(app)/ListaSchede": [~10,[2]],
	"/(app)/Primi/Pasta": [11,[2]],
	"/(app)/Ricette/Dolce": [12,[2]],
	"/(app)/Ricette/Primo": [13,[2]],
	"/(app)/Ricette/Secondo": [14,[2]],
	"/(app)/Schede/SchedeCA": [15,[2,3]],
	"/(app)/Schede/SchedeCP": [16,[2,3]],
	"/(app)/Schede/SchedeGA": [17,[2,3]],
	"/(app)/Schede/SchedeGP": [18,[2,3]],
	"/(app)/Schede/SchedeHA": [19,[2,3]],
	"/(app)/Schede/SchedeHP": [20,[2,3]]
};

export const hooks = {
	handleError: client_hooks.handleError || (({ error }) => { console.error(error) }),
};