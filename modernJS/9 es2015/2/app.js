const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boton MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },

    {
        name: 'Jessica Cluster',
        age: 40,
        gender: 'female',
        lookingfor: 'male',
        location: 'Austin TX',
        image: 'https://randomuser.me/api/portraits/men/13.jpg'
    },

    {
        name: 'Chad Tyrone',
        age: 25,
        gender: 'male',
        lookingfor: 'female',
        location: 'Los Angeles CA',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
];

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);

nextProfile()
//Display profiles
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = 
        `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
         </ul>
        `;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    } else {
        window.location.reload();
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    }
}