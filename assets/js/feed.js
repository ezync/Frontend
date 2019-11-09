const ACTIVITY = [{
    id : 1,
    date : '26/10/2019 00:00:00',
    text : 'First Activity',
    media : '',
    company : '1'
},{
    id : 2,
    date : '27/10/2019 00:00:00',
    text : 'Second Activity',
    media : '',
    company : '1'
}]
const COMPANY = [{
    id : 1,
    name : 'EZYNC',
    logo : '../../images/logo_192x192.png', 
    founded_on : '26/10/2019 00:00:00',
    email : 'ezync@gmail.com',
    description : 'First company',
    industries : 'Social media',
    activities : '1,2',
    individuals : '1,2,3'
},
{
    id : 2,
    name : 'EZYNC2',
    logo : '../../images/logo_192x192.png', 
    founded_on : '26/10/2019 00:00:00',
    email : 'ezync2@gmail.com',
    description : 'Second company',
    industries : 'Social media',
    activities : '',
    individuals : ''
}]

function getCompanyByID(company,id) {
    return company.filter(
        function(company){ return company.id == id }
    );
}


window.addEventListener('load', function() {
    let query = '';
    let id = null;
    for(let i = 0; i<ACTIVITY.length ; i++){
        try{
            id = Number(ACTIVITY[i].company);
        }catch(e){
            throw e;
        }
        let company = this.getCompanyByID(COMPANY, id)
        if (company.length === 1){
            query +=`
            <div class="feed">
                <a class = "user-feed">
                    <img class = "picture" src = "${company[0].logo}">
                    <pre>${company[0].name}<br><p style="font-size:10px">${ACTIVITY[i].date.slice(0,10)}</p></pre>
                </a> <br>
                <p class = "text-feed">${ACTIVITY[i].text}</p><br>
                <div class="buttons">
                    <a href="#">Like</a>
                    <a href="#">Comment</a>
                    <a href="#">Share</a>
                </div>
            </div>`;
        }

        
    }
    document.getElementById("feeds").innerHTML = query;
});