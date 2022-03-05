// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backUrl: 'http://localhost:3000',
  opcionesCartas: {
    fibonacci: [0,1,2,3,5,8,13,21,34,55,89,'?'],
    modFibonacci: [0,'1/2',1,2,3,5,8,13,20,40,100,'?'],
    tshirts: ['xxs','xs','s','m','l','xl','xxl','?']
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
