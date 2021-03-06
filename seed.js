var db = require("./models")

console.log("the file is running")
var restaurantList = [];
restaurantList.push({
  name: "Curry Up Now",
  address: "255 Bush St San Francisco, CA 94104",
  latitude: 37.7912,
  longitude: -122.401,
  typeOfFood: "Indian",
  price:"$",
  parking: "No",
  servesAlcohol: "No",
  lateNight: "No",
  tags: ["Busy", "Fresh"],
  tips: [
    {
      text:"This place is the shit",
      name:"Anthony",
      date:"Sept. 9th, 2017 ",
    },
    {
      text:"There was curry in my burrito",
      name:"Bill",
      date:"Oct. 18th 2016",
    },
  ],
});

restaurantList.push({
  name: "Sushirrito",
  address: "226 Kearny St San Francisco, CA 94108",
  latitude: 37.7902361,
  longitude: -122.4037893,
  typeOfFood: "Japanese",
  price: "$$",
  parking: "No",
  servesAlcohol: "Yes",
  lateNight: "No",
  tags: ["Busy", "Fresh"],
  tips: [
    {
      text:"It's like sushi but bigger",
      name:"Alice",
      date:"Jan. 12th, 2017 ",
    },
    {
      text:"There was sushi in my burrito",
      name:"Bill",
      date:"Oct. 19th 2016",
    },
  ],
});

restaurantList.push({
  name: "Taqueria Estrella",
  address: "380 Bush St Ste 5 International Food Ct San Francisco, CA 94104",
  latitude: 37.790931,
  longitude: -122.403904,
  typeOfFood: "Mexican",
  price:"$",
  parking: "No",
  servesAlcohol: "No",
  lateNight: "No",
  tags: ["Friendly", "Fresh"],
  tips: [
    {
      text:"It all seems really authentic",
      name:"Jack",
      date:"May 23rd, 2017 ",
    },
    {
      text:"There was burrito in my burrito",
      name:"Bill",
      date:"Oct. 20th 2016",
    },
  ],
});

restaurantList.push({
  name: "Lite Bite",
  address: "220 Bush St San Francisco, CA 94104",
  latitude: 37.7914104,
  longitude: -122.4012865,
  typeOfFood: "Healthy",
  price:"$",
  parking: "No",
  servesAlcohol: "No",
  lateNight: "No",
  tags: ["Friendly", "Fresh"],
  tips: [
    {
      text:"The staff are lovely here and they're genuinely excited to talk about their menu.",
      name:"Jessy",
      date:"Sept. 1st, 2017 ",
    },
    {
      text:"They don't sell burritos",
      name:"Bill",
      date:"Oct. 21th 2016",
    },
  ],
});

restaurantList.push({
  name: "Pagan Idol",
  address: "375 Bush St San Francisco, CA 94104",
  latitude: 37.7907248,
  longitude: -122.4035919,
  typeOfFood: "Tiki Bar",
  price:"$$",
  parking: "No",
  servesAlcohol: "Yes",
  lateNight: "Yes",
  tags: ["Chill", "Fresh"],
  tips: [
    {
      text:"They put so much effort into this vibe and they are doing it right!",
      name:"Amanda",
      date:"Aug. 3rd, 2017 ",
    },
    {
      text:"Coundn't get my afternoon burritto so I came here to drown my sorrows, drinks were good!",
      name:"Bill",
      date:"Oct. 21th 2016",
    },
  ],
});
restaurantList.push({
  name: "City Counter",
  address: "115 Sansome St San Francisco, CA 94104",
  latitude: 37.7914251,
  longitude: -122.4010378,
  typeOfFood: "Sandwiches",
  price:"$$",
  parking: "No",
  servesAlcohol: "Yes",
  lateNight: "No",
  tags: ["Chill", "Fresh"],
  tips: [
    {
      text:"A modern spin on the best diner you've ever been to!",
      name:"Amanda",
      date:"Aug. 27th, 2017 ",
    },
    {
      text:"so excited to try this.  staff seemed nice.  ended up getting the tri tip sandwhich, took the first bite and bit right into this one with the meat being super red and uncooked.",
      name:"Bill",
      date:"Oct. 21th 2016",
    },
  ],
});
restaurantList.push({
  name: "Katsu House",
  address: "112 Waverly Pl San Francisco, CA 94104",
  latitude: 37.794477,
  longitude: -122.406743,
  typeOfFood: "Sushi Bars",
  price:"$$",
  parking: "Yes",
  servesAlcohol: "No",
  lateNight: "No",
  tags: ["Chill", "Fresh"],
  tips: [
    {
      text:"Very well present spot. Love the decoration inside out! The food is very good and tasty. Perfect place to get a mid day snack too. Highly recommend!",
      name:"Amanda",
      date:"Aug. 30th, 2017 ",
    },
    {
      text:"Super fresh food in a neighborhood that desperately needs nutritious, non-oily food. The humble exterior belies the efficient, clean service within.",
      name:"Bill",
      date:"Jul. 26th 2017",
    },
  ],
});

restaurantList.push({
  name: "Bun Mee",
  address: "650 Market St San Francisco, CA 94104",
  latitude: 37.788466,
  longitude: -122.4027612,
  typeOfFood: "Vietnamese",
  price:"$",
  parking: "No",
  servesAlcohol: "Yes",
  lateNight: "No",
  tags: ["Chill", "Fresh"],
  tips: [
    {
      text:"That was a damn fine sandwich.",
      name:"Linda",
      date:"Aug. 30th, 2016 ",
    },
    {
      text:"I saw a cockroach, gross.",
      name:"Tim",
      date:"Oct. 31st 2016",
    },
  ],
});

restaurantList.push({
  name: "Thainery",
  address: "International Food Court 380 Bush St Ste 3 San Francisco, CA 94104",
  latitude: 37.790926,
  longitude: -122.403858,
  typeOfFood: "Thai",
  price:"$",
  parking: "No",
  servesAlcohol: "No",
  lateNight: "No",
  tags: ["Friendly", "Fried"],
  tips: [
    {
      text:"Servous was a little slow but worth the wait",
      name:"Amanda",
      date:"Apr. 3rd, 2017 ",
    },
    {
      text:"There menu has lots of choices!",
      name:"Eric",
      date:"Dec. 9th 2016",
    },
  ],
});

db.Restaurant.remove({}, function(err, restaurants){
  db.Restaurant.create(restaurantList, function(err, restaurants){
    if (err) {
      return console.log('ERROR', err);
    };
    process.exit();
  });
});
