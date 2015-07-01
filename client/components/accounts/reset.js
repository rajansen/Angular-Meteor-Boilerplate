///<reference path="../../../typings/typings.d.ts" />
'use strict';
var ResetCtrl = (function () {
    function ResetCtrl($meteor, $state) {
        this.$meteor = $meteor;
        this.$state = $state;
        this.credential = {
            email: ''
        };
        this.error = '';
    }
    ResetCtrl.prototype.register = function () {
        var _this = this;
        this.$meteor.forgotPassword(this.credential)
            .then(function () {
            _this.$state.go('main');
        }, function (e) {
            _this.error = "Error sending forgot password email: " + e;
        });
    };
    return ResetCtrl;
})();
ResetCtrl.$inject = ['$meteor', '$state'];
function resetPw() {
    return {
        templateUrl: 'client/components/accounts/reset-password.ng.html',
        controllerAs: 'rpc',
        controller: ResetCtrl
    };
}
/**
 * Password Reset Component
 * @type {angular.module}
 */
angular.module('shmck.accounts').directive('shmckResetPw', resetPw);
//# sourceMappingURL=reset.js.map