$('.owl-carousel').owlCarousel({
    items:4,
    margin:30,
    loop:true,
    nav:true,
    stagePadding:50,
    navigation: true,
    navigationText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],

    responsive : {

0 : {
items : 1,
nav : true,

},

600 : {
items : 2,
nav : false,
loop:false,

},

1000 : {
items : 4,
loop : true,

}
}


})