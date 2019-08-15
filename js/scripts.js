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
  const profiles = json.results.map(person => {
    const firstName = person.name.first;
    const lastName = person.name.last;
    const picture = person.picture.medium;
    const email = person.email;
    const city = person.location.city;
    const state = person.location.state;
    const postcode = person.location.postcode;
    const birthday = person.dob.date;
    const phone = person.phone;
    return fetch(peopleUrl)
      .then(response => response.json())

      .then(profile => {
        return {
          ...profile,
          firstName,
          lastName,
          picture,
          email,
          city,
          state,
          postcode,
          birthday,
          phone
        };
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

  const card = document.querySelector('.card');
  card.addEventListener('click', event => {
    generateModalWindow(event);
  });
}
function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

/**
 * I used this link to generate the birthday date correctly:
 * https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
 * I used this function to generate the phone with Regex:
 * https://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-us-phone-number-in-javascript
 */
function generateModalWindow(person) {
  const modalContainer = document.createElement('div');
  modalContainer.className += 'modal-container';
  body.appendChild(modalContainer);
  modalContainer.innerHTML = `
    <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${
                          person.picture
                        } alt="profile picture">
                        <h3 id="name" class="modal-name cap">${
                          person.firstName
                        } ${person.lastName}</h3>
                        <p class="modal-text">${person.email}</p>
                  <p class="modal-text cap">${person.city}</p>
                  <hr>
                  <p class="modal-text">${formatPhoneNumber(person.phone)}</p>
                  <p class="modal-text">${person.street}, ${person.city}, ${
    person.state
  } ${person.postcode}</p>
                   <p class="modal-text">Birthday: ${person.birthday}</p>
                </div>
                </div>
    `;

  $('.modal-close-btn').on('click', () => {
    $('.modal-container').css('visibility', 'hidden');
  });
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

// $(".open").on("click", function(){
//   $(".popup, .popup-content").addClass("active");
//   });
// $(function(){
//   $('.card').lightBox({
//     containerResizeSpeed: 250,
//     fixedNavigation: true
//   });

// });

/* <p class="modal-text">${person.email}</p>
                        <p class="modal-text cap">${person.city}</p>
                        <hr>
                        <p class="modal-text">${formatPhoneNumber(
                          person.phone
                        )}</p>
                        <p class="modal-text">${person.street}, ${person.city}, ${person.state} ${person.postcode}</p>
                         <p class="modal-text">Birthday: ${person.birthday.toLocaleDateString('en-US'
                        )}</p>
                    </div>
 */

// data.map(person => {
//   const modalContainer = document.createElement('div');
// modalContainer.className += 'modal-container';
// body.appendChild(modalContainer);
// modalContainer.innerHTML = `
// <div class="modal">
//                 <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//                 <div class="modal-info-container">
//                     <img class="modal-img" src=${
//                       person.picture
//                     } alt="profile picture">
//                     <h3 id="name" class="modal-name cap">${
//                       person.firstName
//                     } ${person.lastName}</h3>
//                     <p class="modal-text">${person.email}</p>
//                   <p class="modal-text cap">${person.city}</p>
//                   <hr>
//                   <p class="modal-text">${formatPhoneNumber(
//                     person.phone
//                   )}</p>
//                   <p class="modal-text">${person.street}, ${person.city}, ${person.state} ${person.postcode}</p>
//                    <p class="modal-text">Birthday: ${person.birthday}</p>
//               </div>
//             </div>
// `;
// });
