// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "ul.svelte-1qhuapa.svelte-1qhuapa{visibility:visible;position:absolute;top:38%;left:50%;transform:translate(-50%, -50%);list-style-type:none;display:flex;justify-content:space-between;align-items:center;width:70%}ul.svelte-1qhuapa li.svelte-1qhuapa{font-size:4vw;font-weight:700;text-transform:uppercase}ul.svelte-1qhuapa li.svelte-1qhuapa:hover{cursor:pointer;text-decoration:underline}.container.svelte-1qhuapa.svelte-1qhuapa{display:flex;flex-direction:column}.hideSelection.svelte-1qhuapa.svelte-1qhuapa{visibility:hidden}.bouton.svelte-1qhuapa.svelte-1qhuapa{width:150px;font-size:1vw;font-weight:700;text-align:center;align-self:flex-end;margin-top:15px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}