// Creating a promise

const simplePromise = (condition) => {
  return new Promise((resolve, reject) => {
    if (condition === true) {
      resolve("This was succesful");
    } else {
      reject("this was not succesful");
    }
  });
};

// simplePromise(false)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const delayFunction = (ms) => {
  return new Promise((resolve, reject) => {
    if (ms === true) {
      reject("Time cannot be negative or zero");
    } else {
      setTimeout(resolve, ms);
    }
  });
};

const iterateWithAsyncAwait = async (array) => {
  //loop through each element of the array
  for (eachElement of array) {
    try {
      console.log(eachElement);
      // wait for one second
      await delayFunction(-1000);
      // wait for one second
    } catch (error) {
      console.log(error);
    }
  }
};

// iterateWithAsyncAwait([4,20,56,37])

const awaitCall = async () => {
  try {
    // fetching a single
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const dataObjects = await res.json();
    console.log(dataObjects);
  } catch (err) {
    console.log(err);
  }
};
// awaitCall();

const log1 = async () => {
  await delayFunction(1000);
  console.log("first message");
};

const log2 = async () => {
  await delayFunction(1000);
  console.log("second message");
};

const log3 = async () => {
  await delayFunction(1000);
  console.log("third message");
};

const chainedAsyncFunction = async () => {
  await log1();
  await log2();
  await log3();
};

// chainedAsyncFunction();

const concurrentRequests = async () => {
  //parallel calls
  try {
    const [todosData, usersData] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/todos"),
      fetch("https://jsonplaceholder.typicode.com/user"),
    ]);
    const [todos, users] = await Promise.all([
      todosData.json(),
      usersData.json(),
    ]);
    console.log(todos);
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

// concurrentRequests();

const parallelCalls = async (urlArray) => {
  try {
    const dataJson = await Promise.all(
      urlArray.map((eachUrl) => {
        return fetch(eachUrl);
      })
    );
    /// urlArray .map returns something like [fetch("https...."),fetch("https:...")]
    const data = await Promise.all(
      dataJson.map((eachData) => {
        return eachData.json();
      })
    );
    // console.log(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

parallelCalls([
  "https://jsonplaceholder.typicode.com/todos",
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
]);
