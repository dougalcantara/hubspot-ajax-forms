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
}
