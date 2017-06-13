# slickdeals-hide-expired-contests
Slickdeals - Hide expired contests

This script parses through the user submitted titles to find dates.
If the contest date is in the past, the contest has ended (since the
general rule is to put the end date in the title).
If it has expired, then this script will hide that link, meaning
the list will only show valid current contests.

## Installation Instructions

The easiest way to install the script is to first have [GreaseMonkey][greasemonkey] ([Firefox][gm_firefox]) or [TamperMonkey][tampermonkey] ([Chrome][tm_chrome], [Safari][tm_safari], [Opera][tm_opera]). If you have those addons installed already, simply [open the script][script] and follow the prompts to install it.

For more detailed steps, [follow these instructions][instructions] for your particular browser.

[greasemonkey]: http://www.greasespot.net/
[gm_firefox]: https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/
[tampermonkey]: https://tampermonkey.net/index.php
[tm_chrome]: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
[tm_safari]: https://tampermonkey.net/index.php?ext=dhdg&browser=safari
[tm_opera]: https://addons.opera.com/en/extensions/details/tampermonkey-beta/
[script]: https://raw.githubusercontent.com/schrauger/slickdeals-hide-expired-contests/master/slickdeals-hide-expired-contests.user.js
[instructions]: http://stackapps.com/tags/script/info
