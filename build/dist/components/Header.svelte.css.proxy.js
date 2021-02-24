// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "header.svelte-1m1sq3f.svelte-1m1sq3f{position:fixed;top:0px;display:flex;justify-content:space-between;align-items:center;max-width:75%;position:relative;left:50%;transform:translateX(-50%)}header.svelte-1m1sq3f #headerLogo.svelte-1m1sq3f{height:8vh}header.svelte-1m1sq3f .nav.svelte-1m1sq3f{list-style-type:none;display:flex;flex-direction:row;justify-content:space-between;width:60%}header.svelte-1m1sq3f .nav__link.svelte-1m1sq3f{color:#ffd700;text-decoration:none;font-weight:600;font-size:0.9em;cursor:pointer}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}