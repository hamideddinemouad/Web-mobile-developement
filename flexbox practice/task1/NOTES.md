To use flexbox effectively:

Set display: flex on the container.
Define flex-direction based on the desired layout.
Adjust justify-content and align-items to control the alignment.
Use flex-grow, flex-shrink, and flex-basis on items to adjust their size based on available space.

when you throw away display flex on a container it's children are becoming flex items all that talk about display block and inline is gone

what a flex items want to do is to stay as small a it can while maintaining everything in one line
flexgrow and flexshrink are by default properities applied to the child
    flexshrink is by default 1 flex-shrink: 1; this is what makes the containers change size when screen size is reduced
    flexgrow is by default 0 flex-grow: 0; never grow items

by default css has no wrap