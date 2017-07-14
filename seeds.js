var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Morbi molestie, enim vitae auctor ornare, erat quam tincidunt ipsum, nec accumsan tellus urna sed sem. Nullam dapibus est quis fermentum luctus. Etiam venenatis orci sit amet magna feugiat sagittis at id ligula."
    },
    {
        name: "Desert Mesa", 
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "Curabitur et vulputate dui. Nulla nec ex placerat, iaculis urna a, tempus urna. Quisque vel volutpat risus. Donec eget fermentum dui. Mauris finibus est nunc, a sagittis dui fringilla in."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Quisque eget neque ullamcorper, malesuada leo quis, lacinia est. Integer lobortis tortor justo, at vulputate nisi luctus at. Maecenas pretium in neque a sollicitudin. Praesent egestas eleifend dui vitae dictum."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
