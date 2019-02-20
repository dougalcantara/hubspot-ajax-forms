import { GLOBALS } from './globals';

export class Utils {
  static getUserIp(cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', GLOBALS.IP_URL);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        cb(JSON.parse(xhr.responseText).ip);
      }
    };
    xhr.send(null);
  }

  static createPropertyPairs(selector) {
    return [...document.querySelectorAll(selector)].map((input) => {
      const propPair = { name: input.name, value: input.value };

      switch (input.type) {
        case 'date':
          propPair.value = (new Date(input.value).getTime() / 1000);
          return propPair;
        case 'checkbox':
          propPair.value = !!(input.checked);
          return propPair;
        default:
          return propPair;
      }
    });
  }
}
