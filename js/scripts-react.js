
// const peopleUrl = 'https://randomuser.me/api/?results=12&nat=us';
const peopleUrl = '/assets/profile-response.json';

function fetchProfiles() {
  return fetch(peopleUrl)
    .then(response => response.json())
    .then(getProfiles)
}

// ------------------------------------------
//  CREATE PROFILES FROM THE JSON
// ------------------------------------------
function getProfiles(json) {
  const profileArr = [];
  json.results.forEach(person => {
    const firstName = person.name.first;
    const lastName = person.name.last;
    const picture = person.picture.large;
    const email = person.email;
    const city = person.location.city;
    const state = person.location.state;
    const street = person.location.street;
    const postcode = person.location.postcode;
    const birthday = person.dob.date;
    const cell = person.cell;

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
      cell
    });
  });
  return profileArr;
}

// --------------------------------------------------
//  HELPER FUNCTION FOR PHONE AND BIRTHDAY FORMATTING
// --------------------------------------------------

function formatPhoneNumber(phoneNumberString) {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
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

