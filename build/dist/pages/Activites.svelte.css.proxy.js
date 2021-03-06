// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".container.svelte-f9kler.svelte-f9kler{display:flex;justify-content:space-between;flex-wrap:wrap;height:85%;width:100%}.activityItem.svelte-f9kler.svelte-f9kler{height:25vh;width:22vw;display:flex;justify-content:center;align-items:center;margin-bottom:2.5vh;overflow:hidden;background-color:rgba(0, 0, 0, 0.2)}.activityItem.svelte-f9kler p.svelte-f9kler{position:absolute;font-size:2vw;text-transform:uppercase;font-weight:600;opacity:0}.activityItem.svelte-f9kler img.svelte-f9kler{height:100%;width:100%}.activityItem.svelte-f9kler.svelte-f9kler:hover{cursor:pointer}.activityItem.svelte-f9kler:hover p.svelte-f9kler{opacity:1;text-shadow:0 0 10px black}.activityItem.svelte-f9kler:hover img.svelte-f9kler{filter:blur(3px);opacity:0.6}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}