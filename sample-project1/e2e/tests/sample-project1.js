describe("calculator app", () => {
  //insert
  it("add to list", () => {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:4200/");
    element(by.css(".inputField")).sendKeys("Armaan Philip");
    element(by.css(".addToListBtn")).click();
    browser.sleep(2000);
    var text = element(by.id("inputText"));
    // console.log("--------------------", text.getText());
    expect(text.getText()).toEqual("Armaan Philip");
    browser.sleep(2000);
  });

  //update
  it("update", () => {
    browser.ignoreSynchronization = false;
    browser.get("http://localhost:4200/");
    element(by.css(".updateBtn")).click();
    element(by.css(".secondaryInput")).clear();
    element(by.css(".secondaryInput")).sendKeys("Armaan Mathew");
    element(by.css(".saveBtn"));
    browser.sleep(3000);
  });

  //delete
  it("delete", () => {
    browser.ignoreSynchronization = false;
    browser.get("http://localhost:4200/");
    element(by.css(".deleteBtn")).click();
    browser.sleep(1000);
  });
});
