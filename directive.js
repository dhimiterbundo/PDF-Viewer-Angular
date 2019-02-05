angular.module('directives')
    .directive('cmswSrc', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.attr('src', attrs.cmswSrc);
            }
        };
    });
