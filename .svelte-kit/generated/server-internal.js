
import root from './root.svelte';
import { set_building, set_paths, set_version } from '../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_paths({"base":"","assets":""});
set_version("1682429218747");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce }) => "<!DOCTYPE html>\r\n\r\n\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700&display=swap\" rel=\"stylesheet\">\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r\n\t\t<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap\" rel=\"stylesheet\">\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Courgette&display=swap\" rel=\"stylesheet\">\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Special+Elite&display=swap\" rel=\"stylesheet\">\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@800&display=swap\" rel=\"stylesheet\">\r\n\t\t<link href=\"https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap\" rel=\"stylesheet\">\r\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t\t<title>JD Push e Pull</title>\r\n\t\t" + head + "\r\n\t</head>\r\n\t<body>\r\n\t\t<div style=\"display: contents\">\r\n\t\t\t" + body + "\r\n\t\t  </div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<title>" + message + "</title>\r\n\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\r\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\theight: 100vh;\r\n\t\t\t}\r\n\r\n\t\t\t.error {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmax-width: 32rem;\r\n\t\t\t\tmargin: 0 1rem;\r\n\t\t\t}\r\n\r\n\t\t\t.status {\r\n\t\t\t\tfont-weight: 200;\r\n\t\t\t\tfont-size: 3rem;\r\n\t\t\t\tline-height: 1;\r\n\t\t\t\tposition: relative;\r\n\t\t\t\ttop: -0.05rem;\r\n\t\t\t}\r\n\r\n\t\t\t.message {\r\n\t\t\t\tborder-left: 1px solid #ccc;\r\n\t\t\t\tpadding: 0 0 0 1rem;\r\n\t\t\t\tmargin: 0 0 0 1rem;\r\n\t\t\t\tmin-height: 2.5rem;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t}\r\n\r\n\t\t\t.message h1 {\r\n\t\t\t\tfont-weight: 400;\r\n\t\t\t\tfont-size: 1em;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<div class=\"error\">\r\n\t\t\t<span class=\"status\">" + status + "</span>\r\n\t\t\t<div class=\"message\">\r\n\t\t\t\t<h1>" + message + "</h1>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</body>\r\n</html>\r\n"
	}
};

export function get_hooks() {
	return import("../../src/hooks.server.js");
}

export { set_building, set_paths };
