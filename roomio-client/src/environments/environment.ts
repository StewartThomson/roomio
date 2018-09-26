// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD34j1ps1AQQiwriJsdMauxsmzZUGX5SA8",
    authDomain: "roomio-63fc5.firebaseapp.com",
    databaseURL: "https://roomio-63fc5.firebaseio.com",
    projectId: "roomio-63fc5",
    storageBucket: "roomio-63fc5.appspot.com",
    messagingSenderId: "138792748529"
  },
  backend: {
    url: "http://localhost:3000/api"
  }
};
