const websites = [

    {
        id: "fakku",
        title: "Fakku!",
        url: "https://fakku.net/hentai/{{%var%}}",
        icons: {
            "32": "/icons/fakku-32.png"
        }
    },
    {
        id: "hentaiCafe",
        title: "Hentai Cafe",
        url: "https://hentai.cafe/{{%var%}}",
        icons: {
            "32": "/icons/hentaicafe-32.png"
        }
    },
    {
        id: "hentaifox",
        title: "Hentai Fox",
        url: "https://hentaifox.com/gallery/{{%var%}}",
        icons: {
            "32": "/icons/hentaifox-32.png"
        }
    },
    {
        id: "hentaiNexus",
        title: "Hentai Nexus",
        url: "https://hentainexus.com/view/{{%var%}}",
        icons: {
            "32": "/icons/hentainexus-32.png"
        }
    },
    {
        id: "hitomi",
        title: "Hitomi",
        url: "https://hitomi.la/galleries/{{%var%}}.html",
        icons: {
            "32": "/icons/hitomi-32.png"
        }
    },
    {
        id: "nhentai",
        title: "Nhentai",
        url: "https://nhentai.net/g/{{%var%}}",
        icons: {
            "32": "/icons/nhentai-32.png"
        }
    },
    {
        id: "pururin",
        title: "Pururin",
        url: "https://pururin.io/gallery/{{%var%}}",
        icons: {
            "32": "/icons/pururin-32.png"
        }
    },
    {
        id: "tsumino",
        title: "Tsumino",
        url: "https://tsumino.com/book/info/{{%var%}}",
        icons: {
            "32": "/icons/tsumino-32.png"
        }
    },
];

browser.contextMenus.create({
    id: "nukeLauncher",
    title: "Nuke Launcher",
    contexts: ["selection"],
});

websites.forEach((elem) => {
    browser.contextMenus.create({
        id: elem.id,
        parentId: "nukeLauncher",
        title: elem.title,
        contexts: ["selection"],
        icons: elem.icons
    });
})

browser.contextMenus.onClicked.addListener((info, tab) => {
    const selection = info.selectionText.replace(/\s/g, '');
    var elem = websites.find((elem) => { return elem.id == info.menuItemId });
    if (elem) browser.tabs.create({ url: elem.url.replace("{{%var%}}", selection) }).then(onCreated, onError);

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