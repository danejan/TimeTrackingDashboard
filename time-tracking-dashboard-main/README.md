# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
-   [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
-   [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

Ekran görüntülerini aşağıdaki linkten ulaşabilirsiniz.

![](./time-tracking-dashboard-main\Screenshot)


### Links

- Solution URL: [Add solution URL here](http://localhost:63342/Project/Proje%20demo/time-tracking-dashboard-main/index.html?_ijt=a50rv47dlg8b2cojud8he8sbjf)
- Live Site URL: [Add live site URL here](http://127.0.0.1:5500/index.html)

## My process

Projeye ilk Front-end kısmıyla başladım. Id ve class namelerini tasarladım. Çünkü Back-end tarafında id ve class namei kullanıcağımı biliyordum.
Front-end kısmını tamamladıktan sonra back-end kısmına başladım. Bu kısmı bitirdikten sonra verileri data.json dosyasından artık dinamik halde çekebiliyordum.
Projede ekranı Responsive hale getirirken biraz zorlandım.

### Built with

- Semantic HTML5 markup
- CSS3
- CSS custom properties
- CSS Grid
- Fetch API
-JavaScript

  
### What I learned

Bu projeyi yaparken grid sisteminin nasıl çalıştığını öğrenmiş ve uygulamış oldum. Grid sistemini kullanarak ekranı bölmeyi
row ve column özelliklerini kullanıp üzerinde pratik yaptım. Projede grid sisteminin özelliklerini kulladığın bir kod parçası aşağıdadır.

        .container {

            
            display: grid;
            grid-gap: 20px;
            grid-template-columns: repeat(4, 1fr);

        }

Fetch API kullanarak Json verilerini okumayı ve InnerHTML kullanarak yazmayı pekiştirdim.

          fetch("data.json")
          .then(response => response.json())
          .then(data => {

            var count = 0;

            for(a of data)
            {
                console.log(a);
                var id = "card"+count
                var idhrs = "card-hrs"+count
                var idcarddate = "card-date"+count

                document.getElementById(id).innerHTML=a.title;
                document.getElementById(idhrs).innerHTML=a.timeframes.daily.current+"hrs";
                document.getElementById(idcarddate).innerHTML ="Last week - "+ a.timeframes.daily.previous + "hrs";

                count++;
            }
        })

        .catch(err => console.log(err));
}



### Continued development

Browser'da yaptığım projeleri tablet ve mobil uygulamalar için daha hızlı ve profesyonel bir şekilde tasarlamayı ve bunu geliştimeyi isterim.
JavaScript dilinde de kendimi daha fazla geliştirmek isterim.


### Useful resources

- [](https://www.w3schools.com/) - Back-end kısmında kullandım.Kullanımı ve okuması kolaydı.
- [](https://www.w3schools.com/html/default.asp) - Front-end kısmında kullandım.
- [](https://www.w3schools.com/css/default.asp) - Front-end kısmında kullandım.
- [](https://www.youtube.com/channel/UCx-zvHc2a4-gRgVzXH4x5cQ) - Responsive kısmında bu videoların çok faydası oldu.



## Author

- Linkedin - [Dane Jan KEÇE](www.linkedin.com/in/dane-jan-keçe)
- Frontend Mentor - [@danejan](https://www.frontendmentor.io/profile/danejan)



