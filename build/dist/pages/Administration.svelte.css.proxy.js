// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".background{background-image:url(\"./img/Toulon-2.jpg\");filter:blur(5px);background-clip:border-box;position:fixed;height:100%;width:100%;z-index:-1;opacity:0.3}.selectionContainer.svelte-1w5069y.svelte-1w5069y{height:80vh;overflow-y:scroll}.selectionContainer.svelte-1w5069y p.svelte-1w5069y{font-size:2vw;font-weight:600;letter-spacing:1px;cursor:default}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}