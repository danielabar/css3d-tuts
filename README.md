<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [CSS 3D Essentials](#css-3d-essentials)
  - [3D Views](#3d-views)
    - [Vanishing Points](#vanishing-points)
  - [CSS 3D Transformations](#css-3d-transformations)
    - [Translate](#translate)
    - [Scale](#scale)
    - [Rotate](#rotate)
  - [3D Perspective](#3d-perspective)
    - [Perspective Origin](#perspective-origin)
    - [Transform Origin](#transform-origin)
    - [Preserve 3D](#preserve-3d)
  - [Building a 3D Cube](#building-a-3d-cube)
    - [3D Gotcha](#3d-gotcha)
    - [Cube Part 1](#cube-part-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

CSS 3D Essentials
==========

> Learning CSS3 3D with Tuts Plus [course](http://webdesign.tutsplus.com/courses/css-3d-essentials).

## 3D Views

To learn about 3D, download [Blender](http://www.blender.org/) or `brew cask install blender`.

In the 3D world, there are two different views. One is _perspective_, the other is _orthographic_.

Perspective view is how you view the world through your own eyes.
For example, if there are two objects in the world such as cubes that are the exact same size,
but one is placed farther back than the other, the one farther back will _appear_ smaller to you than the one in front.

Orthographic view does not respect the relationship from the view (i.e. user) to the distance.
It's totally flat. This view is useful for positioning elements.

### Vanishing Points

Orthographic view has no vanishing points, whereas perspective view does.
By moving the vanishing points, we can change our perspective.

When using CSS 3D, you effectively have just one vanishing point, or a focal point in your scene.

## CSS 3D Transformations

CSS `transform` property allows us to perform 3 transform functions:
`translate` (move something), `scale`, and `rotate`

### Translate

[HTML](transform.html) | [CSS](transform.css)

For example, to move something along the X axis, use `translateX(numUnits)`

  ```css
  .box {
    width: 100px;
    height: 100px;
    background: red;
    transform: translateX(10em);
  }
  ```

Multiple transform functions can be specified all at once. For example, to move on the Y and X axes:

  ```css
  .box {
    width: 100px;
    height: 100px;
    background: red;
    transform: translateX(50px) translateY(100px);
  }
  ```

So far, just using X and Y axes moves in 2D space. To move in 3D space, need to also make use of the Z axis.

In the browser, your default view is looking down at the scene from the top. Therefore the Z axes gives things depth,
i.e a positive value will move the object closer, whereas a negative value will make the object appear farther away.

However, in the code below adding Z axis will not have any visible effect in the browser:

  ```css
  .box {
    width: 100px;
    height: 100px;
    background: red;
    transform: translateX(50px) translateY(100px) translateZ(200px);
  }
  ```

This is because in the browser, we are in orthographic mode by default, therefore an object being closer or further always looks the same.
i.e. no vanishing points, and no relationship between the size of the object and distance it is from your view.

To make effective use of the Z axis, must tell the browser to go into perspective mode (will be covered next lesson).

The 3 translate functions (X, Y, and Z) can be combined into a single shorthand function `translate3D`,
that accepts X, Y, and Z parameters in order. For example:

  ```css
  .box {
    width: 100px;
    height: 100px;
    background: red;
    transform: translate3D(100px, 300px, 300px);
  }
  ```

### Scale

No measurement units needed, because it automatically uses percentages.
Also supports separate functions for X, Y, and Z axes and a shorthand syntax `scale3D(x,y,z)`

`scaleX(1)` has no effect because 1 = 100%, so object will remain exactly the same size.

`scaleX(2)` will make the width 200% of its current size. So if current width is 100px, this would make it 200px.

`scaleX(.5)` will make it 50%, i.e. half its size.

### Rotate

Rotate function takes number of degrees, for example:

  ```css
  .box {
    width: 100px;
    height: 100px;
    background: red;
    transform: rotateX(40deg) rotateY(30deg) rotateZ(30deg);
  }
  ```

Note that X axis rotation just makes the square look "shorter", being in perspective mode will fix this.

Unlike `translate` and `scale`, shorthand syntax for `rotate` takes 4 arguments.
First three arguments (X, Y, Z) represent a number that is component of the direction vector about which the element is rotated.
Fourth argument is the angle in which the element will be rotated, for example:

  ```css
  .box {
    transform: rotate3D(0,0,0,40deg);
  }
  ```

Leaving the first three args as 0 will have no effect on rotation. Setting X to 1 will make it rotate 40 degrees in the x axis.

[Read this](http://stackoverflow.com/questions/15207351/rotate3d-shorthand) for more details on rotate3D shorthand syntax.

## 3D Perspective

[HTML](perspective.html) | [CSS](perspective.css)

Perspective is applied to the _parent_ element of the div having `transform`.
For example, if `box1` is to be transformed, apply perspective to `container`:

  ```html
  <div class="container">
		<div id="box1" class="box">Box</div>
	</div>
  ```

  ```css
  .container {
    perspective: 500px;
  }
  ```

Value assigned to perspective makes objects go further back as its increased,
makes the distance between the view and the object larger. The further back, the more sublte the 3D effect.

When you create a 3D object, a _Z-Plane_ is created. This is like a rendered scene.
The greater the perspective value, the further back the Z-Plane is pushed.

Note that applying perspective to an element does NOT AFFECT the element itself, it only affects its child elements.
Perspective property only has an effect on 3D transformed elements, i.e elements having `transform` property.

Another way to apply perspective is as a function on the same line as `transform` attribute BUT ORDER MATTERS.
It must appear as the fist function, for example:

  ```css
  #box1 {
    background: red;
    transform: perspective(500) rotateX(40deg) translateX(400px);
  }
  ```

### Perspective Origin

[HTML](perspective-origin.html) | [CSS](perspective-origin.css)

Changing the vanishing point, i.e. changing _our_ perspective. Default perspective origin is center.
But could be for example, top left, top, top right, etc.

Perspective origin css property should be applied to the _same_ element that has the perspective property.
i.e. `perspective` and `perspective-origin` go together and must be on the parent element.

Must supply two values, X and Y to perspective-origin. Default values are `center center` (or 50% 50%).
Can be any measurement units that are compatible with css such as pixels, percentages, etc.
Can also use descriptive positioning like `left`, `top`, etc.

For example to make user's view up to the top and left of the 3D scene:

```css
.container {
  perspective: 500px;
  perspective-origin:left top;
}
```

`perspective-origin:100% 100%` is right bottom.


|   Position   | Percentage |
|:------------:|:----------:|
|   left top   |    0% 0%   |
|   right top  |   100% 0%  |
|  left bottom |   0% 100%  |
| right bottom | 100% 100%  |

### Transform Origin

[HTML](transform-origin.html) | [CSS](transform-origin.css)

By default, transform origin is located in the center of the object being transformed.

`transform-origin` property _must_ go together on same element having `transform` property, they go together.

Units can be pixesl or percentages.
Recommend using percentage because that allows moving origin point in proportion to size of element.

For example, to make origin point the left top corner:

```css
#box1 {
  background: #d81670;
  transform-origin:0% 0%;
  transform: rotate(40deg);
}
```

To make origin the right bottom corner:

```css
#box1 {
  background: #d81670;
  transform-origin:100% 100%;
  transform: rotate(40deg);
}
```

Note: `rotate(40deg)`, with no X, Y or Z specified rotates the object in 2D space.

### Preserve 3D

Allow child elements to be transformed _independently_ of the parent.

In the example below, setting `preserve-3D` on the parent element allows the child to be rotated differently than the parent.

```html
<div id="box1">
  <div id="childEl"></div>
</div>
```

```css
body {
  perspective: 500px;
  perspective-origin: 100% 100%;
}
#box1 {
  transform: rotateX(40deg) translateX(400px);
  transform-style: preserve-3D;
}
#childEl {
  transform: rotateX(80deg);
}
```

## Building a 3D Cube

### 3D Gotcha

[HTML](gotcha.html) | [CSS](gotcha.css)

Translate functions are _relative_ to the object itself.
So if you first rotate an object, say 90deg in the Y axis, then apply translateX, it will move in the Z axis,
which is now the object's _local_ axis.

Most of the time, want to stick with the _global_ axes  (i.e. X moves left to right, Y top to bottom, etc).
To achive this, always translate first, then apply other transformations such as rotate.

### Cube Part 1

[HTML](cube/cube1.html) | [CSS](cube/cube1.css)

Cube div is empty, functions as a container to group all of the "planes" together,
which represent the faces of the cube. In this way, the cube can be rotated, which will rotate all the planes together.

Make all the faces `absolute` positioning, so that transforms can start from same position, this is easier to manage.
