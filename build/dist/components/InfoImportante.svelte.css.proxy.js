// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");.infoImportante.svelte-pje6we{height:40px;width:100%;background-color:#ffd700;color:#0066cc;white-space:nowrap;overflow:hidden;display:flex;align-items:center;z-index:1}.infoImportante__texte.svelte-pje6we{font-size:1.25vw;font-weight:600;animation:svelte-pje6we-scrollTxtInfoImportante 40s linear infinite;z-index:1}@keyframes svelte-pje6we-scrollTxtInfoImportante{0%{transform:translate(0, 0)}100%{transform:translate(-100%, 0)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}