document.getElementById("toggle").addEventListener("click", function(event){
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
  var currentScroll = window.pageYOffset||
  document.documentElement.scrollTop;
  if(currentScroll > lastScrollTop){
    document.getElementById("nav-background").style.display="none";
    document.getElementById("nav-header").classList.remove("header-in");
    document.getElementById("nav-header").style.opacity = 0;
  }else{
    document.getElementById("nav-background").style.display="table";
     document.getElementById("nav-header").classList.add("header-in");
     document.getElementById("nav-header").classList.add("solid");
     document.getElementById("nav-header").style.opacity = 1;
     if(currentScroll<=3){
       document.getElementById("nav-header").classList.remove("solid");
       document.getElementById("nav-header").classList.remove("header-in");
     }
  }
  lastScrollTop = currentScroll;
},false);

/*galeria coders*/
var students = ["Fiorella Quispe","Lourdes Vilchez","Rossmery Maldonado","Yessenia Huamán",
"Miriam Mendoza","Elizabeth Condori","Arantza Burga","Grecia Rayme","Janine Vega",
"Rosario Felix","Daguiana Revoredo","Jenny Velasquez","Nadia Cuadros","Michell More",
"Marilu Llamocca","Mariel Garcia","Fiorella Cisneros","Geraldine Chauca","Yellitza Rivera",
"Stephanie Hiyagon","Emma Tapia","Danna Franco","Flor Retamozo","Nathaly Pacheco",
"Ericka Vidal","Katherine Ortega","Brilly Majuan","Flor Tello","Leslie Avendaño",
"Cindy Mendoza","Annia Flores","Betsi Loayza","Aida Sulca","Milagros Gutierrez",
"Nakarid Jave","Angie Cóndor","Maricarmen Rojas","Ariana Cabana","Flor Condori",
"Mitch Rodríguez","Naomi Villanueva","Mari Castillo","Miriam Peralta","Karin Alejo",
"Liliana Peña","Ruth Salvador","Maribel Sevilla","Wendy Reyes","Cinthia",
"Maria Grecia Cutipa","Ana Durand","Glisse Jorge","Neiza Nuñez","Sandra Solorzano"];

var listCoders= document.getElementById("coders");
function print(event){
  var listCoders= document.getElementById("coders");

  for(var i = 0;  i < students.length; i++){
var box = document.createElement("li");
var divGrid = document.createElement("div");
divGrid.setAttribute("class","grid");
var figure = document.createElement("figure");
var img = document.createElement("img");
img.setAttribute("class", "image-box")
img.src= "assets/img/students/"+ (i+1)+ ".png";
img.alt = students[i];
var figcaption = document.createElement("figcaption");
figcaption.setAttribute("class", "center");
var span = document.createElement("span");
span.setAttribute("class", "name")
span.innerHTML = students[i];
figcaption.appendChild(span);
figure.appendChild(figcaption);
figure.appendChild(img);
divGrid.appendChild(figure);
box.appendChild(divGrid);
listCoders.appendChild(box);
}
}
window.addEventListener("load",print);
