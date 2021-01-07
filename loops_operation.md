# Loops and Operations

---

## Operators

### Comparison Operators

Evaluate ba sitaution bu comparing one value in the script to another value. The resulkt is a Boolean or true/fale statement.

- `==` is equal to
- `===`strict equal to
- `!=`is not equal to 
- `!==`strict not equal to
- `>`greater than
- `<`less than
- `>=` greater than or equal
- `<=` less than or equal

### Logical Operators

While comparison operators usually return only one value, logical operators allow you nto compare the results of more than one comparison operator.

- `&&` **Logical And** will test more than one condition
- `||` **Logical Or** tests atleast one condition
- `!` **Logical Not** this takes asingle Boolean value and inverts it.

## Loops

Loops check a condition. If it returns true, a code block will run. Then the condition is checked again and if it is true again it will run the code block again. 

There are three type of loops, **FOR, WHILE and DO WHILE**.

- FOR = run a code a specific number of times.
- WHILE = run a code an unknown number of times and it will continue to run as long as the condition is true
- DO WHILE = similar to WHILE but will run atleast once even if the result is false.

### Loop Counters

A FOR loop uses a counter as a condition. This instructs the code to run a specific number of times.
>` for (var i =0; 1 <10; i++) {
    document.write(i);
}`

- Initialization - create a variable and set it to zero `var i =0`
- Condition - run the loop until it reaches this counter `1 <10`
- Update - every time the loop runs, add 1 to the counter `i++`

### While Loops

