# Modules Manager for ProcessWire2.+

Module Manager enables you to browse the modules directory on modules.processwire.com, download, install or update them.

#### Requires

- the [JqueryDataTables](http://modules.processwire.com/modules/jquery-data-tables/) module to be installed before you can install Modules Manager.
- "allow_url_fopen" to be enabled in your php.ini.
- "openssl" PHP extension needs to be installed on your server.
- PHP to have read/write access to the /site/modules/ directory

#### How does it work

When installed you'll have a new admin page under "Setup", feel free to move it to wherever you like. On first load it will download and cache a json file from where it will look for modules already installed, new versions, or modules not yet installed or not downloaded and provide actions according to its state.

There's a **refresh** button to look for new modules already put in modules directory and refresh the cache file with the remote list of modules.

If you download a module it will create a temp zip file in the assets folder, extracts it, creates a new folder in /site/modules/ using the class name, and move the files in there. After it's done it deletes the temp files. It will show a message and show an install button, which you can use to install it, but don't have to.

If you update a module it will do the same process as above, and just replace the current files with the new ones.

#### Notes

This version is still beta and in testing. Feel free to try it out own your own risk. Current version uses file_get_contents" and "copy" php methods to retrieve the json feed from external domain. This requires the php to allow it in php (allow_url_fopen). Download of the module zip is done using copy(). Also on my local install I had to adjust the /site/modules/ and /site/assets/ directory to have write permission by php.


#### Changes Log

2.1.6

- fix for "\n" line breaks in summary causing an error in jQueryDataTables parsing the json.

2.1.5

- added external links if available below description to project (github), direct download and forum support thread.

2.1.4

- added "Premium Modules" to exclude list, they still show but are not downloadable (cause they're commercial)

2.1.3

- module folders get now deleted before writing new version
- small fix with module cache not getting updated when updateing a module version


2.1.2

- urlencode for module download/update urls
- small css fix for processing bar

2.1.1

- some more translations added
- made Magnific popup wider

2.1.0

Added a new module to ModulesManager:

##### Modules Manager Notification 0.1.0

- Sends out update information for installed modules to an email
- This module required LazyCron core module installed
- Note this is something you want to run like once a week
- When the lazy cron is running the request will be blocked for a few second, this is currently due to how the lazy cron works. Maybe we will be able to optimize this in future.

After install you need to define the interval, an recipient email, subject and optional a "from" email address. There's also a checkbox to activate/deactivate the module running the lazy cron job.

Note that this requires someone to hit your website (or admin) to get executed, so interval times can vary.

It will then refresh the module feed from modules.processwire.com on your installation and check for new modules. If any found it will send out an email notification to the email specified in the form of:

```
Found following updates for installed modules:

Module: TextformatterHannaCode v0.1.4
Found new version available: v0.1.5
More infos at: http://modules.processwire.com/modules/process-hanna-code/
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

Module: InputfieldCKEditor v1.1.3
Found new version available: v1.1.4
More infos at: http://modules.processwire.com/modules/inputfield-ckeditor/
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
```

It will also save a notification log modulesmanager_notification_log.txt  with an entry when the lazy cron was executed in your site/assets/logs/ folder.


2.0.0

- added jQuery DataTables to list modules. This enables convenient browsing with pagination, live search filter and sorting. State saving via cookies is enabled so if you come back it shows the table how you left it.
- added iframe modals for download, update, edit and install links. So you can now install modules without leaving the ModulesManager page. This is using Magnific lightbox by default, if installed, otherwise it will take the older Fancybox.
- some more translations added

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

