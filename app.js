// fetch('https://icanhazdadjoke.com/slack')
//     .then(data => data.json())
//     .then(jokeData => {
//         const data = jokeData.attachments[0].text;
//         const element = document.getElementById('joke');
//         element.innerHTML = data;
//     })


async function fetchData(){
    const res = await fetch('https://icanhazdadjoke.com/slack');
    const data = await res.json();
    const joke = data.attachments[0].text;
    document.getElementById("joke").innerHTML = joke;
}
fetchData();