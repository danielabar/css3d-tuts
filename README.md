CSS 3D Essentials
==========

> Learning CSS3 3D with Tuts Plus [course](http://webdesign.tutsplus.com/courses/css-3d-essentials).

## 3D Environment

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

## Using CSS3D Transformations

CSS `transform` property allows us to perform 3 transform functions:
`translate` (move something), `scale`, and `rotate`

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
