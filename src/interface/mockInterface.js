import Socket from "simple-websocket";

export default class LogInterface {
  constructor(url, onMessage) {
    if (!url) {
      return;
    }
    this._sequence = 0;
    this._ws = new Socket(url);
    this._sink = onMessage;

    if (this._ws) {
      this._ws.on("connect", () => {
        console.log("ws opened");
      });

      this._ws.on("message", data => {
        const obj = JSON.parse(data);
        if (obj.method == "Login" && obj.callResult == 0) {
          this._isLogin = true;
          return;
        }
        if (this._sink) {
          this._sink(obj);
        }
      });

      this._ws.on("data", data => {
        const obj = JSON.parse(data);
        if (obj.method == "Login" && obj.callResult == 0) {
          this._isLogin = true;
        }
        if (this._sink) {
          this._sink(obj);
        }
      });

      this._ws.on("error", data => {
        console.log("error", data);
      });
    }
  }

  send(opts) {
    if (!this._isLogin) {
      this._login();
    }

    if (this._isLogin && this._ws.connected) {
      this._ws.send(opts);
    }
  }

  _getID() {
    ++this._sequence;
    if (this._sequence >= 2147483647) this._sequence = 0;
    return this._sequence;
  }

  _login() {
    const action = {
      callID: this._getID(),
      method: "Login",
      user: "supcon",
      pwd: "supcondcs",
    };

    if (this._ws.connected) {
      this._ws.send(JSON.stringify(action));
    }
  }
}
