///<reference path="../../../../typings/typings.d.ts" />

class FooterCtrl {}

function footer() {
  return {
    templateUrl: 'client/components/page/footer/footer.ng.html',
    controllerAs: 'footer',
    controller: FooterCtrl
  };
}

angular.module('app')
  .directive('shmckFooter', footer);