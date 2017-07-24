var z = angular.module('invApp',['pascalprecht.translate']);

z.config(function($translateProvider, languages) {
  var en = languages.en();
  var tn = languages.tn();
  var ml = languages.ml();
  $translateProvider.translations('en', en);
  $translateProvider.translations('tn', tn);
   $translateProvider.translations('ml', ml);

  $translateProvider.preferredLanguage('tn');

});

firebase.auth().signInAnonymously().catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    console.log("User id %s...", uid);
  } 
});

