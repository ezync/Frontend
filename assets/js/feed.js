const COMPANY = [{
    id : 1,
    name : 'EZYNC',
    logo : '../../images/logo_192x192.png', 
    background_image : '../../images/banner.jpg',
    founded_on : '26/10/2019',
    email : 'ezync@gmail.com',
    description : 'First company',
    industries : 'Social Media',
    activities : [1,2],
    individuals : [1,2,3]
},
{
    id : 2,
    name : 'EZYNC2',
    logo : '../../images/logo_192x192.png', 
    background_image : '../../images/banner.jpg',
    founded_on : '26/10/2019',
    email : 'ezync2@gmail.com',
    description : 'Second company',
    industries : 'Social Media',
    activities : [],
    individuals : []
}]

const ACTIVITY = [{
    id : 1,
    date : '26/10/2019',
    time : '00:00:00',
    text : 'First Activity',
    media : '',
    type : 'Progress',
    company : '1'
},{
    id : 2,
    date : '27/10/2019',
    time: '00:00:00',
    text : 'Second Activity',
    media : '',
    type : 'Story',
    company : '1'
}]

const USER = [{
    id : 1,
    name : 'Nicholas S',
    email : 'nicholasbudiharsa@gmail.com',
    picture : '../../images/nic.png',
    status : 'Hi !',
    companies : [1],
    linkedin : 'https://www.linkedin.com/in/nicholas-budiharsa-4236bb170/',
    position : 'Chief Executive Officer (CEO)'
},{
    id : 2,
    name : 'Jiwon P',
    email : 'jiwon2311@gmail.com@gmail.com',
    picture : '../../images/jiwon.png',
    status : 'Hi !',
    companies : [1],
    linkedin : 'https://www.linkedin.com/in/jiwon-park-473998170/',
    position : 'Chief Executive Officer (CEO)'
},{
    id : 1,
    name : 'Shrey A',
    email : 'shrey183@gmail.com',
    picture : '../../images/shrey.png',
    status : 'Hi !',
    companies : [1],
    linkedin : 'https://www.linkedin.com/in/shrey-aryan-b4a89796/',
    position : 'Chief Executive Officer (CEO)'
}]

const EVENT = [{
    id : 1,
    name : 'Event',
    date : '23/11/2019',
    time : '17:00:00' , 
    place : 'Here st. Paris',
    description : 'First Event',
    companies : [1,2],
    activities : [1,2]
}]


function getCompanyByID(company,id) {
    return company.filter(
        function(company){ return company.id == id }
    );
}
function getActivityByID(activity,id) {
    return activity.filter(
        function(activity){ return Number(activity.company) == id }
    );
}
function getUserByID(user,id) {
    return user.filter(
        function(user){ return Number(user.companies) == id }
    );
}

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
                    <pre>${company[0].name}<br><p style="font-size:10px">${ACTIVITY[i].date}</p></pre>
                </a> <br>
                <p class = "text-feed">${ACTIVITY[i].text}</p><br>
                <div class="buttons">
                    <a href="#"><img class="icon-feed" src="../../images/user-page/like.png"></a>
                    <a href="#"><img class="icon-feed" src="../../images/user-page/comment.png"></a>
                    <a href="#"><img class="icon-feed" src="../../images/user-page/share.png"></a>
                </div>
            </div>`;
        }

        
    }
    document.getElementById("feeds").innerHTML = query;
});