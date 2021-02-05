
(function() {
    // Dynamic values from page request
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"6","deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.13.6","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"78.0.3904.108","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"weather":{"windy":"0","currentCondition":"fog","apparentTemperature":3.0,"temperature":2.72,"windSpeed":1,"cloudCoverage":100,"conditions":[{"name":"rain","weight":2},{"name":"fog","weight":4},{"name":"cloudy","weight":0}]},"ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"NY","ipCityGeonameId":"5128581","ipCity":"New York","ipPostalCode":"10003","ipLat":40.7359,"ipLng":-73.9904,"accountId":"ebf0c386","folderId":"58dd9046","placementId":"a7a684f8","supplierId":null,"sessionId":"s1575877288xe274ddec82d96ex45366548","purpose":"live","secure":1,"clientTimestamp":"1575877258.742","clientTimeZoneOffsetInMinutes":300,"clientIp":"216.165.95.149","gpsLat":null,"gpsLng":null,"language":"en","acceptLanguage":"en-US,en;q=0.9","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{},"variantChoices":{"EventMetadata":"newMeta"},"neustarSegment":null,"authBasis":"1575877288662,8611d4bb,a7a684f8","authToken":"fc88c3617b424d0e9d8da53361979f8a","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[{"campaignId":null,"placementId":"a7a684f8","creativeId":null,"eventName":"urlOpened","reportLabel":"Clickthru","destinationUrl":"https://ad.doubleclick.net/ddm/clk/454593752;258914067;v","destination":{"url":"https://ad.doubleclick.net/ddm/clk/454593752;258914067;v","clazz":"Fixed"},"impressionUrl":null}],"dynamicContent":[],"tuneIosQueryStringFragment":null,"tuneAndroidQueryStringFragment":null,"tuneCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"a7a684f8","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.13.6","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"78.0.3904.108","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"language":"en","ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"NY","ipCityGeonameId":"5128581","ipCity":"New York","weather":{"windy":"0","currentCondition":"fog","apparentTemperature":3.0,"temperature":2.72,"windSpeed":1,"cloudCoverage":100,"conditions":[{"name":"rain","weight":2},{"name":"fog","weight":4},{"name":"cloudy","weight":0}]},"clientTimestamp":"1575877258.742","clientTimeZoneOffsetInMinutes":300},"utSignals":null,"_mraidCheck":null,"fallbackSdk":null,"externalAdServer":"DFPPremium","externalCreativeId":"138295731846","externalCreativeName":null,"externalPlacementId":"21729797156","externalPlacementName":null,"externalSiteId":"35117722","externalSiteName":"womenshealthmag.com","externalSupplierId":null,"externalSupplierName":null,"externalLineItemId":"5213045655","externalSessionId":null,"externalBundleId":null,"externalCreativeWidth":null,"externalCreativeHeight":null,"externalCampaignId":"2619655431","externalCampaignName":null,"externalAdvertiserId":"4799180064","externalDestinationUrl":null,"clickUrl":"https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvI0ngkCRWrAND4F1LXo3ufdkw2O4htQMnixaKHv9JjjUKuP0mA-vMP1o9QS_J9MCSj7hq19EVf7V2NauCSW8ubHjX_phmg1VGo-s5x1b-FTFgkll7L9vKVo15YpVUGRlHO9cQSrYz7wWkmqnMSLf9l2Nuv9sVtPfnmR9SUIScDM_yfJJlHUmaHavAk7przIf-OVBP3-IN6n8-9BgEsCVCehwma0AAKxL6FpnqYrLxrMPlCVj33-fuNRerZm6NeVbkU4l5lxNVQtawKM0ZPiCqP9q8zyyB6XqOXl5E&sig=Cg0ArKJSzEJNJ-0CxrfeEAE&urlfix=1&adurl=","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":0,"universalAndAppLinksInMRAID":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":770029981,"second":361005812},"skipOffset":null,"_enablePoliteLoading":null,"fontSubsetterIsDisabled":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"_mopubExt":null,"enabledServices":["googleMaps","contentSharing"],"creativeVariantLockSize":null,"vastVersion":null,"standalonePreview":null,"country":"US","productCategoryCode":null,"campaignName":"HDM | D | YNG_Leatherman Tool Group_Leatherman Holiday Gifting_Q4_2019","agencyId":null,"customPartnerAttributeBrandId":null,"suppressCloseButton":null,"preferredClickThroughWindow":"new","expandDirection":"undefined","hostPageLoadId":"7308651634451557"};
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%ecid!', "138295731846"]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['{celtraAccountId}', "ebf0c386"]
,['{celtraAgencyId}', ""]
,['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraAndroidAdvIdTrackingLimited}', ""]
,['{celtraAndroidAdvId}', ""]
,['{celtraCampaignId:int}', "1490915398"]
,['{celtraCampaignId}', "58dd9046"]
,['{celtraCampaignName}', "HDM%20%7C%20D%20%7C%20YNG_Leatherman%20Tool%20Group_Leatherman%20Holiday%20Gifting_Q4_2019"]
,['{celtraCountryCode}', "US"]
,['{celtraCreativeId:int}', "2249315515"]
,['{celtraCreativeId}', "8611d4bb"]
,['{celtraCreativeVariant:urlenc}', ""]
,['{celtraCreativeVariant}', ""]
,['{celtraCustomPartnerAttribute\\[code\\]}', ""]
,['{celtraExternalAdServer}', "DFPPremium"]
,['{celtraExternalAdvertiserId}', "4799180064"]
,['{celtraExternalBundleId}', ""]
,['{celtraExternalCampaignId}', "2619655431"]
,['{celtraExternalCampaignName}', ""]
,['{celtraExternalCreativeId}', "138295731846"]
,['{celtraExternalCreativeName}', ""]
,['{celtraExternalDestinationUrl}', ""]
,['{celtraExternalLineItemId}', "5213045655"]
,['{celtraExternalPlacementId}', "21729797156"]
,['{celtraExternalPlacementName}', ""]
,['{celtraExternalSessionId}', ""]
,['{celtraExternalSiteId}', "35117722"]
,['{celtraExternalSiteName}', "womenshealthmag.com"]
,['{celtraExternalSupplierId}', ""]
,['{celtraExternalSupplierName}', ""]
,['{celtraFeedReportLabel}', ""]
,['{celtraIosAdvIdTrackingLimitedBoolStr}', ""]
,['{celtraIosAdvIdTrackingLimited}', ""]
,['{celtraIosAdvId}', ""]
,['{celtraPlacementId:int}', "2812708088"]
,['{celtraPlacementId}', "a7a684f8"]
,['{celtraPlatformAdvIdTrackingLimited}', ""]
,['{celtraPlatformAdvId}', ""]
,['{celtraProductCategoryCode}', ""]
,['{celtraProto}', "https"]
,['{celtraRandom}', (Math.random()+'').slice(2)]
,['{celtraSessionId}', "s1575877288xe274ddec82d96ex45366548"]
,['{celtraSupplierId:int}', ""]
,['{celtraSupplierId}', ""]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {"Clickthru":"https://ad.doubleclick.net/ddm/clk/454593752;258914067;v"};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/8611d4bb/compiled/web.js";
    var cacheParams = {"v": "4-b02a9dc89e-moatvideo", "secure": 1, "cachedVariantChoices": "W10-", "eventMetadataExperiment": 'newMeta', "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0'};

    
    var trackers = (function() {
    return [
        // 3rd-party tracker (regular)
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros([])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.name == 'videoStart')
        return {urls: macros([])};

    if (event.name == 'videoFirstQuartile')
        return {urls: macros([])};

    if (event.name == 'videoMidpoint')
        return {urls: macros([])};

    if (event.name == 'videoThirdQuartile')
        return {urls: macros([])};

    if (event.name == 'videoComplete')
        return {urls: macros([])};

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},
// 3rd-party tracker (click regular)
function(event) {
    if (event.name === "urlOpened" && event.label === "Clickthru")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "urlOpened" && event.label === "Clickthru")
        return {urls: macros(["https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsvI0ngkCRWrAND4F1LXo3ufdkw2O4htQMnixaKHv9JjjUKuP0mA-vMP1o9QS_J9MCSj7hq19EVf7V2NauCSW8ubHjX_phmg1VGo-s5x1b-FTFgkll7L9vKVo15YpVUGRlHO9cQSrYz7wWkmqnMSLf9l2Nuv9sVtPfnmR9SUIScDM_yfJJlHUmaHavAk7przIf-OVBP3-IN6n8-9BgEsCVCehwma0AAKxL6FpnqYrLxrMPlCVj33-fuNRerZm6NeVbkU4l5lxNVQtawKM0ZPiCqP9q8zyyB6XqOXl5E&sig=Cg0ArKJSzEJNJ-0CxrfeEAE&urlfix=1&adurl="]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };
       

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1575877288xe274ddec82d96ex45366548"};
adLoadingEvent.clientTimestamp = new Date/1000;

trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
    // On IE 8+ URLs containing '%' character sometimes throw an error and
    // stop current JS run loop. One solution  would be to look for that
    // and replace it with '%25', but we've decided not to modify incoming
    // URLs, because this issue is really a combination of two external
    // problems: broken URL on a buggy browser.
    // https://celtra.atlassian.net/browse/MAB-4476
    try {
        var img = new Image;
        
        img.src = url;
    } catch(e) {}
});
    

    
(function () {
    runtimeParams.protoLoading = {};

    var base64img = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEKCBsN103sxwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAC0lEQVQI12NgAAIAAAUAAeImBZsAAAAASUVORK5CYII=";

    runtimeParams.protoLoading.dataLoadStatus = null;
    // Test if CSP is blocking "data:" source for images
    var dataImg = new Image();
    dataImg.onload = function() {
        runtimeParams.protoLoading.dataLoadStatus = "supported";
    };
    dataImg.onerror = function(e) {
        runtimeParams.protoLoading.dataLoadStatus = "blocked";
    };
    dataImg.src = "data:image/png;base64," + base64img;

    runtimeParams.protoLoading.blobLoadStatus = null;
    // Test if CSP is blocking "blob:" source for images
    var url = null;
    try {
        var binaryImg = atob(base64img);
        var length = binaryImg.length;
        var ab = new ArrayBuffer(length);
        var ua = new Uint8Array(ab);
        for (var i = 0; i < length; i++) {
            ua[i] = binaryImg.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: 'image/png'});
        url = URL.createObjectURL(blob);
    } catch(error) {
        runtimeParams.protoLoading.blobLoadStatus = "error";
        runtimeParams.protoLoading.blobErrorMessage = error.name + ': ' + error.message;
        return;
    }
    var blobImg = new Image();
    blobImg.onload = function() {
        runtimeParams.protoLoading.blobLoadStatus = "supported";
        URL.revokeObjectURL(url);
    };
    blobImg.onerror = function(e) {
        runtimeParams.protoLoading.blobLoadStatus = "blocked";
    };
    blobImg.src = url;
})();
    

    function buildPayloadUrl(payloadBase) {
      var pairs = [];
      for (var k in cacheParams)
          pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
      return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);

    
// Request and run payload
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
// Append moat display script
var moatScript = document.createElement('script');
moatScript.src = 'https://z.moatads.com/hearstceltradisplay611166745243/moatad.js#moatClientLevel1=58dd9046&moatClientLevel2=-&moatClientLevel3=a7a684f8&moatClientLevel4=8611d4bb&zMoatFT=CrossScreenBanner&zMoatBR=2b180dca&zMoatMA=-&zMoatAS=DFP&zMoatCV=&zMoatDFPST=35117722&zMoatDFPCP=2619655431&zMoatDFPPL=21729797156&zMoatDFPCR=138295731846&zMoatDFPAD=4799180064&zMoatDFPLI=5213045655';
moatScript.type = 'text/javascript';
script.parentNode.appendChild(moatScript);
var moatPixel = document.createElement('img');
moatPixel.src = 'https://pixel.moatads.com/pixel.gif?e=12&ac=1&bq=0&dz=1&f=0&gh=1&i=CELTRADISPLAY1&t=770029981&de=361005812&d=58dd9046%3A-%3Aa7a684f8%3A8611d4bb&bo=-&bd=-&cs=0';
      
})();
  