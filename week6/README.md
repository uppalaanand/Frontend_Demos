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