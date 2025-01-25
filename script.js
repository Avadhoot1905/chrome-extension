async function dataFetch(){
    var number = Math.floor(Math.random() * 1084) + 1;
    fetch(`https://picsum.photos/id/${number}/200/300`)
    .then(response => response.blob())
    .then(blob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    console.log("Working");
}

dataFetch()