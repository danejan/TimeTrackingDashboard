function getJSONFile(){


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


function Weekly(){
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
                document.getElementById(idhrs).innerHTML=a.timeframes.weekly.current + "hrs";
                document.getElementById(idcarddate).innerHTML ="Last week - "+ a.timeframes.weekly.previous + "hrs";

                count++;
            }
        })

        .catch(err => console.log(err));
}

function Monthly(){
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
                document.getElementById(idhrs).innerHTML=a.timeframes.monthly.current +"hrs";
                document.getElementById(idcarddate).innerHTML ="Last week - "+ a.timeframes.monthly.previous + "hrs";

                count++;
            }
        })

        .catch(err => console.log(err));


}

