## Problem

An administrating application included an "advanced search" query for finding routes.
There were around 10 search criteria that could be combined together.
Also this query was "touching" around 10 tables in the database.

Previous code was looking something like this before:

```java
public class OperatorController {

  @Autowired
  private OperatorRepository operatorRepository;

  public List<Operator> search() {
    if (!nameInputField.isEmpty() && !classificationField.isEmpty() && !availabilityField.isEmpty()) {
      return operatorRepository.findByNameAndClassificationAndAvailability(nameInputField,
	    classificationField, availabilityField);
	} else if (!nameInputField.isEmpty() && !classificationField.isEmpty()) {
      return operatorRepository.findByNameAndClassification(nameInputField, classificationField);
    } else if (!nameInputField.isEmpty()) {
      return operatorRepository.findByName(nameInputField);
    } else {
      return Collections.emptyList();
    }
  }
}
```

Different combinations were causing writing a unique query and adding a new "if"
clause in code. Removing / Adding search criteria was quite hard and took much
time.

## Refactoring

### Introduce service bean

The first thing that was clear to me was to separate controller from service logic.
I tried to ban all repository beans from controllers and introduce a service bean
between them. This way, I could list all operations on Operator domain object into
a single bean.

The method would look now like this:

```java
public class OperatorService {

  private final OperatorRepository operatorRepository;

  @Autowired
  public OperatorService(final OperatorRepository operatorRepository) {
    this.operatorRepository = operatorRepository;
  }

  public List<Operator> search(final Map&lt;String, Serializable&gt; fields) {
    if (fields.contains("name") && fields.contains("classification") && fields.contains("availability")) {
      final Classification classification = (Classification) fields.get("classification");
      final Availability availability = (Availability) fields.get("availability");
      final String name = fields.get("name").toString();
      return operatorRepository.findByNameAndClassificationAndAvailability(name,
        classification, availability);
    } else if (fields.contains("name") && fields.contains("classification")) {
      return operatorRepository.findByNameAndClassification(name, classification);
    } else if (...) {
      ....
    } else {
      ...
    }
  }

}

```

Still the main trouble is this control structure that has no sense and feels
like a boilerplate code.

In the beginning I moved all fields into a simple map. If clauses were still
infecting the service bean, but I separated business logic from the UI at least

### Extensive queries

The main reason that I had to keep the "if" clauses were actual boundaries in the way
we were writing SQL queries with JPA and @Query annotations. After some research I
crossed upon the JPA Metamodel and criteria as a way to programmatically write
all SQL queries

After some tests and experiments I noticed that JPA criteria were relatively complicated
and not straight-forward. For fun and profit, I decided to create my own way on top of
this solution. My goal was to write something like this:

```java
select().from(OperatorEntity.class).where(OperatorEntity_.name)
   .isEqualToIgnoreCase("test")
   .findOne();
```

On top of this builder, I was able to wrap it with a <i>QueryBuilder</i> that checks nulls
and dynamically builds the query accordingly

```java
SearchQueryBuilder
  .fromFields(fields)
  .resultingEntityClass(OperatorEntity.class)
  .where(OperatorEntity_.name)
  .isEqualToIgnoreCase("name")
  .findOne()
```

After this refactoring, the final code was looking something like this:

```java
  public class OperatorService {

    private final OperatorRepository operatorRepository;
    private final OperatorEntityToOperatorConverter converter;

    @Autowired
    public OperatorService(final OperatorRepository operatorRepository,
      final OperatorEntityToOperatorConverter converter) {
      this.operatorRepository = operatorRepository;
      this.converter = converter;
    }

    public List<Operator> search(final Map<String, Serializable> fields) {
      return SearchQueryBuilder.fromFields(fields)
        .resultingEntityClass(OperatorEntity.class)
        .where(OperatorEntity_.name).isEqualToIgnoreCase("name")
        .and(OperatorEntity_.classification).isEqualByObject("classification")
        .and(OperatorEntity_.availability).isEqualToObject("availability")
        .map(OperatorEntityToOperatorConverter::convert)
        .find();
    }
  }

```

Much better, right?