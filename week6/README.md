### Essential CSS concepts

1. Display property
2. Box model
3. Box sizing
4. Positions
        top
        bottum
        left
        right
5. Responsive Layouts
6. Media queries
7. Flexbox
8. Grid


### CSS Selectors

1. TagName selector
2. Class attribute
3. Id attribute

###

1. Positions 
    1. static
    2. relative    =>  Relative to its current position
    3. absolute     =>  Relative to its positioned parent
    4. sticky
    5. fixed

### Media Queries
            screen          and             min-width
            print           or              max-width
            speech          not             orientation etc..
            al
                |            |                     |
@media      media-type      operator        (media-feature)


### CSS Units

1. px   (16px)
2. rem & em     
        em (kem = k * actual size)
        rem (krem = k * parent actual size)
3. vh
4. vw  (10vw = 10% of total view width)
5. %   (10% = 10% of parent size)

### Layouts => structure of a document

                    navbar   
        -------------------------------
                    header
        -------------------------------
        sidebar |   main     |  section
        --------|------------|---------
                |   footer   |

1. we can create layouts by using 2 ways
        1. Grid
        2. Flexbox

1. Flexbox Properties
        display : flex;
        flex-direction : column;
        justify-content : center;  
                            |
                         flex-end
                         flex-start
                         space-evenly
                         space-between
                         space-around
                         |
        align-items : center;
        flex-grow : 1;
        flex-shrink : 2;
        flex-wrap : wrap;
        flex-basis : 300px;     => initial width


### CSS Colors

        1. named colors
        2. hexa-decimal (#6digits)      2 => red  2 => green  2=> blue
        3. rgb()
        4. hsl()            # hue-saturation-light

* 255 is the maximum value for any color.

### CSS Variables

        1. use :root within this create variables.
        2. every variable starts with --
        3. Ex : --botton-color : #;
        4. To use variables use var() function.

### Responsive text
        1. use clamp() function
        2. it accepts 3 parameters (min, 10vw, max)
        4. Ex : font-size : clamp(1rem, 10vw, 5rem)

### Responsive Image
        1. use max-width : <fixed size>

### CSS Grid
        When we want to organize the data vertically and horigebtally we uses this grid

                        header
        ___________________________________
                |        content1
                |__________________________
        sidebar |content2    |   content3
        ________|____________|______________
                        footer

        ### Terminologies
                1. Grid Lines
                2. Grid cell
                3. Grid track   =>      one single row
                4. Grid area

display : grid;
grid-template-columns : 100px 100px 1fr 1fr;
grid-temolate-rows : 1fr 1fr 100px;
gap : 10px;

grid-column-start: 1;
grid-column-end: 3;
sortcut : grid-column: 1 / 3;

grid-row-start: 1;
grid-row-end: 3;
shortcut : grid-row: 1 / 3;


### Tailwind CSS Intillegence

Steps : 
        1. Install tailwind CSS Intelligence from extensions.
        2. Create new folder and generate package.json
        3. Run "npm install -y tailwindcss @tailwindcss/cli"
        4. Create "style.css" file and add "@import "tailwindcss" in it.
        5. Run the watch command "npx @tailwindcss/cli -i ./style.css -o ./output.css --watch"
        6. Create HTML files and add <link href="./output.css" rel="stylesheet"> in head.