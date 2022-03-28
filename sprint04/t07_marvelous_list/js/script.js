let movies = ['Attack on titan', 'Kimetsu no Yaiba: Yuukaku-hen', 'JoJo no Kimyou na Bouken Part 6: Stone Ocean'];
let current = 'Attack on titan';

let element = document.getElementsByClassName("element");
let title = document.getElementById("title");
let info = document.getElementById("info");
let actor1 = document.getElementById("actor1");
let actor2 = document.getElementById("actor2");
let actor3 = document.getElementById("actor3");
let description = document.getElementById("description");
let image = document.getElementById("imageSource");

function AOT() {
    if (current == "Attack on titan")
        return;
    else {
        current = "Attack on titan";
        update();
    }
}

function KNY() {
    if (current == "Kimetsu no Yaiba: Yuukaku-hen")
        return;
    else {
        current = "Kimetsu no Yaiba: Yuukaku-hen";
        update();
    }
}

function jojo() {
    if (current == "JoJo no Kimyou na Bouken Part 6: Stone Ocean")
        return;
    else {
        current = "JoJo no Kimyou na Bouken Part 6: Stone Ocean";
        update();
    }
}

function update() {
    if (current === movies[0]) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#97B3DA";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '10px';
            element[i].style.borderBottomLeftRadius = '10px';
        }
        document.getElementById('Attack on titan').style.borderLeft = 'solid 3.9px #b6d5ff';
        document.getElementById('Attack on titan').style.borderTopLeftRadius = '2px';
        document.getElementById('Attack on titan').style.borderBottomLeftRadius = '2px';
        title.innerText = "Attack on titan"
        info.innerHTML = "R-17+ &nbsp;&nbsp;&#124&nbsp;&nbsp; 4 seasons &nbsp;&nbsp;&#124&nbsp;&nbsp; Shounen, Detective, Drama &nbsp;&nbsp;&#124&nbsp;&nbsp; 2013";
        actor1.innerText = "Yûki Kaji";
        actor2.innerText = "Josh Grelle";
        actor3.innerText = "Marina Inoue";
        description.innerText = "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.";
        crossfade("https://www.denofgeek.com/wp-content/uploads/2021/11/AOT_Original-KV_Logo_Copyright.jpg?resize=724,1024");
    } else if (current === movies[1]) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#C13128";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '15px';
            element[i].style.borderBottomLeftRadius = '15px';
        }
        document.getElementById('Kimetsu no Yaiba: Yuukaku-hen').style.borderLeft = 'solid 4px #284791';
        document.getElementById('Kimetsu no Yaiba: Yuukaku-hen').style.borderTopLeftRadius = '2px';
        document.getElementById('Kimetsu no Yaiba: Yuukaku-hen').style.borderBottomLeftRadius = '2px';
        title.innerText = "Kimetsu no Yaiba: Yuukaku-hen"
        info.innerHTML = "R-17+ &nbsp;&nbsp;&#124&nbsp;&nbsp; 2 seasons &nbsp;&nbsp;&#124&nbsp;&nbsp; Shounen, Acion, Adventure &nbsp;&nbsp;&#124&nbsp;&nbsp; 2022";
        actor1.innerText = "Natsuki Hanae";
        actor2.innerText = "Katsuyuki Konishi";
        actor3.innerText = "Akari Kitou";
        description.innerText = "Continuation of the adventures of Tanjiro and his constant companions: the demon sister Nezuko, the ever-whining Zenitsu and the daredevil Inosuke. This time, the \"pillar of sound\" Tengen Uzui took them with him on a mission to the Red Light District, where people have been disappearing lately. access to this is most likely from among the local demons. So who is behind everyone, and does it have human human abilities?";
        crossfade("https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142329-Oa6NT07c5KOn.jpg")
    } else if (current === movies[2]) {
        for (let i = 0; i < element.length; i++) {
            element[i].style.backgroundColor = "#43de96";
            element[i].style.borderLeft = 'none';
            element[i].style.borderTopLeftRadius = '15px';
            element[i].style.borderBottomLeftRadius = '15px';
        }
        document.getElementById('JoJo no Kimyou na Bouken Part 6: Stone Ocean').style.borderLeft = 'solid 3.9px #2B0908';
        document.getElementById('JoJo no Kimyou na Bouken Part 6: Stone Ocean').style.borderTopLeftRadius = '2px';
        document.getElementById('JoJo no Kimyou na Bouken Part 6: Stone Ocean').style.borderBottomLeftRadius = '2px';
        title.innerText = "JoJo no Kimyou na Bouken Part 6: Stone Ocean"
        info.innerHTML = "R-17+ &nbsp;&nbsp;&#124&nbsp;&nbsp; 6 seasons &nbsp;&nbsp;&#124&nbsp;&nbsp; Shounen, Acion, Adventure &nbsp;&nbsp;&#124&nbsp;&nbsp; 2021";
        actor1.innerText = "Daisuke Ono";
        actor2.innerText = "Mutsumi Tamura";
        actor3.innerText = "Mariya Ise";
        description.innerText = "JoJo Part 6 is the newest release in JoJo’s Bizarre Adventure, an anime Japanese manga graphic novel series. Stone Ocean is the sixth story arc in the JoJo adventure series. Fans have been patiently waiting for the release. So, will Stone Ocean be animated? Yes! We can confirm JoJo part 6 was confirmed! The anime will star Ai Fairouz as Jolyne. Here’s everything you need to know including the plot storyline, watch the teaser trailer, gain fan insight, and so much more!";
        crossfade("https://s1.stc.all.kpcdn.net/putevoditel/serialy/wp-content/uploads/2021/08/Poster-Neveroyatnye-priklyucheniya-DzhoDzho-467x697.jpg");
    }
}

function crossfade(name) {
    setTimeout(() => image.classList.add("crossfade"), 200);
    setTimeout(() => image.src = name, 250);
    setTimeout(() => image.classList.remove("crossfade"), 300);
}