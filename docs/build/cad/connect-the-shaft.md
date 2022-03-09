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

<video style={{width: '100%'}} controls muted>

  <source src="/img/onshape/3-drawing-hex.mp4" type="video/mp4" />
</video>

I also set the hexagon to be 4mm above the top of the box we just extruded. This is an arbitrary measure but seems to put a decent amount space in.

Notice how the yellow dashed lines show how the shape you are drawing is in the same line as something else, in this case, the origin point.

## Drawing the shaft holder

So now we have a hexagonal hole to hold our shaft, but it is just suspended in air. We need to add some geometry that the hole can actually go through.

In a new sketch, Let's create a circle that as the same centerpoint as the hexagon with a 10mm diameter.

Our new sketch should have the same sketch plane as the sketch with the hexagon.

<video style={{width: '100%'}} controls muted>

  <source src="/img/onshape/3-hex-block.mp4" type="video/mp4" />
</video>

## Extruding the shaft holder

Recall that the box we created is 25mm long, so we are going to use the thicken tool on the circle we just made, and set distance 1 to be 25mm.

You will most likely notice that as you add thickness, it will be going the wrong direction. This is easily fixed by clicking the 2 arrows next to the distance input box. This will change the direction of the extrusion.

We are also trying to add geometry, not create new, so in the top of the thicken tool interface, select 'Add'. Your shape will become red because you cannot add to nothing, so check the box that says "Merge with all". Finally, click the green check box to save your work.

<video style={{width: '100%'}} controls muted>

  <source src="/img/onshape/3-extrude-hex-block.mp4" type="video/mp4" />
</video>
