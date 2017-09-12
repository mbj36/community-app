define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.73fae265'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService',
            'NotificationResponseHeaderProvider'
        ],
        controllers: [
            'controllers.bcadc047'
        ],
        filters: [
            'filters.34474998'
        ],
        directives: [
            'directives.892e7f9b'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.9965c96d'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
