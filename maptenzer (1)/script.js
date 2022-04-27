function myMap() {
var mapProp = {center: new google.maps.LatLng(30.553058977514695, -60.38645631528847), zoom:2};
  const image = "../photo/bich.PNG";
  const image1 = "../photo/tran.PNG"
  const image2 = "../photo/thu.PNG"
  const image3 = "../photo/truc.PNG"
  const image4 = "../photo/phuong.PNG"
  const image5 = "../photo/ducanh.PNG"
  const image6 = "../photo/thuong.PNG"

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({position: new google.maps.LatLng(10.82450088376603, 106.66955338133809), map: map, icon: image,
  });

  var marker1 = new google.maps.Marker({position: new google.maps.LatLng(66.85463449579409, -149.84672610669807), map: map, icon: image1,});
  var marker2 = new google.maps.Marker({position: new google.maps.LatLng(66.35530680893578, 95.6030616329387), map: map, icon: image2,});
  var marker3 = new google.maps.Marker({position: new google.maps.LatLng(39.63916571109285, -86.86378012510698), map: map, icon: image3,});
  var marker4 = new google.maps.Marker({position: new google.maps.LatLng(59.31310581743984, 18.110116886370125), map: map, icon: image4,});
 var marker5 = new google.maps.Marker({position: new google.maps.LatLng(-33.88292027254896, 151.27267783090335), map: map, icon: image5,});
  var marker6 = new google.maps.Marker({position: new google.maps.LatLng(-6.63221718409592, -54.076603000305916), map: map, icon: image6,});
  
var infoWindow1 = new google.maps.InfoWindow({content:"Tran, was a member of my Basketball club. Now she is living Alaska with her family."});
var infoWindow = new google.maps.InfoWindow({content:"Bich, after gradutating, she is staying in Vietnam and learning Social Media in the biggest university in HCM city"});
var infoWindow2 = new google.maps.InfoWindow({content:"Thu, my bestie is now earning a doctor degree in Russia"});
var infoWindow3 = new 
  google.maps.InfoWindow({content:"This is me, Truc, in the US to study Computer Science at DePauw"});
var infoWindow4 = new
  google.maps.InfoWindow({content:"Phuong, she is in Sweden. She has been there for 2 years and I miss her so much"});
var infoWindow5 = new google.maps.InfoWindow({content:"Anh is also studying Computer Science in Australia. This is one of my besties in my high school years"});
var infoWindow6 = new google.maps.InfoWindow({content:"Thuong is staying in Brazil with her mother. She can speak 4 languages: French, Vietnammese, English and Mexican."});

  //infoWindow3.open(map, marker3);
 // infoWindow4.open(map, marker4);
 // infoWindow5.open(map, marker5);
 // infoWindow1.open(map, marker1);
 // infoWindow2.open(map, marker2);
 // infoWindow6.open(map, marker6);
 // infoWindow.open(map, marker);

marker.addListener('click', function(){
  infoWindow.open(map, marker);
});
marker1.addListener('click', function(){
  infoWindow1.open(map, marker1);
});
marker2.addListener('click', function(){
  infoWindow2.open(map, marker2);
});
marker3.addListener('click', function(){
  infoWindow3.open(map, marker3);
});
marker4.addListener('click', function(){
  infoWindow4.open(map, marker4);
});
marker5.addListener('click', function(){
  infoWindow5.open(map, marker5);
});
marker6.addListener('click', function(){
  infoWindow6.open(map, marker6);
});
}

