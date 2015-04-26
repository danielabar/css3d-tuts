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

So far, just using X and Y axes moves in 2D space. To move in 3D space, need to also make use of the X axis.

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
