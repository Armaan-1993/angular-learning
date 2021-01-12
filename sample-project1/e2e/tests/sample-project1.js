
const item = {
  name : "Armaaaaaan",
  id: "LQX65aCPjicM3mFSbIm8",
  newName: "New Armaan mathew"
}


describe("calculator app", () => {
  //insert
  it("add to list", () => {
    browser.ignoreSynchronization = true;
    browser.get("http://localhost:4200/");
    element(by.css(".inputField")).sendKeys(item.name);
    element(by.css(".addToListBtn")).click();
    browser.sleep(2000);
    var text = element(by.id("inputText"));
    // console.log("--------------------", text.getText());
    expect(text.getText()).toEqual(item.name);
    browser.sleep(2000);
  });

  //update

  it("update", async() => {
    browser.ignoreSynchronization = false;
    browser.get("http://localhost:4200/");
    const updateBtn = element.all(by.id("edit-button"));
    // console.log("textxtxttx", updateBtn.get(0).getText());
    // console.log("iddddddd", updateBtn.getText());
    updateBtn.get(0).click()
    // updateBtn.get(0).click
    browser.sleep(2000);
    element(by.css(".updateBtn")).click();
    element(by.css(".secondaryInput")).clear();
    element(by.css(".secondaryInput")).sendKeys(item.newName);
    console.log('1111111111111111111111')
    // element.all(by.css(".list-container")).then(function(items) {
    //     console.log(items);
    //     expect(items.length).toBe(3);
    //     expect(items[0].getText()).toEqual(item.id);
    //   });
    browser.sleep(2000);
    const saveBtn = element.all(by.id("save-button"));
    saveBtn.get(0).click();
    // element(by.css(".saveBtn")).click();
    browser.sleep(2000);


    console.log('---------------------------------')

    element.all(by.css('.input-name-val')).map(function(elm) {
        return elm.getText();   
      }).then(function(texts) {
          console.log(texts)
      });

    const nameIdentifier = element.all(by.css(".input-name-val"));
    console.log('=================================')
    console.log(await nameIdentifier.get(0).getText())
    console.log('+++++++++++++++++++++++++++++++++++++++')

    // console.log("texttxttxtxttx to", );
    // const name = nameIdentifier.get(0).getText()
        // browser.sleep(3000);
    //     console.log("name", name);
    // browser.wait(() => {
    //     return nameIdentifier.isPresent().then(isPresent => isPresent)
    // }, 3000);
    browser.sleep(2000)


    // expect(nameIdentifier.getText()).toContain(item.name)

  });

  //delete
//   it("delete", () => {
//     browser.ignoreSynchronization = false;
//     browser.get("http://localhost:4200/");
//     element(by.css(".deleteBtn")).click();
//     browser.sleep(1000);
//   });
});
