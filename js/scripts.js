// ------------------------------------------
//  ADD HTML ELMENTO TO GELLERY
// ------------------------------------------
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');
const peopleUrl = 'https://randomuser.me/api/?results=12';
// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------
function getProfiles(json) {
  const profileArr = [];
  json.results.map(person => {
    const firstName = person.name.first;
    const lastName = person.name.last;
    const picture = person.picture.medium;
    const email = person.email;
    const city = person.location.city;
    const state = person.location.state;
    const street = person.location.street;
    const postcode = person.location.postcode;
    const birthday = person.dob.date;
    const phone = person.phone;

    profileArr.push({
      firstName,
      lastName,
      picture,
      email,
      city,
      state,
      street,
      postcode,
      birthday,
      phone
    });
  });
  return profileArr;
}

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateHTML(arr) {
  
    arr.forEach(profile => {
    const card = document.createElement('div');
    card.className += 'card';
    gallery.appendChild(card);
    card.innerHTML = `
          <div class="card-img-container">
          <img class="card-img" src=${profile.picture} alt="profile picture">
          </div>
          <div class="card-info-container">
          <h3 id="name" class="card-name cap">${profile.firstName} ${
      profile.lastName
    } </h3>
          <p class="card-text">${profile.email}</p>
          <p class="card-text cap">${profile.city}, ${profile.state}</p>
          </div>
          </div>
          `;

    const modalContainer = document.createElement('div');
    modalContainer.className += 'modal-container';
    
    modalContainer.innerHTML = `
      <div class="modal">
                      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                      <div class="modal-info-container">
                          <img class="modal-img" src=${
                            profile.picture
                          } alt="profile picture">
                          <h3 id="name" class="modal-name cap">${
                            profile.firstName
                          } ${profile.lastName}</h3>
                          <p class="modal-text">${profile.email}</p>
                    <p class="modal-text cap">${profile.city}</p>
                    <hr>
                    <p class="modal-text">${formatPhoneNumber(profile.phone)}</p>
                    <p class="modal-text">${profile.street}, ${profile.state} ${
      profile.postcode
    }</p>
                     <p class="modal-text">Birthday: ${formatBirthday(
                       profile.birthday
                     )}</p>
                  </div>
                  </div>
      `;
      $('#gallery').after(modalContainer)
      $('.modal-container').css('visibility', 'hidden');
        });

        $('.card').on('click', (e) => {
          console.log(e.target )
        })
        

}
/**
 * I used this link to generate the birthday date correctly:
 * https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
 * I used this function to generate the phone with Regex:
 * https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
 */

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

function formatBirthday(date) {
  const newDate = new Date(date);
  const newEvent = newDate.toLocaleDateString('en-US');
  return newEvent;
}




window.addEventListener('load', () => {
  fetch(peopleUrl)
    .then(response => response.json())
    .then(getProfiles)
    .then(generateHTML)
    .catch(err => {
      document.write('Something went wrong');
      console.log(err);
    });
});

