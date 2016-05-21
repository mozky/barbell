import { BrowserPolicy } from 'meteor/browser-policy-common';

BrowserPolicy.content.allowFrameOrigin('www.youtube.com');
BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com');
BrowserPolicy.content.allowImageOrigin('placehold.it');
BrowserPolicy.content.allowImageOrigin('placeholdit.imgix.net');
BrowserPolicy.content.allowFontOrigin('fonts.gstatic.com');
