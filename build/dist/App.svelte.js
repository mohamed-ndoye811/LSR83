import './App.svelte.css.proxy.js';
/* src\App.svelte generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	check_outros,
	create_component,
	destroy_component,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	noop,
	run_all,
	safe_not_equal,
	space,
	toggle_class,
	transition_in,
	transition_out
} from "../_snowpack/pkg/svelte/internal.js";

import { gsap, Power4 } from "../_snowpack/pkg/gsap.js";

//---[ IMPORT DES PAGES ]---
import Equipe from "./pages/Equipe.svelte.js";

import InfoImportante from "./components/InfoImportante.svelte.js";
import Accueil from "./pages/Accueil.svelte.js";
import PlanningsSelection from "./pages/PlanningsSelection.svelte.js";
import Bsv from "./pages/Bsv.svelte.js";
import Administration from "./pages/Administration.svelte.js";
import Activites from "./pages/Activites.svelte.js";
import CompteurVisite from "./components/CompteurVisite.svelte.js";

function create_if_block_5(ctx) {
	let administration;
	let current;

	administration = new Administration({
			props: { textToShow: /*adminChoix*/ ctx[3] }
		});

	return {
		c() {
			create_component(administration.$$.fragment);
		},
		m(target, anchor) {
			mount_component(administration, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const administration_changes = {};
			if (dirty & /*adminChoix*/ 8) administration_changes.textToShow = /*adminChoix*/ ctx[3];
			administration.$set(administration_changes);
		},
		i(local) {
			if (current) return;
			transition_in(administration.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(administration.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(administration, detaching);
		}
	};
}

// (97:41) 
function create_if_block_4(ctx) {
	let planningsselection;
	let current;
	planningsselection = new PlanningsSelection({});

	return {
		c() {
			create_component(planningsselection.$$.fragment);
		},
		m(target, anchor) {
			mount_component(planningsselection, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(planningsselection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(planningsselection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(planningsselection, detaching);
		}
	};
}

// (95:36) 
function create_if_block_3(ctx) {
	let bsv;
	let current;
	bsv = new Bsv({});

	return {
		c() {
			create_component(bsv.$$.fragment);
		},
		m(target, anchor) {
			mount_component(bsv, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(bsv.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(bsv.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(bsv, detaching);
		}
	};
}

// (93:42) 
function create_if_block_2(ctx) {
	let activites;
	let current;
	activites = new Activites({});

	return {
		c() {
			create_component(activites.$$.fragment);
		},
		m(target, anchor) {
			mount_component(activites, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(activites.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(activites.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(activites, detaching);
		}
	};
}

// (91:39) 
function create_if_block_1(ctx) {
	let equipe;
	let current;
	equipe = new Equipe({});

	return {
		c() {
			create_component(equipe.$$.fragment);
		},
		m(target, anchor) {
			mount_component(equipe, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(equipe.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(equipe.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(equipe, detaching);
		}
	};
}

// (89:2) {#if pageSelected === "/"}
function create_if_block(ctx) {
	let accueil;
	let current;
	accueil = new Accueil({});

	return {
		c() {
			create_component(accueil.$$.fragment);
		},
		m(target, anchor) {
			mount_component(accueil, target, anchor);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(accueil.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(accueil.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(accueil, detaching);
		}
	};
}

function create_fragment(ctx) {
	let header;
	let img;
	let img_src_value;
	let t0;
	let ul;
	let li0;
	let t2;
	let li1;
	let t4;
	let li2;
	let t6;
	let li3;
	let t8;
	let li4;
	let t10;
	let div0;
	let p0;
	let t12;
	let p1;
	let t14;
	let infoimportante;
	let t15;
	let div1;
	let current_block_type_index;
	let if_block;
	let t16;
	let div2;
	let compteurvisite;
	let current;
	let mounted;
	let dispose;
	infoimportante = new InfoImportante({});

	const if_block_creators = [
		create_if_block,
		create_if_block_1,
		create_if_block_2,
		create_if_block_3,
		create_if_block_4,
		create_if_block_5
	];

	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*pageSelected*/ ctx[0] === "/") return 0;
		if (/*pageSelected*/ ctx[0] === "/Equipe") return 1;
		if (/*pageSelected*/ ctx[0] === "/Activites") return 2;
		if (/*pageSelected*/ ctx[0] === "/BSV") return 3;
		if (/*pageSelected*/ ctx[0] === "/Planning") return 4;
		if (/*pageSelected*/ ctx[0] === "/Administration") return 5;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx, -1))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	compteurvisite = new CompteurVisite({});

	return {
		c() {
			header = element("header");
			img = element("img");
			t0 = space();
			ul = element("ul");
			li0 = element("li");
			li0.textContent = "ÉQUIPE";
			t2 = space();
			li1 = element("li");
			li1.textContent = "ACTIVITÉS";
			t4 = space();
			li2 = element("li");
			li2.textContent = "BSV";
			t6 = space();
			li3 = element("li");
			li3.textContent = "PLANNINGS";
			t8 = space();
			li4 = element("li");
			li4.textContent = "ADMINISTRATION";
			t10 = space();
			div0 = element("div");
			p0 = element("p");
			p0.textContent = "STATUTS";
			t12 = space();
			p1 = element("p");
			p1.textContent = "REGLEMENT";
			t14 = space();
			create_component(infoimportante.$$.fragment);
			t15 = space();
			div1 = element("div");
			if (if_block) if_block.c();
			t16 = space();
			div2 = element("div");
			create_component(compteurvisite.$$.fragment);
			if (img.src !== (img_src_value = "./img/LSR_LOGO/LSR83_logo.png")) attr(img, "src", img_src_value);
			attr(img, "alt", "");
			attr(img, "id", "headerLogo");
			attr(img, "class", "svelte-1hokwmx");
			attr(li0, "class", "nav__link svelte-1hokwmx");
			attr(li1, "class", "nav__link svelte-1hokwmx");
			attr(li2, "class", "nav__link svelte-1hokwmx");
			attr(li3, "class", "nav__link svelte-1hokwmx");
			attr(li4, "class", "nav__link svelte-1hokwmx");
			attr(ul, "class", "nav svelte-1hokwmx");
			attr(p0, "class", "svelte-1hokwmx");
			attr(p1, "class", "svelte-1hokwmx");
			attr(div0, "class", "adminPannel svelte-1hokwmx");
			toggle_class(div0, "pannelVisible", /*pannelVisible*/ ctx[2]);
			attr(header, "class", "svelte-1hokwmx");
			attr(div1, "class", "container svelte-1hokwmx");
			attr(div2, "class", "svelte-1hokwmx");
			toggle_class(div2, "hidden", /*pageSelected*/ ctx[0] != "/");
		},
		m(target, anchor) {
			insert(target, header, anchor);
			append(header, img);
			append(header, t0);
			append(header, ul);
			append(ul, li0);
			append(ul, t2);
			append(ul, li1);
			append(ul, t4);
			append(ul, li2);
			append(ul, t6);
			append(ul, li3);
			append(ul, t8);
			append(ul, li4);
			append(header, t10);
			append(header, div0);
			append(div0, p0);
			append(div0, t12);
			append(div0, p1);
			insert(target, t14, anchor);
			mount_component(infoimportante, target, anchor);
			insert(target, t15, anchor);
			insert(target, div1, anchor);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(div1, null);
			}

			/*div1_binding*/ ctx[14](div1);
			insert(target, t16, anchor);
			insert(target, div2, anchor);
			mount_component(compteurvisite, div2, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen(img, "click", /*click_handler*/ ctx[6]),
					listen(li0, "click", /*click_handler_1*/ ctx[7]),
					listen(li1, "click", /*click_handler_2*/ ctx[8]),
					listen(li2, "click", /*click_handler_3*/ ctx[9]),
					listen(li3, "click", /*click_handler_4*/ ctx[10]),
					listen(li4, "click", /*click_handler_5*/ ctx[11]),
					listen(p0, "click", /*click_handler_6*/ ctx[12]),
					listen(p1, "click", /*click_handler_7*/ ctx[13])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*pannelVisible*/ 4) {
				toggle_class(div0, "pannelVisible", /*pannelVisible*/ ctx[2]);
			}

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					} else {
						if_block.p(ctx, dirty);
					}

					transition_in(if_block, 1);
					if_block.m(div1, null);
				} else {
					if_block = null;
				}
			}

			if (dirty & /*pageSelected*/ 1) {
				toggle_class(div2, "hidden", /*pageSelected*/ ctx[0] != "/");
			}
		},
		i(local) {
			if (current) return;
			transition_in(infoimportante.$$.fragment, local);
			transition_in(if_block);
			transition_in(compteurvisite.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(infoimportante.$$.fragment, local);
			transition_out(if_block);
			transition_out(compteurvisite.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(header);
			if (detaching) detach(t14);
			destroy_component(infoimportante, detaching);
			if (detaching) detach(t15);
			if (detaching) detach(div1);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d();
			}

			/*div1_binding*/ ctx[14](null);
			if (detaching) detach(t16);
			if (detaching) detach(div2);
			destroy_component(compteurvisite);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let pageSelected = "";

	window.addEventListener("load", function () {
		$$invalidate(0, pageSelected = "/");
	});

	let actualPage;

	function pageSwitch(nextPage) {
		gsap.to(actualPage, {
			autoAlpha: 0,
			duration: 0.6,
			ease: Power4.easeOut
		});

		setTimeout(
			function () {
				gsap.to(actualPage, {
					autoAlpha: 1,
					duration: 0.6,
					ease: Power4.easeOut
				});

				$$invalidate(0, pageSelected = nextPage);
			},
			200
		);
	}

	let pannelVisible = false;
	let adminChoix = "";

	function redirectionAdmin(choix) {
		pageSwitch("/Administration");

		setTimeout(
			function () {
				$$invalidate(3, adminChoix = choix.toLowerCase());
			},
			200
		);

		$$invalidate(2, pannelVisible = false);
	}

	const click_handler = () => pageSwitch("/");
	const click_handler_1 = () => pageSwitch("/Equipe");
	const click_handler_2 = () => pageSwitch("/Activites");
	const click_handler_3 = () => pageSwitch("/BSV");
	const click_handler_4 = () => pageSwitch("/Planning");

	const click_handler_5 = () => {
		$$invalidate(2, pannelVisible = !pannelVisible);
	};

	const click_handler_6 = () => redirectionAdmin("Statuts");
	const click_handler_7 = () => redirectionAdmin("Reglement");

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			actualPage = $$value;
			$$invalidate(1, actualPage);
		});
	}

	return [
		pageSelected,
		actualPage,
		pannelVisible,
		adminChoix,
		pageSwitch,
		redirectionAdmin,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3,
		click_handler_4,
		click_handler_5,
		click_handler_6,
		click_handler_7,
		div1_binding
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;