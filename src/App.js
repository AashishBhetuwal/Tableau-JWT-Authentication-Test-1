import "./styles.css";
import { v4 as uuidv4 } from "uuid";

var jws = require("jws");

export default function App() {
  const url =
    "https://10ax.online.tableau.com/t/interworks/views/Superstore/Customers";

  const connectedAppClientId = "9a06fbf5-a2c1-49cc-ba49-fc9a116393dc";
  const connectedAppSecretId = "72181719-dfde-4c8f-bd24-a1c0affef370";
  const connectedAppSecretKey = "kLb+ZhIcJXH3mlDYIKYGUxxmpe4gDFZo6BablUDA74Y=";
  const userName = "bhetuwalaashish@live.com";
  let data = {
    iss: connectedAppClientId,
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    jti: uuidv4(),
    aud: "tableau",
    sub: userName,
    scp: ["tableau:views:embed", "tableau:metrics:embed"]
  };
  let header = {
    alg: "HS256",
    typ: "JWT",
    kid: connectedAppSecretId,
    iss: connectedAppClientId
  };

  const token = jws.sign({
    header: header,
    payload: data,
    secret: connectedAppSecretKey
  });
  console.log(token);
  //console.log(uuidv4()),
  return (
    <div className="App">
      <h2>User Attribute Function Test</h2> <h3>Tableau 2023.1</h3>
      <tableau-viz
        id="tableauViz"
        src="https://10ax.online.tableau.com/t/interworks/views/Superstore/Customers"
        toolbar="hidden"
        iframeSizedToWindow="true"
      ></tableau-viz>
    </div>
  );
}
