import "./styles.css";
import { AuthProvider } from "oidc-react";

import Protected from "./Protected";

const oidcConfig = {
  onSignIn: async (user) => {
    alert("You just signed in, congratz! Check out the console!");
    console.log(user);
    window.location.hash = "";
  },

  // keyID 203621393244357262
  authority: "http://localhost:8080",
  redirectUri: "http://localhost:3000/admin",
  clientId: "203621233827316366@rd01",
  scope: "openid profile email",
  responseType: "code"
};

export default function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <h1>Hello OIDC-React</h1>
        <Protected />
      </div>
    </AuthProvider>
  );
}
