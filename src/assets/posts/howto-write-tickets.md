One of the first (and quite common) issues that developers can face in a project
is usually the poor or missing ticket description they get from products owners
or managers

## Guidelines

Here are some simple tips for writing better tickets

### Problem description is vital information

It is a common problem that a ticket description actually contain / suggests
a *solution* but never describes the actual *problem*.

It is even more dangerous, if a ticket actually suggests only a *technical
solution* without suggesting the actual issue. On top of that, if this ticket
has been written by a manager with no or few technical background, it will be
revised most probably by the developers.

It is very important to describe the actual problem inside the ticket since a
feature implementation needs to be reasoned. The question why we need
a change is also dead important

#### A no go example:

```sql
Description
-----------

Add a new column `color` in the table 'FRUITS'
```

#### A better example:

```sql
Description
-----------

Customers need to be able to search and choose fruits based on color

Acceptance criteria
-------------------

1. Allow customers to search fruits by color by the following way:
.....
2. Allow customers to store color information for each fruit
.....
```

### Is it a bug?  Write down how to reproduce it

When writing / describing a bug ticket, we need to pay attention on the information we provide to support team. It is also *very* helpful, if we write down the steps how this problem was caused

#### Good example

```sql
Description:
------------
User is unable to enter device control panel. The following error is shown on the screen:
"Device cannot be found. Please contact support team"

The issue can be reproduced as following:
1. Enter APP
2. Click twice on the "Control panel" by using the third button (new tab)
3. The second tab shows an error"
```

#### Bad example

```sql
APP is not working.
```

### Your manager is part of your team - not your customer

Simple as that! If someone wants to be a part of a team, it is also important
to support the others where they lack. I am not personally expecting 
