// ------------------------------------------
//  ADD HTML ELMENTO TO GELLERY
// ------------------------------------------
const gellery = document.getElementById('gallery');
const peopleUrl = 'https://randomuser.me/api/?results=12';
// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function getProfiles(json) {
     const profiles = json.results.map(person => {
    const firstName =  person.name.first;
    const lastName = person.name.last;
    const picture = person.picture.medium;
    const email = person.email;
    const city = person.location.city;
    const state = person.location.state;
    return fetch(peopleUrl)
      .then(response => (response.json())
      
      )
      
      .then(profile => {
        return { ... profile, firstName, lastName, picture, email, city, state };
      })
      .catch(err => console.log('Error fetching random user', err));
  });
  
  return Promise.all(profiles);
}

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateHTML(data) {

        data.map(person => {
            const card = document.createElement('div');
            card.className += 'card';
            gallery.appendChild(card);
            card.innerHTML = `
            <div class="card-img-container">
            <img class="card-img" src=${person.picture} alt="profile picture">
            </div>
            <div class="card-info-container">
            <h3 id="name" class="card-name cap">${person.firstName} ${
                person.lastName
            } </h3>
            <p class="card-text">${person.email}</p>
            <p class="card-text cap">${person.city}, ${person.state}</p>
            </div>
            </div>
            `;
        });
   
}

window.addEventListener('load', () => {
    
        fetch(peopleUrl)
        .then(response => response.json())
        .then(getProfiles)
        .then(generateHTML)
        .catch(err => {
            document.write('Something went wrong')
            console.log(err)
        })
   
   
   
  });