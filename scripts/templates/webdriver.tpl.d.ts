// Type definitions for WebDriver v5
// Project: https://www.npmjs.com/package/webdriver
// Definitions by: auto generated by https://github.com/webdriverio/webdriverio
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node"/>

declare namespace WebDriver {
    type PageLoadingStrategy = 'none' | 'eager' | 'normal';
    type ProxyTypes = 'pac' | 'noproxy' | 'autodetect' | 'system' | 'manual';
    type WebDriverLogTypes = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent';
    type LoggingPreferenceType =
        'OFF' | 'SEVERE' | 'WARNING' |
        'INFO' | 'CONFIG' | 'FINE' |
        'FINER' | 'FINEST' | 'ALL';
    type FirefoxLogLevels =
        'trace' | 'debug' | 'config' |
        'info' | 'warn' | 'error' | 'fatal';
    type Timeouts = 'script' | 'pageLoad' | 'implicit';

    interface ProxyObject {
        proxyType?: ProxyTypes;
        proxyAutoconfigUrl?: string;
        ftpProxy?: string;
        ftpProxyPort?: number;
        httpProxy?: string;
        httpProxyPort?: number;
        sslProxy?: string;
        sslProxyPort?: number;
        socksProxy?: string;
        socksProxyPort?: number;
        socksVersion?: string;
        socksUsername?: string;
        socksPassword?: string;
    }

    interface LoggingPreferences {
        browser?: LoggingPreferenceType;
        driver?: LoggingPreferenceType;
        server?: LoggingPreferenceType;
        client?: LoggingPreferenceType;
    }

    interface Cookie {
        name: string;
        value: string;
        path?: string;
        httpOnly?: boolean;
        expiry?: number;
        secure?: boolean;
    }

    interface ChromeOptions {
        args?: string[];
        binary?: string;
        extensions?: string[];
        localState?: {
            [name: string]: any;
        };
        detach?: boolean;
        debuggerAddress?: string;
        excludeSwitches?: string[];
        minidumpPath?: string;
        mobileEmulation?: {
            [name: string]: any;
        };
        perfLoggingPrefs?: {
            [name: string]: any;
        };
        prefs?: string[];
        windowTypes?: string[];
    }

    interface FirefoxLogObject {
        level: FirefoxLogLevels
    }

    interface FirefoxOptions {
        binary?: string,
        args?: string[],
        profile?: string,
        log?: FirefoxLogObject,
        prefs?: {
            [name: string]: string | number | boolean;
        }
    }

    interface Capabilities {
        browserName?: string;
        browserVersion?: string;
        platformName?: string;
        acceptInsecureCerts?: boolean;
        pageLoadStrategy?: PageLoadingStrategy;
        proxy?: ProxyObject;
        setWindowRect?: boolean;
        timeouts?: Timeouts;
        unhandledPromptBehavior?: string;
    }

    interface DesiredCapabilities extends Capabilities {
        // Read-only capabilities
        cssSelectorsEnabled?: boolean;
        handlesAlerts?: boolean;
        version?: string;
        platform?: string;

        // Read-write capabilities
        javascriptEnabled?: boolean;
        databaseEnabled?: boolean;
        locationContextEnabled?: boolean;
        applicationCacheEnabled?: boolean;
        browserConnectionEnabled?: boolean;
        webStorageEnabled?: boolean;
        acceptSslCerts?: boolean;
        rotatable?: boolean;
        nativeEvents?: boolean;
        unexpectedAlertBehaviour?: string;
        elementScrollBehavior?: number;

        // Grid-specific
        seleniumProtocol?: string;
        maxInstances?: number;
        environment?: string;

        // Selenium RC (1.0) only
        commandLineFlags?: string;
        executablePath?: string;
        timeoutInSeconds?: number;
        onlyProxySeleniumTraffic?: boolean;
        avoidProxy?: boolean;
        proxyEverything?: boolean;
        proxyRequired?: boolean;
        browserSideLog?: boolean;
        optionsSet?: boolean;
        singleWindow?: boolean;
        dontInjectRegex?: RegExp;
        userJSInjection?: boolean;
        userExtensions?: string;

        // RemoteWebDriver specific
        'webdriver.remote.sessionid'?: string;
        'webdriver.remote.quietExceptions'?: boolean;

        // Selenese-Backed-WebDriver specific
        'selenium.server.url'?: string;

        loggingPrefs?: {
            browser?: LoggingPreferences;
            driver?: LoggingPreferences;
            server?: LoggingPreferences;
            client?: LoggingPreferences;
        };

        // Firefox
        firefox_binary?: string;
        firefoxProfileTemplate?: string;
        captureNetworkTraffic?: boolean;
        addCustomRequestHeaders?: boolean;
        trustAllSSLCertificates?: boolean;
        changeMaxConnections?: boolean;
        profile?: string;
        pageLoadingStrategy?: string;
        'moz:firefoxOptions'?: FirefoxOptions;

        // Edge specific
        'ms:inPrivate'?: boolean;
        'ms:extensionPaths'?: string[];
        'ms:startPage'?: string;

        // IE specific
        'ie.forceCreateProcessApi'?: boolean;
        'ie.browserCommandLineSwitches'?: string;
        'ie.usePerProcessProxy'?: boolean;
        'ie.ensureCleanSession'?: boolean;
        'ie.setProxyByServer'?: boolean;
        ignoreProtectedModeSettings?: boolean;
        ignoreZoomSetting?: boolean;
        initialBrowserUrl?: string;
        enablePersistentHover?: boolean;
        enableElementCacheCleanup?: boolean;
        requireWindowFocus?: boolean;
        browserAttachTimeout?: number;
        logFile?: string;
        logLevel?: string;
        host?: string;
        extractPath?: string;
        silent?: string;
        killProcessesByName?: boolean;

        // Safari specific
        'safari.options'?: {
            [name: string]: any;
        };

        cleanSession?: boolean;

        // Chrome specific
        chromeOptions?: ChromeOptions;
        'goog:chromeOptions'?: ChromeOptions;
        mobileEmulationEnabled?: boolean;

        perfLoggingPrefs?: {
            enableNetwork?: boolean;
            enablePage?: boolean;
            enableTimeline?: boolean;
            tracingCategories?: boolean;
            bufferUsageReportingInterval?: boolean;
        };

        // webdriverio specific
        specs?: string[];
        exclude?: string[];

        // wdio-sauce-service specific
        build?: string;

        // Saucelabs w3c specific
        'sauce:options'?: {
            [name: string]: any;
        };

        // Browserstack w3c specific
        'bstack:options'?: {
            [name: string]: any;
        };

        // Testingbot w3c specific
        'tb:options'?: {
            [name: string]: any;
        };

        // Appium General Capabilities
        automationName?: string;
        platformVersion?: string;
        deviceName?: string;
        app?: string;
        newCommandTimeout?: number;
        language?: string;
        locale?: string;
        udid?: string;
        orientation?: string;
        autoWebview?: boolean;
        noReset?: boolean;
        fullReset?: boolean;
        eventTimings?: boolean;
        enablePerformanceLogging?: boolean;
        printPageSourceOnFindFailure?: boolean;

        // Appium Android Only
        appActivity?: string;
        appPackage?: string;
        appWaitActivity?: string;
        appWaitPackage?: string;
        appWaitDuration?: number;
        deviceReadyTimeout?: number;
        allowTestPackages?: boolean;
        androidCoverage?: string;
        androidCoverageEndIntent?: string;
        androidDeviceReadyTimeout?: number;
        androidInstallTimeout?: number;
        androidInstallPath?: string;
        adbPort?: number;
        systemPort?: number;
        remoteAdbHost?: string;
        androidDeviceSocket?: string;
        avd?: string;
        avdLaunchTimeout?: number;
        avdReadyTimeout?: number;
        avdArgs?: string;
        useKeystore?: boolean;
        keystorePath?: string;
        keystorePassword?: string;
        keyAlias?: string;
        keyPassword?: string;
        chromedriverExecutable?: string;
        chromedriverArgs?: string[];
        chromedriverExecutableDir?: string;
        chromedriverChromeMappingFile?: string;
        chromedriverUseSystemExecutable?: boolean;
        autoWebviewTimeout?: number;
        chromedriverPort?: number;
        chromedriverPorts?: (number | number[])[]
        intentAction?: string;
        intentCategory?: string;
        intentFlags?: string;
        optionalIntentArguments?: string;
        dontStopAppOnReset?: boolean;
        unicodeKeyboard?: boolean;
        resetKeyboard?: boolean;
        noSign?: boolean;
        ignoreUnimportantViews?: boolean;
        disableAndroidWatchers?: boolean;
        recreateChromeDriverSessions?: boolean;
        nativeWebScreenshot?: boolean;
        androidScreenshotPath?: string;
        autoGrantPermissions?: boolean;
        networkSpeed?: string;
        gpsEnabled?: boolean;
        isHeadless?: boolean;
        adbExecTimeout?: number;
        localeScript?: string;
        skipDeviceInitialization?: boolean;
        chromedriverDisableBuildCheck?: boolean;
        skipUnlock?: boolean;
        unlockType?: string;
        unlockKey?: string;
        autoLaunch?: boolean;
        skipLogcatCapture?: boolean;
        uninstallOtherPackages?: string;
        disableWindowAnimation?: boolean;
        otherApps?: string;
        uiautomator2ServerLaunchTimeout?: number;
        uiautomator2ServerInstallTimeout?: number;
        skipServerInstallation?: boolean;
        espressoServerLaunchTimeout?: number;

        // Appium iOS Only
        calendarFormat?: string;
        bundleId?: string;
        launchTimeout?: number;
        locationServicesEnabled?: boolean;
        locationServicesAuthorized?: boolean;
        autoAcceptAlerts?: boolean;
        autoDismissAlerts?: boolean;
        nativeInstrumentsLib?: boolean;
        nativeWebTap?: boolean;
        safariInitialUrl?: string;
        safariAllowPopups?: boolean;
        safariIgnoreFraudWarning?: boolean;
        safariOpenLinksInBackground?: boolean;
        keepKeyChains?: boolean;
        localizableStringsDir?: string;
        processArguments?: string;
        interKeyDelay?: number;
        showIOSLog?: boolean;
        sendKeyStrategy?: string;
        screenshotWaitTimeout?: number;
        waitForAppScript?: string;
        webviewConnectRetries?: number;
        appName?: string;
        customSSLCert?: string;
        webkitResponseTimeout?: number;
        remoteDebugProxy?: string;
        enableAsyncExecuteFromHttps?: boolean;
        skipLogCapture?: boolean;
        webkitDebugProxyPort?: number;
    }

    interface Options {
        protocol?: string;
        hostname?: string;
        port?: number;
        path?: string;
        queryParams?: {
            [name: string]: string;
        },
        capabilities?: DesiredCapabilities;
        logLevel?: WebDriverLogTypes;
        logOutput?: string | NodeJS.WritableStream
        connectionRetryTimeout?: number;
        connectionRetryCount?: number;
        user?: string;
        key?: string;
        headers?: {
            [name: string]: string;
        };
    }

    interface AttachSessionOptions extends Options {
        sessionId: string,
        isW3C?: boolean
    }

    function newSession(
        options?: Options,
        modifier?: (...args: any[]) => any,
        proto?: object,
        commandWrapper?: (commandName: string, fn: (...args: any[]) => any) => any
    ): Promise<Client>;

    function attachToSession(
        options: AttachSessionOptions,
        modifier?: (...args: any[]) => any,
        proto?: object,
        commandWrapper?: (commandName: string, fn: (...args: any[]) => any) => any
    ): Promise<Client>;

    function reloadSession(
        instance: Client
    ): Promise<Client>;

    interface ClientOptions {
        capabilities: DesiredCapabilities;
        isW3C: boolean;
        isChrome: boolean;
        isAndroid: boolean;
        isMobile: boolean;
        isIOS: boolean;
        sessionId: string;
    }

    // object with no match
    interface ProtocolCommandResponse {
        [key: string]: any;
    }

    // webdriver.json
    interface SessionReturn extends DesiredCapabilities, ProtocolCommandResponse { }

    interface StatusReturn extends ProtocolCommandResponse {
        ready?: boolean,
        message?: string,
    }

    interface WindowHandle {
        handle: string,
        type: string
    }

    interface RectReturn {
        x: number,
        y: number,
        width: number,
        height: number
    }

    // appium.json
    interface StringsReturn {
        [key:string]: string
    }

    interface SettingsReturn extends ProtocolCommandResponse {
        shouldUseCompactResponses?: boolean,
        elementResponseAttributes?: string,
        ignoreUnimportantViews?: boolean,
        allowInvisibleElements?: boolean,
        enableNotificationListener?: boolean,
        actionAcknowledgmentTimeout?: number,
        keyInjectionDelay?: number,
        scrollAcknowledgmentTimeout?: number,
        waitForIdleTimeout?: number,
        waitForSelectorTimeout?: number,
        normalizeTagNames?: boolean,
        shutdownOnPowerDisconnect?: boolean,
        mjpegServerScreenshotQuality?: number,
        mjpegServerFramerate?: number,
        screenshotQuality?: number,
        mjpegScalingFactor?: number,
    }

    // generated typings
    // ... insert here ...

    interface ClientAsync extends AsyncClient { }
}

type AsyncClient = {
    [K in keyof WebDriver.Client]:
    (...args: Parameters<WebDriver.Client[K]>) => Promise<ReturnType<WebDriver.Client[K]>>;
}

declare module "webdriver" {
    export = WebDriver;
}
