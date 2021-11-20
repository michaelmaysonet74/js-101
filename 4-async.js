/**
 * Callbacks - Less common these days
 */

function callback() {
  // Do some computation after some arbitrary async
  // process has been fulfilled.
  console.log("Callback...");
}

// Common function that still see some use in modern JS codebases.
// This will execute the `callback` after 1 second.
setTimeout(callback, 1000);
// => Callback...

/**
 * Promises
 */

function promise(shouldReject = false, ms = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(
      shouldReject ? () => reject("FAIL") : () => resolve("SUCCESS"),
      ms
    );
  });
}

const success = promise(false, 2000);
success.then((status) => console.log({ status }));
// => { status: 'SUCCESS' }

const fail = promise(true);
fail
  .then(() => console.log("Should never be called..."))
  .catch((error) => console.log({ error }))
  // => { error: 'FAIL' }
  .finally(() =>
    console.log(
      "`.finally` will always be executed, regardless if the Promise resolved or was rejected."
    )
  );
// => `.finally` will always be executed, regardless if the Promise resolved or was rejected.

/**
 * Async/Await - Sugar coated Promises
 */

const concurrent = async (shouldFail = false, log = true) => {
  try {
    const [s1, s2] = await Promise.all([success, promise(false, 1500)]);

    if (shouldFail) {
      await fail();
    }

    if (log) {
      console.log({ s1, s2 });
    }

    return `s1: ${s1} -- s2: ${s2}`;
  } catch (err) {
    console.log("ConcurrentError");
  }
};

concurrent();
// => { s1: 'SUCCESS', s2: 'SUCCESS' }

concurrent(true);
// => ConcurrentError

concurrent(false, false).then((value) => console.log(value));
// => s1: SUCCESS -- s2: SUCCESS
