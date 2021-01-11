describe("calculator app", () => {
  //insert
  it("add to list", () => {
    browser.get("http://localhost:4200/");
    element(by.css(".inputField")).sendKeys("Armaan Philip");
    element(by.css(".addToListBtn")).click();
    browser.sleep(2000);
  });

  //delete
  it("update", () => {
    browser.get("http://localhost:4200/");
    element(by.css(".updateBtn")).click();
    element(by.css(".secondaryInput")).clear();
    element(by.css(".secondaryInput")).sendKeys("Armaan Mathew");
    element(by.css(".saveBtn"));
    browser.sleep(3000);
  });

  //update
  it("delete", () => {
    browser.get("http://localhost:4200/");
    element(by.css(".deleteBtn")).click();
    browser.sleep(1000);
  });
});
