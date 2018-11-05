
exports.isIOS = function isIOS() {
    const { platform } = weex.config.env;
    return platform.toLowerCase() === "ios";
}

exports.isWeb = function isWeb() {
    const { platform } = weex.config.env;
    return typeof window === "object" && platform.toLowerCase() === "web";
}

exports.isAndroid = function isAndroid() {
    const { platform } = weex.config.env;
    return platform.toLowerCase() === "android";
}

exports.isIphoneX = function isIphoneX() {
    const { deviceHeight } = weex.config.env;
    if (isWeb()) {
        return (
            typeof window !== undefined &&
            window.screen &&
            window.screen.width &&
            window.screen.height &&
            parseInt(window.screen.width, 10) === 375 &&
            parseInt(window.screen.height, 10) === 812
        );
    }
    return isIOS() && deviceHeight === 2436;
}

exports.isIphoneXSMax = function isIphoneXSMax() {
    const { deviceHeight } = weex.config.env;
    if (isWeb()) {
        return (
            typeof window !== undefined &&
            window.screen &&
            window.screen.width &&
            window.screen.height &&
            parseInt(window.screen.width, 10) === 414 &&
            parseInt(window.screen.height, 10) === 896
        );
    }
    return isIOS() && deviceHeight === 2688;
}

exports.isIPhoneXR = function isIPhoneXR() {
    const { deviceHeight } = weex.config.env;
    if (isWeb()) {
        return (
            typeof window !== undefined &&
            window.screen &&
            window.screen.width &&
            window.screen.height &&
            parseInt(window.screen.width, 10) === 414 &&
            parseInt(window.screen.height, 10) === 896
        );
    }
    return isIOS() && deviceHeight === 1792;
}

exports.getStatusHeight = function getStatusHeight() {
    if(isIphoneX() || isIPhoneXR() || isIphoneXSMax()) {
        return 64
    }

    if(isIOS()) {
        return 40
    }

    return 0
}