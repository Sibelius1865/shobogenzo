const install = (hook, vm) => {
  const text = 'hey';

  hook.mounted(_ => {
      const $search = Docsify.dom.find('div.search');
      const $panel = Docsify.dom.find($search, '.results-panel');
      const $clearBtn = Docsify.dom.find($search, '.clear-button');
      const $sidebarNav = Docsify.dom.find('.sidebar-nav');
      const $appName = Docsify.dom.find('.app-name');

      console.log($search)
    // const input = document.getElementsByTagName('input');

    // const handleInput = () => {
    //   console.log('hey')
    // }
    // document.getElementsByTagName('input')[0].addEventListener('input', handleInput);
    // console.log(input.innerTEXT);
    // console.log(text);
  });
}

$docsify.plugins = [].concat(install, $docsify.plugins);