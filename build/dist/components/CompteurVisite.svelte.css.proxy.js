// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".visitCount.svelte-yxc8l{background-color:#ffd700;color:#0066cc;overflow:hidden;width:10%;height:4%;position:fixed;bottom:0;right:12.5%;border-radius:0.8vw 0.8vw 0 0;display:flex;align-items:center;justify-content:center;font-weight:600;font-style:italic;font-size:1vw}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}