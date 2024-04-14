In our retrospectives meeting, a developer raised  the question / desire to
lower our code coverage to 70% from 80%, since he feels we write unit tests
just to "please" our Sonarqube.

I had personally nothing against this, because our goal was never 100% coverage
in the first place. Most people believe that unit tests will help you to
discover bugs and protect you from creating new ones. I start to believe this
isn't true after all. The main purpose and goal in unit testing is actually
based on my experience to fix your code design.

There is a simple example and challenge how to discover this. There is always
a dark place in source code where most developers feel a discomfort and tend to
skip covering it properly with tests. We will take this part of code and we try
find out why the unit tests can refactor it better than we can.

Here is a small example in Typescript / Angular

```typescript
function getSessionStorageData(account: Account) {
  const storageValue = sessionStorage.getItem('__acme_form');
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
  const values = JSON.parse(storageValue);
  // Check if stored data is older than 10 minutes ago
  const isOlderThan10Minutes = values?.created < tenMinutesAgo;
  if (values && !isOlderThan10Minutes) {
    values.buyForOther = this.buyForOtherValues[0];
    values.birthDate = values.birthDate ? new Date(values.birthDate) : null;
    values.validFrom = values.validFrom ? new Date(values.validFrom) : null;
    if (values.firstName || values.lastName || values.birthDate) {
      values.buyForOther = this.isReservationForSelf(account, values)
        ? this.buyForOtherValues[0]
        : this.buyForOtherValues[1];
    }
    return values;
  }
  return {};
}
```

Before proceeding let's ask ourselves the following questions:

*   Should this method be covered with tests?
*   Is it difficult to cover this method with tests?

## Unit tests love clean functions

After writing several tests during the day, you find out:

*   You want to provide all inputs needed into a function you want to test
*   You want to always get a result back from the method you test
*   You don't want any suprises with concurrency and flaky tests

One way to satisfy all the requirements above is a clean function. How to write
a clean function? Simply follow the rules below.

### Step 1: MUST have only ONE goal

```typescript
// ❌ do not do this
function submitAccount(submitForm: SubmitForm): Account {

}

// ✅ do this instead
function submitAccount(submitForm: SubmitForm): Account {

}
```

### Step 2: MUST have an output

```typescript
// ❌ do not do this
async function submitAccount(submitForm: SubmitForm): void {
  const response = await http.post(submitForm);
  this.account = convertToAccountView(response.body.account);
}

// ✅ do this instead
function submitAccount(submitForm: SubmitForm): AccountView {
  const response = await http.post(submitForm);
  return convertToAccountView(response.body.account);
}
```

### Step 3: MAY have arguments (input)

```typescript
// ❌ do not do this
function submitAccount(submitForm: SubmitForm): Account {

}

// ✅ do this instead
function submitAccount(submitForm: SubmitForm): Account {

}
```


### Step 4: MUST be deterministic

```typescript
// ❌ do not do this
function multiply(one: Number, another: Number): Account {
  const random = Math.floor(Math.random() * 100);
  return one * another + random;
}

// ✅ do this instead
function submitAccount(one: Number, another: Number): Account {
  return one * another;
}
```

### Step 5: MUST be stateless
