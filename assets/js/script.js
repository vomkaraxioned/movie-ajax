/* Author: 

*/
//Name, release-date, actor name, Producer Name 
let movie = {
    data: [{
            name: "Brahmastra",
            releaseDate: "09/09/2022",
            actorName: "Ranbir Kapoor",
            producerName: "Karan Johar"
        },
        {
            name: "Cutputlli",
            releaseDate: "02/09/2022",
            actorName: "akii",
            producerName: "ratsasan"
        },
        {
            name: "Salaar",
            releaseDate: "09/09/2022",
            actorName: "prabhas",
            producerName: "hombale"
        }, {
            name: "avatar 2",
            releaseDate: "09/09/2022",
            actorName: "alien",
            producerName: "jaadu"
        }, {
            name: "Adipurush",
            releaseDate: "12/01/2023",
            actorName: "prabhas",
            producerName: "om raut"
        }, {
            name: "karthikeya 2",
            releaseDate: "09/09/2022",
            actorName: "siddhart",
            producerName: "zee"
        }, {
            name: "fighter",
            releaseDate: "09/09/2022",
            actorName: "hritik roshan",
            producerName: "papa roshan"
        }, {
            name: "Ni po",
            releaseDate: "09/11/2022",
            actorName: "salmon",
            producerName: "Azgar"
        }, {
            name: "Ultra man",
            releaseDate: "09/09/2022",
            actorName: "lamie o",
            producerName: "angie pillai"
        }, {
            name: "ninja technique",
            releaseDate: "05/011/2022",
            actorName: "hatoori",
            producerName: "akie takie"
        }
    ],
    length: 10
};

const search = document.querySelector("form");

search.addEventListener('submit', showData);

function showData(e) {
    let userInput = document.forms[0]["search-key"].value;
    let list = document.querySelector(".data");
    let data = movie.data;
    let key, name, release, actor, producer, available;
    list.innerHTML = "";
    available = 0;
    key = userInput.toLowerCase();
    for (x in data) {
        name = data[x].name;
        release = data[x].releaseDate;
        actor = data[x].actorName;
        producer = data[x].producerName;
        if (key == name.toLowerCase() || key == release.toLowerCase() || key == actor.toLowerCase() || key == producer.toLowerCase()) {
            available = 1;
            list.innerHTML += "<li class=\"movie\"><h2>" + name + "</h2><p class=\"movie-release\">" + release + "</p><p class =\"movie-info\">starring:" + actor + "<span>produced by:" + producer + "</span></p></li>";
        }
    }
    if (available == 0) {
        list.innerHTML += "<li><h2 class=\"invalid \">Sorry no result found</h2></li>";
    }
    e.preventDefault();
}