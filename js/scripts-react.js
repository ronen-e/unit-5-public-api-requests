
// const peopleUrl = 'https://randomuser.me/api/?results=12&nat=us';
const peopleUrl = '/assets/profile-response.json';

export function fetchProfiles() {
  return fetch(peopleUrl)
    .then(response => response.json())
    .then(json => json.results)
    .then(getProfiles)
}

// ------------------------------------------
//  CREATE PROFILES FROM THE JSON
// ------------------------------------------
function getProfiles(results) {
  return results.map(person => new Profile(person));
}

class Profile {
  constructor(person) {
    this.firstName = person.name.first;
    this.lastName = person.name.last;
    this.picture = person.picture.large;
    this.email = person.email;
    this.city = person.location.city;
    this.state = person.location.state;
    this.street = person.location.street;
    this.postcode = person.location.postcode;
    this.birthday = person.dob.date;
    this.cell = person.cell;
  }
}

// --------------------------------------------------
//  HELPER FUNCTION FOR PHONE AND BIRTHDAY FORMATTING
// --------------------------------------------------

const phonePattern = /^(\(\d{3}\))-(\d{3}-\d{4})$/; // (271)-162-5293

export function formatPhoneNumber(phoneNumberString = '') {
  return phoneNumberString.replace(phonePattern, '$1 $2') // (271) 162-5293
}

export function formatBirthday(date) {
  return new Date(date).toLocaleDateString('en-US');
}

