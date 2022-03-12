---
sidebar_position: 6
---

# Finishing our part

Although you can now print this model and attach it to your theoretical robot, but there are a handful of important things we havent considered yet, like structural integrity and manufacturing possibility

When working with any kind of part, sharp corners are not good because they pinpoint force rather than spreading it out over a large area. We have many pinch points on our part that the mechanical stress would be naturally directed to, and running a physics simulation demonstrates exactly where our part would feel the most stress:

<video style={{width: '100%'}} controls muted autoplay loop>

  <source src="/img/onshape/5-stress-analysis-no-fillet.mp4" type="video/mp4" />
</video>

(Analysis calculated by OnScale)

## Adding fillets

Fillets are extremely common and are a great way to add structural rigidity without having to add a lot of extra parts. All a fillet does is to add a small radius to a corner which distributes the stress over a much larger area.

We are going to add an 8mm fillet to the sharp inner corners of our part, where the cylinder that holds the hex shaft meets the box that mounts to the GoBilda pattern.

Select the fillet tool in the toolbar (right next to the thicken button), then select the lines that define the sharp edges (**make sure you select an edge, not a face**). In the 'radius' input, enter 8mm and let OnShape calcuate the corner. Finally once your done, click the green check box to save your work.

<video style={{width: '100%'}} controls muted>

  <source src="/img/onshape/5-adding-fillets.mp4" type="video/mp4" />
</video>

Now let's check out the structural integrity of our part:

<video style={{width: '100%'}} controls muted autoplay loop>

  <source src="/img/onshape/5-stress-analysis-with-fillet.mp4" type="video/mp4" />
</video>

You can see how the red high stress point is more spread out and the part deforms less when put under more extreme stress.

## Finished!

Congrats! You now have a fundamental idea of how to use OnShape. This part can now be exported as an STL (right-click on the part, click export).
