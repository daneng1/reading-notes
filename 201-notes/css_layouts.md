# CSS Layouts

## A key concept with page layout is that CSS treats all HTML elements as if they are inside a box. Often an element may be inside several nested boxes and those parent/grandparent boxes can influence the style that is applied to the boxes.

* Some elements like Divs are containing elements and contain several elements.

### Browsers display pages in normal flow unless you specify relative, absolute, or fixed positioning.

* Normal flow
    *Every block-level element appears on a new line, causing each item to appear lower down the page than the previous one. Even if you specify the width of the boxes and there is space for two elements to sit side-by- side, they will not appear next to each other. This is the default behavior (unless you tell the browser to do something else).
* Relative Positioning
    * This moves an element from the position it would be in normal flow, shifting it to the top, right, bottom, or left of where it would have been placed. This does not affect the position of surrounding elements; they stay in the position they would be in in normal flow.
* Absolute Positioning
    *This positions the element in relation to its containing element. It is taken out of normal flow, meaning that it does not affect the position of any surrounding elements (as they simply ignore the space it would have taken up). Absolutely positioned elements move as users scroll up and down the page.
* Fixed Positioning
    *This is a form of absolute positioning that positions the element in relation to the browser window, as opposed to the containing element. Elements with fixed positioning do not affect the position of surrounding elements and they do not move when the user scrolls up or down the page.
* Floating Elements
    *Floating an element allows you to take that element out of normal flow and position it to the far left or right of a containing box. The floated element becomes a block-level element around which other content can flow.
* `<div>` elements can be used to contain elements so you can easliy group together sections of a page.
* Float can be used to push content to the left or right side of the page.
    * Cancel float by using reset both.

### You can make pages layouts to be fixed width or liquid.

* Liquid layout designs stretch and contract as the user increases or decreases the size of their browser window. They tend to use percentages.
* Fixed width layout designs do not change size as the user increases or decreases the size of their browser window. Measurements tend to be given in pixels.
* Its a good idea to set page width within 960-1000 pixels.
* Grids help create professional and flexible page designs. 
* CSS Frameworks provide rules for common tasks. 

---


[Back to Read Me](../README.md)