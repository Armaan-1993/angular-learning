exports.config = {
    framework: "jasmine",
    seleniumAddress: "http://localhost:4444/wd/hub",
    specs: ["helloWold.js"],
    chromeOnly: true,
    directConnect: true,
};
