# Modules Manager Alpha 0.0.1

Module Manager enables you to browse the modules directory on modules.processwire.com, download, install or update them.

### Notes
This version is still alpha and in testing. Feel free to try it out own your own risk.


### What it does
When installed you'll have a new admin page under "Setup", feel free to move it to wherever you like.

First load it will download and cache a json file from where it will look for modules already installed, new versions, or modules not yet installed or not downloaded and provide actions according to it's state.

There a "refresh" button to look for new modules already put in modules directory and refresh the cache file with the list of modules.

Currently it does hide modules for Language Packs, and Admin Themes, since those would require a complete different install routine.