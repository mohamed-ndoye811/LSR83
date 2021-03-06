// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".blurBackground.svelte-f54wrg{position:fixed;height:100%;width:100%;backdrop-filter:blur(2px)}.detailsPannel.svelte-f54wrg{cursor:pointer;transform:translate(-50%, -50%);position:absolute;height:300px;width:700px;font-size:1.2vw;z-index:1;left:50%;top:35%;border-radius:20px}.backgroundPannel.svelte-f54wrg{position:absolute;height:100%;width:100%;z-index:3;background-color:#0066cc;border-radius:inherit}.reliefPannel.svelte-f54wrg{border-radius:inherit;position:absolute;height:100%;width:100%;background-color:#ffd700;z-index:2;top:4px;left:-4px;box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.7)}.textContainer.svelte-f54wrg{position:absolute;z-index:3;color:#ffd700;width:fit-content;min-width:85%;height:65%;left:50%;top:50%;transform:translate(-50%, -50%)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}