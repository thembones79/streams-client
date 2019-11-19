import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2",()=>{
        window.gapi.client.init({
            clientId: "69384539037-fskqc38sm0q50dv2oe1p53j7275k94sf.apps.googleusercontent.com",
            scope: 'email'
        })
    });
  }
  render() {
    return (
      <div>
        <div>GoogleAuth</div>
      </div>
    );
  }
}

export default GoogleAuth;
