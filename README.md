# Modules Manager alpha 1.0.4 for ProcessWire2.+

Module Manager enables you to browse the modules directory on modules.processwire.com, download, install or update them.

#### What it does
When installed you'll have a new admin page under "Setup", feel free to move it to wherever you like. On first load it will download and cache a json file from where it will look for modules already installed, new versions, or modules not yet installed or not downloaded and provide actions according to its state.

There's a **refresh** button to look for new modules already put in modules directory and refresh the cache file with the remote list of modules.

If you download a module it will create a temp zip file in the assets folder, extracts it, creates a new folder in /site/modules/ using the class name, and move the files in there. After it's done it deletes the temp files. It will show a message and show an install button, which you can use to install it, but don't have to.

If you update a module it will do the same process as above, and just replace the current files with the new ones.

#### Notes
This version is still alpha and in testing. Feel free to try it out own your own risk. Current version uses file_get_contents" and "copy" php methods to retrieve the json feed from external domain. This requires the php to allow it in php (allow_url_fopen). Download of the module zip is done using copy(). Also on my local install I had to adjust the /site/modules/ and /site/assets/ directory to have write permission by php.

