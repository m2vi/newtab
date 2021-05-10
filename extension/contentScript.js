const init = () => {
  console.info('contentScript was initialised');
  console.log(chrome.extension);
};

window.onload = init;
