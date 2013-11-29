# Modules Manager beta for ProcessWire2.+

Module Manager enables you to browse the modules directory on modules.processwire.com, download, install or update them.

#### What it does
When installed you'll have a new admin page under "Setup", feel free to move it to wherever you like. On first load it will download and cache a json file from where it will look for modules already installed, new versions, or modules not yet installed or not downloaded and provide actions according to its state.

There's a **refresh** button to look for new modules already put in modules directory and refresh the cache file with the remote list of modules.

If you download a module it will create a temp zip file in the assets folder, extracts it, creates a new folder in /site/modules/ using the class name, and move the files in there. After it's done it deletes the temp files. It will show a message and show an install button, which you can use to install it, but don't have to.

If you update a module it will do the same process as above, and just replace the current files with the new ones.

#### Notes
This version is still beta and in testing. Feel free to try it out own your own risk. Current version uses file_get_contents" and "copy" php methods to retrieve the json feed from external domain. This requires the php to allow it in php (allow_url_fopen). Download of the module zip is done using copy(). Also on my local install I had to adjust the /site/modules/ and /site/assets/ directory to have write permission by php.


#### Versions Log

1.1.1

- added live search filtering, fuzzy text search only on name, author, categories and action

1.0.9

- fixes dependency issue with extending module that isn't installed yet
- installing module now only possible if requirements are met by the module info
- some changes to the module table columns and showing summary directly

1.0.7

- multitude of fixed and code cleanup (@petsagouris)
- added check for openssl module required for https download stream (@petsagouris)
- added back to Modules Manager button on download/update screen

1.0.6

- replace "page-edit" permission for module with "modules-manager"
- added version output on modules screen footer

1.0.5

- added max_redirects config option used by download stream context. Increase this value if download of zip failes. default 3.
- some maintenance

1.0.4

- added back support for PW 2.2
- some maintenance

1.0.3

- Language Packs and Site Profiles now show up but will have a "more" link to the repository page.
- Added check if no download github url found to give a "more" link to the modules url
- requires ProcessWire v2.3

1.0.2

- add support for admin themes install


