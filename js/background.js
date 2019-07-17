browser.contextMenus.create({
  id: "nukeLauncher",
  title: "Nuke Launcher",
  contexts: ["selection"],
});

browser.contextMenus.create({
  id: "fakku",
  parentId: "nukeLauncher",
  title: "Fakku!",
  contexts: ["selection"],
  icons: {
    "32": "/icons/fakku-32.png"
  }
});

browser.contextMenus.create({
  id: "hentaiCafe",
  parentId: "nukeLauncher",
  title: "Hentai Cafe",
  contexts: ["selection"],
  icons: {
    "32": "/icons/hentaicafe-32.png"
  }
});

browser.contextMenus.create({
  id: "hentaifox",
  parentId: "nukeLauncher",
  title: "Hentai Fox",
  contexts: ["selection"],
  icons: {
    "32": "/icons/hentaifox-32.png"
  }
});

browser.contextMenus.create({
  id: "hentaiNexus",
  parentId: "nukeLauncher",
  title: "Hentai Nexus",
  contexts: ["selection"],
  icons: {
    "32": "/icons/hentainexus-32.png"
  }
});

browser.contextMenus.create({
  id: "hitomi",
  parentId: "nukeLauncher",
  title: "Hitomi",
  contexts: ["selection"],
  icons: {
    "32": "/icons/hitomi-32.png"
  }
});

browser.contextMenus.create({
  id: "nhentai",
  parentId: "nukeLauncher",
  title: "Nhentai",
  contexts: ["selection"],
  icons: {
    "32": "/icons/nhentai-32.png"
  }
});

browser.contextMenus.create({
  id: "pururin",
  parentId: "nukeLauncher",
  title: "Pururin",
  contexts: ["selection"],
  icons: {
    "32": "/icons/pururin-32.png"
  }
});

browser.contextMenus.create({
  id: "tsumino",
  parentId: "nukeLauncher",
  title: "Tsumino",
  contexts: ["selection"],
  icons: {
    "32": "/icons/tsumino-32.png"
  }
});

browser.contextMenus.onClicked.addListener((info, tab) => {

    const selection = info.selectionText.replace(/\s/g,'');
    var url
    
    switch (info.menuItemId) {
      case "fakku":
          //https://fakku.net/hentai/{title}/
       url = "https://fakku.net/hentai/"+selection;
      break;
      case "hentaiCafe":
          //https://hentai.cafe/{title}/
          url = "https://hentai.cafe/"+selection;               
      break;   
      case "hentaifox":
          //https://hentaifox.com/gallery/{num_code}/
          url = "https://hentaifox.com/gallery/"+selection;
      break;  
      case "hentaiNexus":
          //https://hentainexus.com/view/{num_code}/
            url = "https://hentainexus.com/view/"+selection;
      break;
      case "hitomi":
          //https://hitomi.la/galleries/{num_code}.html
            url = "https://hitomi.la/galleries/"+selection + ".html";                  
      break;  
      case "nhentai":
        //https://nhentai.net/g/{num_code}/
          url = "https://nhentai.net/g/"+selection;
      break;
      case "pururin":
        //https://pururin.io/gallery/{num_code}/{title}/
        url = "https://pururin.io/gallery/"+selection;
      break;
      case "tsumino":
        //https://tsumino.com/book/info/{num_code}/{optional_title}/
        url = "https://tsumino.com/book/info/"+selection;               
      break;
      default:
      break;
    }

    if (url){
      browser.tabs.create({url: url}).then(onCreated, onError);       
    }
  });
  
function onCreated() {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

