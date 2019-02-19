import { GLOBALS } from './globals';

export class Utils {
  static getUserIp(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', GLOBALS.IP_URL);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        cb(JSON.parse(xhr.responseText).ip);
      }
    }
    xhr.send(null);
  }

  static createPropertyPairs(selector) {
    return [...document.querySelectorAll(selector)].map(input => {
      switch (input.type) {
        case 'checkbox':
          return { name: input.name, value: !!(input.checked) };
        default:
          return { name: input.name, value: input.value };
      }
    });
  }
}
