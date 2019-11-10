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

function loadFeeds(companyId){
    let query = '';
    let company = this.getCompanyByID(COMPANY, companyId);
    let activity = this.getActivityByID(ACTIVITY, companyId);
    if (company.length !== 1){
        return;
    }
    for (let i = 0; i<activity.length;i++){
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

    document.getElementById("feeds").innerHTML = query;
}

function loadProfile(companyId){
    let company = this.getCompanyByID(COMPANY, companyId);
    let query = '';
    if (company.length === 1){
        query = `
        <div class="banner" style="background-image: url(${company[0].background_image});">
        <a class="profile-name">${company[0].name}</a>
        <img class="profile-picture" src="${company[0].logo}">
        </div>`;
        document.getElementById("ban").innerHTML = query;
        query = `
            <a><img class="symbol" src="../../images/user-page/calendar.png">Founded on ${company[0].founded_on}</a><br>
            <a><img class="symbol" src="../../images/user-page/location.png">Based in ${company[0].based_in}</a><br>
            <a><img class="symbol" src="../../images/user-page/description.png">${company[0].description}</a><br>
            <a><img class="symbol" src="../../images/user-page/industry.png">${company[0].industries}</a><br>
            <a style="margin-top: 40px;font-size: large;">Meet the team</a>`
        let user = getUserByID(USER, companyId);
        for (let i = 0; i < user.length;i++){
            query+= `
            <div class="team-desc">
                <a href="${user[i].linkedin}"><img class="team-picture" src = "${user[i].picture}"></a>
                <div class = "text">
                    <p>${user[i].name}</p> <br>
                    <p>${user[i].position} </p> <br>
                    <p>${user[i].status}</p>
                </div>
            </div>
            `
        }
        document.getElementById("tab").innerHTML = query;
        
    }


}

window.addEventListener('load', function() {
    loadFeeds(1)
    loadProfile(1)
});