const init = () => {
  console.info('contentScript was initialised');
  console.log(chrome.bookmark.search);
};

window.onload = init;
