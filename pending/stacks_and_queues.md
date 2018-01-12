# Describing Stacks and Queueueueueueus

Both stack and queues are data storage structures/methods but they do differ in several important ways.

Stacks function according to a LiFo structure, last in is first out.  This is akin to stacking cafeteria trays or sheets of paper; you have to pull off the top when attempting to access the contents of each individual item.  New data is added to the top of the stack and must be removed before the underlying data point can be accessed.  This means that a data point in a stack can be accessed through either a .push to add to the stack or a .pop to remove an item from the stack.  Stacks are thus well suited to be worked through using recursion.

Queues on the other hand function according to a FiFo structure, first in is first out.  In other words, the data that has been in the queue the longest will be the first data to be accessed.  This is akin to traditional queues such as a line of people waiting to be served by a bank teller.  When new data is added to a queue it is enqueued to the back of the queue (or line) and when we are ready to begin working on the queue we dequeue from the front of the queue (or line).  
