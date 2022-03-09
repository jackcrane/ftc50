---
sidebar_position: 5
---

# Connecting the Shaft

So we have our super advanced mounting block (its a rectangle i know), but let's give it more of a use.

## Create a new sketch on our existing geometry

We already have our rectangle, and we need to be able to connect our shaft to it, so we are going to create a new shaft that is reliant on the existing geometry.

Start by creating a sketch in the same way you have before, but instead of selecting the 'top' plane as the sketch plane, select one of the planes on the rectangle. Because everything we have done is a square, it really doesnt matter which of the side planes we select, but because I imposed the arbitrary constraint that I want the shaft to be in the direction of the `X` axis, I will select one of the planes on the `YZ` plane.

Finally, right-click the 3d manipulator (the 3d cube in the top right) and select the last option in the dialogue box "View normal to sketch plane".

<video style={{width: '100%'}} controls muted>

  <source src="/img/onshape/3-sketch-on-geometry.mp4" type="video/mp4" />
</video>

## Drawing the shaft shape

Recall the shaft has an OD of 5mm and is hexagonal in shape, so we are going to draw a 'circumscribed polygon'. This tool is hidden in the down arrow menu next to the polygon tool (a pentagon in the toolbar). If you can't find it use the search box.

The tool will start by having you select the centerpoint of the polygon, then the number of sides. Fortunately, the tool defaults to a hexagon, so once that menu pops up, you can just click.

We also want it to be centered over the rectangle. OnShape makes this very easy, and you will notice that it will automatically pull your cursor towards the centerpoint.
