// contains the code necessary to set, retrieve, and erase a given cookie
// set session cookie
function setCookie(cookie, value) {
  const cookieVal = `${cookie}=${encodeURIComponent(value)};path=/`;
  document.cookie = cookieVal;
  console.log(cookieVal);
}

// make each cookie separated by semicolon
function getCookie(key) {
  const keyValue = key.replace(/([/*+?^=!:${}()|[\]/\\])/g, '\\$1');
  const {cookie} = document;
  const regex = new RegExp(`(?:^|;)\\s?${keyValue}=(.*?)(?:;|$)`,'i');
  const match = cookie.match(regex);

  return match && decodeURIComponent(match[1]);
}

// set cookie date to the past to erase
function eraseCookie(key) {
  const cookie = `${key}=;path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  document.cookie = cookie;
  console.log(cookie);
}


// contains the rest of program functionality
// set data for both sessiom and cookie
function setData() {
  const key = document.getElementById('key').value;
  const {
    value
  } = document.getElementById('value');

  // set session storage
  sessionStorage.setItem(key, value);
  // set local storage
  localStorage.setItem(key, value);
  // set cookie
  setCookie(key, value);
}

function getData() {
  try {
    const key = document.getElementById('key').value;
    const session = document.getElementById('sessionstr');
    const local = document.getElementById('localstr');
    const cookie = document.getElementById('cookiestr');

    // reset display
    session.innerHTML = '';
    local.innerHTML = '';
    cookie.innerHTML = '';

    // sessionStorage
    let value = sessionStorage.getItem(key) || '';
    if (value) session.innerHTML = `<p>${value}</p>`;

    // localStorage
    value = localStorage.getItem(key) || '';
    if (value) local.innerHTML = `<p>${value}</p>`;

    // cookie
    value = getCookie(key) || '';
    if(value) cookie.innerHTML = `<p>${value}</p>`;

  } catch (e) {
    console.log(e);
  }
}

function removeData() {
  const key = document.getElementById('key').value;

  // sessionStorage
  sessionStorage.removeItem(key);

  // localStorage
  localStorage.removeItem(key);

  // cookie
  eraseCookie(key);

  // reset display
  getData();
}

document.getElementById('set').onclick = setData;
document.getElementById('get').onclick = getData;
document.getElementById('erase').onclick = removeData;
