# Personal Notes on React

## Code Academy Lesson Pt 1
uses JSX (javascript syntax extension)
JSx multi-lines need to be wrapped in ()
multi-lines need to begin and end with the same tag
Virtual DOM is how react manages to only rerender things that change which is what makes things so FAST
VIRTUAL DOM == lightweight copy of the DOM
diffing === when a change is made React takes a snapshot of the virtual dom, makes the changes and then compares the new virtual DOM with the old to identify changes.
those changes are then made in the actual DOM.
Only updates what has changed rather than everything which is what makes it so magical
JSX syntax mostly === HTML syntax But
class ===className
{} allows you to write vanilla JS in JSX elements like <h1>{ }</h1>
self-closing tags require />
