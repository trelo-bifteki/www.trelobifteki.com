## Preface

At the company I was working there was a specific application and "mechanism" for
performing specific decisions / actions. These actions had several conditions in order to
be invoked and it was possible that an action had several smaller ones.

The tech team was having before issues with the code related with this feature. They did the
following refactoring:

* Moved all actions into the database
* Created a UI tool for administrating these action
* An action was possible to be assigned to a "group" of actions

## Problem

Adapting and refactoring this solution had a great impact in the database and
all actions. A single renaming / refactoring on the database schema needed
to update all queries stored in the tables. This refactoring took me over 3 days to find and
adapt all queries stored.


```sql
action
-------------------
id | action_name  |
---+--------------+
 1 | open network |
---+--------------+

action_sql
---+------------------------------------------------+
id | acton_sql                                      |
---+------------------------------------------------+
 1 | UPDATE network SET enabled = 1 WHERE ID = :1   |
 2 | UPDATE operator SET enabled = 1 WHERE ID = :2  |
---+------------------------------------------------+

action_action_sql
---+-----------+---------------+
id | action_id | action_sql_id |
---+-----------+---------------+
 1 | 1         | 1             |
 2 | 1         | 2             |
---+-----------+---------------+
```

The schema above seems easy at first sight, but after we add 50 actions with over 200 SQL
queries and many groups and inter-dependencies, it becomes very hard to maintain since all
adaptations need to be done in the database.

At the end, developers built a UI in order to maintain this database schema. But still, changes
in actions took days and maintainability was low.

## Refactoring

### 1st step - Define business code

I was definitely sure that I needed to find a solution that SQL queries should go back
in the source code and services bean.  This way the code and backend will translate all
operations in the database into real business operations. Instead of maintaining

```sql
UPDATE operator SET enabled = false WHERE ID = 1;
```

We should wrap this query into reusable code:

```java
public interface OperatorService {

  /**
   * Disable a specific operator by ID
   */
  void  disableById(final Long id);
}
```

### 2nd step - The actions mechanism

After understanding that actions could also include "sub-actions" inside them, I started
thinking about the command pattern. This will allow me to write composite commands
and organize code much better.

```java
public interface NetworkAction {

	@NonNull
	String getLabel();

	boolean supports(@NonNull final Network network);

	void execute(@NonNull final Network network);
}
```

The _supports_ method checks if the action is available for the network provided.
A simple implemmentation of the interface abve would be the following:

```java
@Component
public class DisableNetworkAction implements NetworkAction {

	private final NetworkService networkService;

	@Override
	public String getLabel() {
		return "Disable network";
	}


	public DisableNetworkAction(final NetworkService networkService) {
		this.networkService = networkService;
	}

	@Override
	public boolean supports(final Network network) {
		return !network.isDisabled();
	}

	@Override
	public void execute(Network network) {
		networkService.disableById(network.getId());
	}

}
```

This pattern used differs actually from the command pattern, since all actions
are stateless. The good part is that this way I can use dependency injection
and organize my beans. The bad part is that rollback cannot be implemented and
was removed.

The fact was that rollback was not even used anymore and all actions had a
a way to revert the previous one. This way I was able to convince business to
remove this feature.

### 3rd step - conditions builder

After building complicated actions I noticed that the conditions were getting
complicated with many sub conditions and over 5 lines of boolean expressions.
In order to make this more readable, I tried to utilize a __builder__ for
conditions to transform expressions into a domain-specific language.

After refactoring, a complicated action was looking like the example below:

```java
public class ShutdownNetworkAction implements NetworkAction {

  private final SetStatusClosedNetworkAction setStatusClosedNetworkAction;
  private final DisableNetworkAction disableNetworkAction;

  @Autowired
  public ShutdownNetworkAction(final SetStatusClosedNetworkAction setStatusClosedNetworkAction,
                               final DisableNetworkAction disableNetworkAction) {
    this.disableNetworkAction = disableNetworkAction;
    this.setStatusClosedNetworkAction = setStatusClosedNetworkAction;
  }

  @Override
  public String getLabel() {
    return "Shutdown network";
  }

  @Override
  public boolean supports(Network network) {
    return ConditionBuilder.create(network)
      .isValid()
      .supportAll(disableNetworkAction, setStatusClosedNetworkAction)
      .build();
  }

  @Override
  public void execute(Network network) {
    setStatusClosedNetworkAction.execute(network);
    disableNetworkAction.execute(network);
  }
}
```

## Summary

Here are few thoughts from what I learned from this refactoring

* Business code belongs in services and need to be reusable
* No queries shall be stored in a database schema
* If data are not modified by end-users, maybe it is not a agood idea to
  store them in database
* A _command pattern_ can help a lot when actions are composite and consist
  of smaller sub-actions
* The *builder pattern* can help you build your own domain-specific language
