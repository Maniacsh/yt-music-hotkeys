function onCommand(command) {
    chrome.tabs.query({ url: 'https://music.youtube.com/*' }, function (tabs) {
        if (tabs.length == 0) {
            chrome.tabs.create({ url: 'https://music.youtube.com' });
        }

        var x = 0;

        for (var tab of tabs) {
            x++;
            switch (command) {
                case 'next': var next = true; break;
                case 'plause': var plause = true; break;
                case 'previous': var previous = true; break;
                case 'shuffle': code = 'document.querySelector(".ytd-toggle-button-renderer").click();'; break;
            }

            if (previous) {
                chrome.tabs.executeScript(tab.id, { code: 'document.querySelector(".previous-button").click();' });
                break;
            }
            if (plause) {
                chrome.tabs.executeScript(tab.id, { code: 'document.querySelector("#play-pause-button").click();' });
                break;
            }
            if (next) {
                chrome.tabs.executeScript(tab.id, { code: 'document.querySelector(".next-button").click();' });
                break;
            }
        }
    });

}

chrome.commands.onCommand.addListener(onCommand);