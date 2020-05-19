require('dotenv').config();
// ui elements 
const input = document.querySelector('#searchUser');
const profileOutput = document.querySelector('#profile');


console.log(procces.env.CLIENT_ID);
console.log(procces.env.CLIENT_SERCET);

// event listener
input.addEventListener('keyup', getIinput);

// Init the intances 
const githubApp = new Github('', '', 5, 'created: asc');
const profileGit = new UI(profileOutput);

function getIinput(e) {
    let valueInput = e.target.value;
    if(valueInput !== '') {
        githubApp.getUser(valueInput)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                profileGit.showAlert('User not found', 'alert alert-danger')
            } else {
                profileGit.showProfile(data.profile);
                profileGit.showRepos(data.repos);
            }
        })
    } else {
        profileGit.clearProfile();
    }
}