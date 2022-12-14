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
            releaseDate: "05/11/2022",
            actorName: "hatoori",
            producerName: "akie takie"
        }
    ],
    length: 10
};

const search = document.querySelector("form");
const inputField = document.querySelector("input[name=search-key]");
const suggestionBox = document.querySelector(".suggestion");
let userInput, list, data, key, name, release, actor, producer, available, i, userInputLength, match, push, suggestList;
let suggestData = [];
data = movie.data;
list = document.querySelector(".data");
inputField.addEventListener('keyup', suggest);
search.addEventListener('submit', showData);

function showData(e) {
    list.innerHTML = "";
    available = 0;
    key = userInput.toLowerCase();
    for (x in data) {
        name = data[x].name;
        release = data[x].releaseDate;
        actor = data[x].actorName;
        producer = data[x].producerName;
        actorPattern = "/" + actor.toLowerCase() + "\1/";
        if (key == name.toLowerCase() || key == release.toLowerCase() || key == actor.toLowerCase() || key == producer.toLowerCase()) {
            available = 1;
            list.innerHTML += "<li class=\"movie\"><h2>" + name + "</h2><p class=\"movie-release\">" + release + "</p><p class =\"movie-info\">starring:" + actor + "<span>produced by:" + producer + "</span></p></li>";
        } else if (actorPattern.match(key)) {
            available = 1;
            list.innerHTML += "<li class=\"movie\"><h2>" + name + "</h2><p class=\"movie-release\">" + release + "</p><p class =\"movie-info\">starring:" + actor + "<span>produced by:" + producer + "</span></p></li>";
        }
        // console.log(actorPattern.test(key));
    }
    if (available == 0) {
        list.innerHTML += "<li><h2 class=\"invalid \">Sorry no result found</h2></li>";
    }
    e.preventDefault();
}

function suggest() {
    userInput = document.forms[0]["search-key"].value;
    userInputLength = userInput.length;
    userInput = userInput.toLowerCase();
    match = false;
    push = false;
    if (userInput != "") {
        for (x in data) {
            name = data[x].name;
            for (i = 0; i < userInputLength; i++) {
                if (userInput[i] == name[i].toLowerCase()) {
                    match = true;
                } else {
                    match = false;
                    break;
                }
            }
            if (match == true) {
                if (suggestData.length > 0) {
                    for (x in suggestData) {
                        if (suggestData[x] != name) {
                            push = true;
                        } else {
                            push = false;
                            break;
                        }
                    }
                } else {
                    push = true;
                }
                if (push) {
                    suggestData.push(name);
                }
            }
        }
    } else {
        suggestionBox.innerHTML = "";
    }
    suggestionBox.innerHTML = "";
    for (x in suggestData) {
        suggestionBox.innerHTML += "<li class=\"suggest\">" + suggestData[x] + "</li>";
    }
    selectSuggestion();
    suggestData = [];
}

function selectSuggestion() {
    suggestList = document.querySelectorAll(".suggest");
    suggestList.forEach((li) => {
        li.addEventListener('click', () => {
            inputField.value = li.innerHTML;
            userInput = inputField.value;
            suggestionBox.innerHTML = "";
        })
    });
}