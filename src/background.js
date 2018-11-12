function onCommand(command) {
    chrome.tabs.query({ url: "https://music.youtube.com/*" }, function (tabs) {
        if (tabs.length == 0) {
            chrome.tabs.create({ url: 'https://music.youtube.com' });
          }
    })
        
}

chrome.commands.onCommand.addListener(onCommand);