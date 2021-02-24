// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#titrePage.svelte-1unlzyn{font-size:1.5em;transform:translateX(45%)}.container.svelte-1unlzyn{width:100%;height:400px;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.option.svelte-1unlzyn{display:flex;justify-content:space-between;align-items:center;text-transform:uppercase;font-weight:600;font-size:2em;cursor:pointer}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}