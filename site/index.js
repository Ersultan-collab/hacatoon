let images = ['https://avatars.mds.yandex.net/i?id=ac0b97d24dedb563954ae59675f5a4edab375193-10877501-images-thumbs&n=13', 'https://smi24.kz/userdata/article/2024/article_1369847/image.jpeg.webp', 'https://smi24.kz/userdata/article/2024/article_1354619/image.jpeg.webp']
let texs = ['Землетрясение в Китае приближается к нам, будьте начеку','Закуп техники для поисков людей под завалами: спасатели успокоили алматинцев', 'Развязки и мосты проверили после землетрясения в Алматы']

let divv = document.querySelector('.header-cards')

for (let i = 0; i < images.length && i < texs.length; i++) {
    let div = document.createElement('div');
    div.className = 'header-card-one';
    let divfon= document.createElement('div');
    divfon.className = 'header-card-div-fon';
    let divh1 = document.createElement('div');
    divh1.className = 'header-card-div-h1';
    let h11 = document.createElement('h1');
    h11.style.color = 'white';
    h11.textContent = 'Новости';
    h11.style.margin = '0'

    let h1 = document.createElement('h1');
    h1.textContent = texs[i]; // Change texs[j] to texs[i]
    h1.style.color = 'white';
    h1.style.margin = '0'

    divfon.style.backgroundImage = `url('${images[i]}')`;

    divh1.appendChild(h11);
    divh1.appendChild(h1);
    div.appendChild(divh1);
    divv.appendChild(div);
    div.appendChild(divfon);
}

document.addEventListener("DOMContentLoaded", () => {
    let banner = document.querySelector('.banner');
    banner.style.visibility = 'hidden';
    banner.style.opacity = '0'

    let a = document.querySelector('.header-menu-a1');
    a.style.cursor = 'pointer';
    a.addEventListener('click', () => {
        banner.style.visibility = 'visible'
        banner.style.top = '70px'
        banner.style.opacity = '1'
        bannertwo.style.visibility = 'hidden'
        bannertwo.style.opacity = '0'
        banner.style.transition = 'top 0.5s, visibility 1s, opacity 1s ease'
    });
    let bannertwo = document.querySelector('.banner-novost');
    bannertwo.style.visibility = 'hidden';
    bannertwo.style.opacity = '0'

    let atwo = document.querySelector('.novost');
    atwo.style.cursor = 'pointer';
    atwo.addEventListener('click', () => {
        bannertwo.style.visibility = 'visible'
        bannertwo.style.top = '70px'
        bannertwo.style.opacity = '1'
        banner.style.visibility = 'hidden'
        banner.style.opacity = '0'
        bannertwo.style.transition = 'top 0.5s, visibility 1s, opacity 1s ease'
        
    });
});






// profil
let bascket = document.querySelector('.profil')

bascket.addEventListener('click', () => {
    window.location.href = './forma/index.html'
})


// NEWS

let news = [
    {
    id: 1,
    img: "https://avatars.mds.yandex.net/i?id=ac0b97d24dedb563954ae59675f5a4edab375193-10877501-images-thumbs&n=13",
    text: "землетрясение в Китае приближается к нам, БУДЬТЕ НАЧЕКУ",
    time: "Вчера",
    width: '230px'
}, 
{
    id: 2,
    img: "https://smi24.kz/userdata/article/2024/article_1369847/image.jpeg.webp",
    text: "Закуп техники для поисков людей под завалами: спасатели успокоили алматинцев",
    time: "10 ДНЕЙ НАЗАД"
}, 
{
    id: 3,
    img: "https://smi24.kz/userdata/article/2024/article_1354619/image.jpeg.webp",
    text: "Развязки и мосты проверили после землетрясения в Алматы",
    time: "5 МАРТА"
}, 
{
    id: 4,
    img: "https://smi24.kz/userdata/article/2024/article_1352546/image.jpeg.webp",
    text: "Такси резко и очень сильно подорожало в Алматы после землетрясения",
    time: "4 МАРТА"
}, 
{
    id: 5,
    img: "https://smi24.kz/userdata/article/2024/article_1352443/image.jpeg.webp",
    text: "Возможно, возбудился Кеминский очаг - сейсмолог о землетрясении в Алматы",
    time: "7 МАРТА"
}, 
{
    id: 6,
    img: "https://smi24.kz/userdata/article/2024/article_1352348/image.png.webp",
    text: "Землетрясение магнитудой 5,2 зарегистрировали в 263 километрах от Алматы",
    time: "20 ДНЕЙ НАЗАД",
    info: "",
}, 
{
    id: 7,
    img: "https://smi24.kz/userdata/article/2024/article_1352347/image.jpeg.webp",
    text: "Что происходит на улицах Алматы после землетрясения: фото",
    time: "15 МАРТА"
},
]


function createBannerNovostCard(i) {
    // Create div element for banner-novost-card
    const bannerNovostCard = document.createElement('div');
    bannerNovostCard.classList.add('banner-novost-card');

    // Create div element for banner-novost-text-text
    const bannerNovostTextText = document.createElement('div');
    bannerNovostTextText.classList.add('banner-novost-text-text');

    // Create h1 element
    const h1 = document.createElement('h1');
    h1.textContent = i.text;

    // Create p element
    const p = document.createElement('p');
    p.textContent = i.time;

    // Append h1 and p elements to banner-novost-text-text
    bannerNovostTextText.appendChild(h1);
    bannerNovostTextText.appendChild(p);

    // Create img element
    const img = document.createElement('img');
    img.src = i.img;
    img.style.width = i.width
    img.alt = '';

    // Append banner-novost-text-text and img elements to banner-novost-card
    bannerNovostCard.appendChild(bannerNovostTextText);
    bannerNovostCard.appendChild(img);

    return bannerNovostCard;
}

let banner = document.querySelector('.banner-novost-cards')

for (let i of news) {
    let card = createBannerNovostCard(i)
    banner.appendChild(card)
}



const newRequest = {
    address: "",
    photos: [],
    damageType: ""
  };
  
  
  fetch('https://65f5845d41d90c1c5e09a0e0.mockapi.io/requests', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newRequest)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // do something with the new task
  }).catch(error => {
    // handle error
  })


  // Функция для получения данных о пого
