browser.contextMenus.create({
  id: "nukeLauncher",
  title: "Nuke Launcher",
  contexts: ["selection"],
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
  id: "tsumino",
  parentId: "nukeLauncher",
  title: "Tsumino",
  contexts: ["selection"],
  icons: {
    "32": "/icons/tsumino-32.png"
  }
});

browser.contextMenus.create({
  id: "hentaiCafe",
  parentId: "nukeLauncher",
  title: "Hentai Cafe",
  contexts: ["selection"],
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
  id: "hentaiNexus",
  parentId: "nukeLauncher",
  title: "Hentai Nexus",
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

browser.contextMenus.onClicked.addListener((info, tab) => {

    const selection = info.selectionText.replace(/\s/g,'');
    var url
    
    switch (info.menuItemId) {
      case "nhentai":
          url = "https://nhentai.net/g/"+selection;
      break;
      case "tsumino":
        url = "https://tsumino.com/book/info/"+selection;               
      break;
      case "hentaiCafe":
        url = "https://hentai.cafe/"+selection;               
      break;
      case "hitomi":
          url = "https://hitomi.la/galleries/"+selection;                  
      break;
      case "hentaiNexus":
          url = "https://hentainexus.com/view/"+selection;
      break;
      case "fakku":
          url = "https://fakku.net/hentai/"+selection;
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

