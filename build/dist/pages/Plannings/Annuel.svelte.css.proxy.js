// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".activites.svelte-ugy6hc.svelte-ugy6hc{display:flex;flex-direction:column}.activites.svelte-ugy6hc li.svelte-ugy6hc{padding:15px 20px 15px 20px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.container.svelte-ugy6hc.svelte-ugy6hc{display:flex;justify-content:space-between;margin-top:15px}.activitesAnnee.svelte-ugy6hc.svelte-ugy6hc{overflow-y:scroll;overflow-x:hidden;width:55%;height:75vh;font-size:1.15vw;font-weight:600;text-shadow:0px 0px 6px rgba(0, 0, 0, 0.2)}.infoPlanningAnnuel.svelte-ugy6hc.svelte-ugy6hc{background-color:#ffd700;width:40%;height:70vh;border-radius:20px;color:#0066cc;padding:20px 30px 30px 30px;font-size:1.12vw;font-weight:600;text-align:justify}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}