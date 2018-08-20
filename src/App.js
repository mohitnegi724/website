import React, { Component } from 'react';
import ShowContent from './Components/ShowContent/ShowContent';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
  state={
        index:null,
        Restaurant:[
        {RestaurantName: "Super Donuts",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"#",
          RestaurantInstagram:"https://www.instagram.com/superdonutsindia",
          RestaurantWeb:"http://superdonuts.in",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"Shop No-5, Lower Ground Floor, World Trade Tower Bikanervala Complex, Rajpur Rd, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res1",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/SuperDonuts.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788989/SuperDonuts.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Cafe Ivy",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/cafeivylandour",
          RestaurantInstagram:"https://www.instagram.com/cafeivy",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"Chardukhan, Landour Cant, Near Sbi Bank, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Landour",
          RestaurantMustTry:"Pancakes, Waffles, Baked Chicken Nachos, Pizza",
          RestaurantKey:"Res2",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788986/Cafe-Ivy.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788986/Cafe-Ivy.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Uncle M Hungry",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/unclemhungryosho",
          RestaurantInstagram:"https://www.instagram.com/unclemhungry",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/dining-room.png",
          RestaurantAddress:"Inside Osho Resorts . Delhi Public School, 111, Rajpur Rd, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res3",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788995/Uncle-M-Hungry.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788995/Uncle-M-Hungry.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Landour Bakery",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/LandourBakehouse",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/office/50/000000/confectionery.png",
          RestaurantAddress:"152, Sisters Bazaar, Landour, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Sisters Bazaar",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res4",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/Landour-Bakery.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788989/Landour-Bakery.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "The Tea Room at Alaya",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/TheTeaRoomatAlaya",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"98, Old Mussoorie Rd, Kairwaan Gaon, Dehradun, Uttarakhand 248009",
          RestaurantLocation:"Kairwaan Gaon",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res5",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788989/Alaya.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788989/Alaya.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Honey Hut",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.2,
          RestaurantFacebook:"https://www.facebook.com/Honey-Hut-Mussoorie-1569728676599887",
          RestaurantInstagram:"#",
          RestaurantWeb:"https://www.honeyhut.co.in",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/dining-room.png",
          RestaurantAddress:"Landour bazar Rd, The Mall Road, Mussoorie, Uttarakhand 248179",
          RestaurantLocation:"Mall Road, Mussoorie",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res6",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788992/Honey_Hut.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788992/Honey_Hut.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "L'Opéra Dehradun",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantRating:4.8,
          RestaurantFacebook:"https://www.facebook.com/LOpera-Dehradun-383058105401148",
          RestaurantInstagram:"#",
          RestaurantWeb:"https://loperaindia.com",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/office/50/000000/confectionery.png",
          RestaurantAddress:"46, EC Road, Race Course, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"Race Course",
          RestaurantKey:"Res7",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788996/Lopers.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788996/Lopers.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Mussoorie Lights",
          MealPrice:"Rs 500 - Rs 5,000",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.6,
          RestaurantFacebook:"https://www.facebook.com/mussoorielights",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/bar.png",
          RestaurantAddress:"Hotel Park View, Rajpur Rd, Ashtley Hall, Chukkuwala, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"Chukkuwala",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res8",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788996/Mussoorie_Lights.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788996/Mussoorie_Lights.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "First Gear Cafe",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.2,
          RestaurantFacebook:"https://www.facebook.com/1stgearcafe",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/nolan/50/000000/cafe.png",
          RestaurantAddress:"Mussoorie Road, Near Shiv Mandir, Khala Gaon, Dehradun, Rajpur, Uttarakhand 248009",
          RestaurantLocation:"Khala Gaon",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res9",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788995/First_Gear_Cafe.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788995/First_Gear_Cafe.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Bikanervala",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.5,
          RestaurantFacebook:"https://www.facebook.com/bikanervalafoods",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/dining-room.png",
          RestaurantAddress:"99,World Trade Tower, Rajpur Road, Opp.Garhwal Mandal, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res10",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532789000/Bikanervala.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532789000/Bikanervala.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "The Great Indian Pub",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.2,
          RestaurantFacebook:"https://www.facebook.com/thegreatindianpub",
          RestaurantInstagram:"https://www.instagram.com/thegreatindianpub/",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/bar.png",
          RestaurantAddress:"Roof Top, Doon Zone, 138/345, Rajpur Road, Jakhan, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"Jakhan",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res11",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788998/The_Great_Indian_Pub.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788998/The_Great_Indian_Pub.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]},
        {RestaurantName: "Flow Bistro",
          MealPrice:"Rs 500",
          RestaurantTimings:"09:00 - 21:00",
          RestaurantRating:4.1,
          RestaurantFacebook:"https://www.facebook.com/flowbistro",
          RestaurantInstagram:"#",
          RestaurantWeb:"#",
          RestaurantDineService:"Available",
          RestaurantAC:"Available",
          RestaurantBar:"Not Available",
          RestaurantSmoking:"Not Allowed",
          RestaurantOutdoorArea:"Available",
          RestaurantBooking:"Available",
          RestaurantDessert:"Available",
          RestaurantVegNonVeg:"Veg / Non Veg",
          RestaurantType:"https://png.icons8.com/color/50/000000/bar.png",
          RestaurantAddress:"Shop number 16 & 17, Pacific Hills, near Mussoorie Diversion, Dehradun, Uttarakhand 248001",
          RestaurantLocation:"DehraDun",
          RestaurantMustTry:"Brewed Beer, Craft Beer",
          RestaurantKey:"Res12",
          RestaurantImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/v1532788986/Flow-Bistro.jpg",
          RestaurantThumbImage:"https://res.cloudinary.com/uttarakhandtheheaven/image/upload/c_thumb,h_155,w_300/v1532788986/Flow-Bistro.jpg",
          RestaurantGeographicalLocation:[28.478573, 77.324504]}
        ],
        ratingImage:"https://png.icons8.com/color/1600/star.png",
        OpenFoodCard:false,
        RestaurantContact:"+91 9560 788 976",
        showFooter:false
  };
  render() {
    return (
      <div className="MainBody">
        <Header Food = {this.showFoodHandler} Stay={this.showStayHandler}/>
        <ShowContent/>
      </div>
    );
  }
}

export default App;
