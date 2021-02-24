// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".container.svelte-1c5kqkt.svelte-1c5kqkt{display:flex;justify-content:space-between;margin-top:15px}.monthContainer.svelte-1c5kqkt.svelte-1c5kqkt{padding:35px;border-radius:15px;height:fit-content}.monthContainer.svelte-1c5kqkt h1.svelte-1c5kqkt{margin-bottom:50px;text-align:center}.monthContainer.svelte-1c5kqkt p.svelte-1c5kqkt{margin-top:40px;font-weight:600;font-size:1.7vw;text-transform:uppercase;text-align:center}.monthContainer.svelte-1c5kqkt p.svelte-1c5kqkt:hover{text-decoration:underline;cursor:pointer}.monthContainer.svelte-1c5kqkt.svelte-1c5kqkt:nth-child(even){background-color:#ffd700;color:#0066cc}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}