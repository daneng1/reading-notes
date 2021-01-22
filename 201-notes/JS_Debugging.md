# Debugging JS

## Order of Eecution

* To find the source of an error, it helps to know how scripts are processed. The order in which statements are executed can be complex; some tasks cannot complete until another statement or function has been run.

* The JavaScript interpreter uses the concept of execution contexts. There is one global execution context; plus, each function creates a new new execution context. They correspond to variable scope.

* JHavaScript interprets one line of code at a time and when a statement needs data from another function, it stacks the new function onto the previous function. This can create issues with the script.

## Errors

* Errors are called exceptions and whenever the interpreter comes across an error,it will look for error-handling code. 

* Debut the script to see what errors are in your code and then see what is happening in your code.

* Console.log along the way to see if you are geetting expected results form your code.

## DEBUGGING TIPS
* Here are a selection of practical tips that you can try to use when debugging your scripts.
* ANOTHER BROWSER Some problems are browser- specific. Try the code in another browser to see which ones are causing a problem.
* ADD NUMBERS Write numbers to the console so you can see which the items get logged. It shows how far your code runs before errors stop it.
* STRIP IT BACK Remove parts of code, and strip it down to the minimum you need. You can do this either by removing the code altogether, or by just commenting it out using multi-line comments:
`/* Anything between these characters is a cofllllent */`
* EXPLAINING THE CODE Programmers often report finding a solution to a problem while explaining the code to someone else.
* SEARCH Stack Overflow is a Q+A site for programmers. Or use a traditional search engine such as Google, Bing, or DuckDuckGo.
* CODE PLAYGROUNDS If you want to ask about problematic code on a forum, in addition to pasting the code into a post, you could add it to a code playground site (such as JSBin.com, JSFiddle. com, or Dabbl et. corn)and then post a link to it from the forum.

---


[Back to Read Me](../README.md)    