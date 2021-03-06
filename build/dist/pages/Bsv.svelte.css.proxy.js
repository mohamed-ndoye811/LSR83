// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bsvContainer.svelte-5ppxxy{display:flex;justify-content:space-between}.bsvInfo.svelte-5ppxxy{overflow-y:scroll;overflow-x:hidden;width:50%;height:80vh;font-size:1.3vw;font-weight:600;text-shadow:0px 0px 6px rgba(0, 0, 0, 0.2)}.inscriptionInfo.svelte-5ppxxy{background-color:#ffd700;width:45%;height:75vh;border-radius:20px;color:#0066cc;padding:20px 30px 30px 30px;font-size:1.3vw;font-weight:600;text-align:justify}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background-color:#809a6d;border-radius:10px}::-webkit-scrollbar-thumb{background:#ffd700;border-radius:10px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}