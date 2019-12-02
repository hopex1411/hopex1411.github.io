# Simple Advent calendar with message
 _A Pen created at CodePen.io. Original URL: [https://codepen.io/anton-ulrik/pen/pooNxrL](https://codepen.io/anton-ulrik/pen/pooNxrL).

 Just a quick and dirty responsive advent calendar with jQuery that displays a message one word per day. On the 25th the full message is revealed. Works on mobile devices. Uncomment "day=25;" in the js to see the end.

I put this together real quick so there are a couple of negatives:
1) Words can't be too long due to the fixed dimensions of the boxes.
2) Door animation not correct in IE due to its handling of transform origin, if I'm right?
3) You can see the message in the js source... but then again you can also open real advent calendar windows early too and you wouldn't do that either, right? :p