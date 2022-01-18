function setup() {
createCanvas(600,800);
  // put setup code here
}

function draw() {
c1 = color(0,0,39);
c2 = color(137,207,240);
for(let y=0; y<height; y++) {
n = map(y,0,height,0,1);
let newc = lerpColor(c1,c2,n);
stroke(newc);
line(0,y,width,y);
}
//ground
noStroke();
  fill(92,64,51);
  rect(1,750,598,155);
  fill(0,0,39);
//swing
fill(193,154,107);
  rect(100,540,3,150);
  rect(190,540,3,150);
  rect(97,690,100,15);
  fill(170,169,173);
  rect(40,540,220,12,12);
  rect(35,540,12,220,12);
  rect(250,540,12,220,12);
  
//stick fugure
  stroke(255);
  fill(255);
  circle(500,600,30);
  line(500,600,500,650);
  line(465,630,500,620);
  line(500,620,535,630);
  line(475,660,500,650);
  line(525,660,500,650);
  line(475,660,475,670);
  line(525,660,535,670);
//cap 
arc(550,600,50,80,15,PI+QUARTER_PI,CHORD);
//shoes
   fill(255,0,0);
   stroke(255,0,0);
   ellipse(470,670,13,4);
   ellipse(530,670,13,4);
//skateboard
  stroke(255);
  strokeWeight(3);
  line(475,690,535,685);
  noFill();
  arc(475,674,41,32,HALF_PI,PI);
  arc(528,669.8,41,32,12.33,HALF_PI);
  line(528,686,529,695);
  line(475,690,476,698);
 


  
  
  // put drawing code here
}