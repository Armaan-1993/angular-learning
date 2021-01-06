describe("calculator app", () => {
  it("first test", () => {
    browser.get("http://juliemr.github.io/protractor-demo/");
    element(by.model("first").sendKeys("2"));
    browser.sleep(3000);
  });
});
