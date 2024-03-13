function executeCode() {
  for (let index = 0; index < 100; index++) {}
  //   console.log(index);

  const username = "galamo";
  const password = "12345";
  console.log(username, password);

  const users = ["hadar", "shai", "tzach"];
  const allusers = users;

  users.push("alex");
  console.log("Code executed!");
}

executeCode();

const globalUser = { domain: "gmail", name: "galamo" };
// object are passed by reference
function addPassword({ ...userObj }, p) {
  if (typeof userObj === "object") {
    userObj.password = p;
  }
}

addPassword(globalUser, 1234);
console.log(globalUser);
