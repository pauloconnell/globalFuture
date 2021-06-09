const express     = require("express");
const app         = express();
const bodyParser  = require("body-parser");
const cors        = require("cors");
const passport    = require("passport");
const session      =require ("express-session");
//const mongoose = require('mongoose')
//mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/global-future' )

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: true,
  saveUnitialized: true,
  cookie: {secure:false }
}));
app.use(passport.initialize());



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/");
});

// Not found middleware
//app.use((req, res, next) => {
//  return next({status: 404, message: 'not found'})
//})

// Error Handling middleware
// app.use((err, req, res, next) => {
//   let errCode, errMessage

//   if (err.errors) {
//     // mongoose validation error
//     errCode = 400 // bad request
//     const keys = Object.keys(err.errors)
//     // report the first validation error
//     errMessage = err.errors[keys[0]].message
//   } else {
//     // generic or custom error
//     errCode = err.status || 500
//     errMessage = err.message || 'Internal Server Error'
//   }
//   res.status(errCode).type('txt')
//     .send(errMessage)
// })
app.get("/api/", (req, res) => {
  console.log("hi 46");
  res.send("good!");
});

app.get("/population/", (req, res) => {
 // let text =   "<h1>Population Plan</h1><br>Every man / woman worldwide who has had no more than 2 children, shall be eligible for $1000 each to have a Vasectomy / Tubal Ligation, regardless of which participating country they live in. This shall make a substantial difference to the economic well-being of young people in third world countries, but also in the first world. <br><br><br><h2>Paying for the Population Plan</h2><br>Participating countries shall pay a percentage of the money they spend on military and armaments to fund the population management plan. The plan shall have a calculated objective in terms of a stable population in tune with the earth’s ability to support it with food, water and energy.<br><a href='/'><br><button>Back</button></a>";
  console.log("hi 52");
  //res.send(text);
  res.sendFile(__dirname + "/views/population.html");
});

app.get("/climate/", (req, res) => {
 // let text =   "<h1>Climate Management</h1><h2>Fossil Fuel Dependence</h2>To wean our world off fossil fuels without massive disruption, the World Government shall financially support the Energy Plan:<br><h3>Energy Plan</h3>Large-scale development of alternative energy sources i.e. wind, solar and geothermal primarily, to displace fossil fuel, shall be essential. This shall impact many people whose livelihood is dependent on large industrial operations producing or using large volumes of fossil fuels. To minimize the impact on these people, they shall be employed in construction and installation of the alternate energy sources on nearby land, or compensated until they find other employment This initiative shall boost the economy as it replaces refineries and exploration with production of wind turbines and solar and geothermal equipment, among other sources.<br><br><h3>Paying for the Energy Plan</h3>The world government shall contribute to the capital cost of the plan, to augment the spending that shall be required of the affected industries. There shall be no option for the affected industries; either they participate in planning the transition from fossil fuels, or pay extreme taxes for continuing to pollute with hot house gases.<br><a href='/'><button>Back</button></a>";
  res.sendFile(__dirname + "/views/climate.html");
});

app.get("/food/", (req, res) => {
  //let text =   "<h1>Food for the planet</h1><br>•	The food requirement for a population of 9 billion (initially, with a much lower end objective calculated), shall be worked out using local food crops wherever possible, augmented by scientifically developed crops and meats.<br>•	Excessive consumption of imported (non-local) food and goods in the first world has to stop; achieved by taxation and limits on allowable amounts of imported food.<br>•	Individuals need to lessen dependence on purchased fruits and vegetables and return to growing their own on whatever patch of land they can use; or purchasing at local Farmers’ markets.<br>•	Meat production through farmed species is inefficient, converting vegetable matter to food through animals. Alternative means are needed via scientific development of replacement ‘meats’.<br>•	Food distribution requires transport all over the world, and needs to be reduced; the emphasis must be on locally produced, and all forms of transport (airplanes, trucks, trains and cars) operated on energy derived from renewable energy sources.<br><a href='/'><button>Back</button></a>";
  res.sendFile(__dirname + "/views/food.html");
});

app.get("/packaging/", (req, res) => {
 // let text =    "<h1>Packaging</h1>•	Large amounts of energy is required to produce packaging – cardboard and plastic – yet cardboard and plastic packaging has become excessive and wasteful; often the material in the packaging far exceeds the material in the contents.<br>•	Packaging of Supermarket foods needs to be radically reduced or eliminated. The food industries must convert to compostable alternatives, and less of them.<br><a href='/'><button>Back</button></a>";
  res.sendFile(__dirname + "/views/packaging.html");
});

app.get("/plastics/", (req, res) => {
 // let text =   "<h1>Plastics</h1><br>•	Plastic production shall be phased out altogether, except for industrially vital  applications where no feasible alternative exists. People who would be displaced by elimination of plastic shall be employed in setting up and producing the alternatives, or compensated until they find other employment.<br><a href='/'><button>Back</button></a>";
  res.sendFile(__dirname + "/views/plastics.html");
});

app.get("/transport/", (req, res) => {
 // let text =   "<h1>Transportation/Travel</h1><br>•	The ownership of fossil fuel vehicles has to be reduced, and the way forward seems to be bright in this regard, with a combination of electric autonomous cars called up by an Uber / Lyft application, once that technology is fully developed.<br>•	Use of cars on highways to be reduced by imposing fees for use of highways.<br>•	Use of cars in cities to be changed; mass transport in cities to be by rail and bus; cities to increase non-driving portions of cities, and restrict vehicle access other than necessary for commerce.<br>•	Airplane and cruise-ship transport has grown beyond reason. Limits on travel to be imposed – 2 personal round trip flights per year, and 4 round trip business travel flights per year; and 1 cruise ship trip every 2 years.<br><a href='/'><button>Back</button></a>";
  res.sendFile(__dirname + "/views/transportation.html");
});

app.get("/water/", (req, res) => {
 // let text =   "<h1>Water Management</h1><br>The oceans are in critical condition and worsening. Fish stock depletion by highly technological overfishing has to stop. A 3-year period shall allow for adjustment from technological factory fishing the oceans, to fish farms developed in large ocean inlets and coves, stocked, developed and run by those factory-fishing the open oceans. Local land-based fishing shall continue to provide food for the locality.<br><br><h2>Freshwater management</h2>•	For drinking purposes, kits for cleaning water to be developed and supplied to third world countries with water cleanliness problems. When and where de-salinization becomes efficient, it shall be used primarily for drinking water.<br><br>•	In first world countries, a system shall be developed to re-cycle grey water in each domicile and re-use it.<br><br>•	For irrigation purposes, water usage to be limited by law, so that mega-farming shall be reduced and water conserved. Financial incentives shall be in place to offset the effect of reduced production.<br><a href='/'><button>Back</button></a>";
  res.sendFile(__dirname + "/views/water.html");
});

app.get("/infr/", (req, res) => {
 // let text ="<h1>Infrastructure</h1><br><br>•	With reduced production of plastics, packaging and reduced excessive use of resources in the First world, land fill requirements shall reduce. However, the reduction needs to be encouraged by increasing the cost of sending it to landfill (eg quadrupling garbage collection costs) and limiting the amount allowed. Re-using and re-cycling used material into further uses shall be focused upon and implemented rationally; and where recycling is not feasible e.g. certain plastics, these materials shall be eliminated altogether. <br><br>";
  res.sendFile(__dirname + "/views/infr.html");
});

app.post("/comments/", (req, res)=> {
  console.log(req.body )
  //email address to catch the comments easily -
  //  action=”mailto:contact@yourdomain.com”
  res.sendFile(__dirname + "/views/index.html");
});


passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  //myDataBase.findOne({ _id: new ObjectID(id) }, (err, doc) => {
    done(null, null);
//  });
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
