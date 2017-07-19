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
