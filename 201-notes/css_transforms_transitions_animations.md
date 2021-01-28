# Transform

* The transform property comes in two different settings, two-dimensional and three-dimensional. Each of these come with their own individual properties and values.
> `div {`
  `-webkit-transform: scale(1.5);`
     `-moz-transform: scale(1.5);`
       `-o-transform: scale(1.5);`
          `transform: scale(1.5);`
`}`


* Elements may be distorted, or transformed, on both a two-dimensional plane or a three-dimensional plane.
    * Two-dimensional transforms work on the x and y axes, known as horizontal and vertical axes.
    * 
* The `rotate` value provides the ability to rotate an element from 0 to 360 degrees.
* Using the `scale` value within the transform property allows you to change the appeared size of an element.
* The `translate` value works a bit like that of relative positioning, pushing and pulling an element in different directions without interrupting the normal flow of the document.
* Using the `skewX` value distorts an element on the horizontal axis while the `skewY` value distorts an element on the vertical axis. To distort an element on both axes the `skew` value is used, declaring the `x` axis value first, followed by a comma, and then the `y` axis value.
* The `transform-origin` property can accept one or two values. When only one value is specified, that value is used for both the horizontal and vertical axes. If two values are specified, the first is used for the horizontal axis and the second is used for the vertical axis.
* The `perspective` value for each element can be thought of as a vanishing point, similar to that which can be seen in three-dimensional drawings.


--- 

# Transitions

* With CSS3 transitions you have the potential to alter the appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted.
* There are four transition related properties in total, including transition-property, transition-duration, transition-timing-function, and transition-delay.

>`.box {`
  `background: #2db34a;`
  `transition-property: background;`
  `transition-duration: 1s;`
  `transition-timing-function: linear;`
`}`
`.box:hover {`
  `background: #ff7b29;`
`}`

* If multiple properties need to be transitioned they may be comma separated within the transition-property value. Additionally, the keyword value all may be used to transition all properties of an element.
* Not all properties may be transitioned, only properties that have an identifiable halfway point. Here are some common properties that can transition:
    * background-color
    * background-position
    * border-color
    * border-width
    * border-spacing
    * bottomclipcolor
    * crop
    * font-size
    * font-weight
    * heightleft
    * letter-spacing
    * line-height
    * margin
    * max-height
    * max-width
    * min-height
    * min-width
    * opacity
    * outline-color
    * outline-offset
    * outline-width
    * paddingright
    * text-indent
    * text-shadow
    * top
    * vertical-align
    * visibility
    * width
    * word-spacing
    * z-index
* The duration in which a transition takes place is set using the `transition-duration` property.
* The transition-timing-function property is used to set the speed in which a transition will move.

---

# Animations

* Animations provide more control with transitions can't accopmlish the end result.
* It is important to note, as with transitions only individual properties may be animated.
* The `animation-name` property is used with the animation name, identified from the `@keyframes` rule, as the property value.
* To start, animations need a duration declared using the `animation-duration` property.
* A timing function and delay can be declared using the `animation-timing-function` and `animation-delay` properties.
* To have an animation repeat itself numerous times the `animation-iteration-count` property may be used.
* The `animation-play-state` property allows an animation to be played or paused using the `running` and `paused` keyword values respectively.
* The `animation-fill-mode` property identifies how an element should be styled either before, after, or before and after an animation is run.
* Animations, just like transitions, can be written out in a shorthand format. This is accomplished with one `animation `property, rather than multiple declarations.

>`.stage:hover .ball {`
  `animation: slide 2s ease-in-out .5s infinite alternate;`
`}`
`.stage:active .ball {`
  `animation-play-state: paused;`
`}`

---


[Back to Read Me](../README.md)
