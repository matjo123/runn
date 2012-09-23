runn.factory('schedule', ['$http', function ($http) {
    var rest = function () {
        return {activity: 'rest'};
    };
    var run = function (timeR1) {
        return {
            activity: 'run',
            desc: timeR1 + 'm@R1'
        };
    };
    var allSchedules = [
        {
            name: 'Half-Marathon Group A',
            desc: 'yeah, super fast',
            weeks: [
                {days: [run(35), rest(), run(20), rest(), run(25), run(50), rest()]},
                {days: [run(40), rest(), run(25), rest(), run(25), run(60), rest()]},
                {days: [run(35), rest(), run(25), rest(), run(20), run(70), rest()]},
                {days: [run(45), rest(), run(25), rest(), rest(), run(80), rest()]}
            ]
        },
        {
            name: 'Half-Marathon Group B',
            desc: 'good good, keep the pace',
            weeks: [
                {days: [run(35), rest(), run(20), rest(), run(25), run(50), rest()]},
                {days: [run(40), rest(), run(25), rest(), run(25), run(60), rest()]},
                {days: [run(35), rest(), run(25), rest(), run(20), run(70), rest()]},
                {days: [run(45), rest(), run(25), rest(), rest(), run(80), rest()]}
            ]
        },
        {
            name: 'Half-Marathon Group C',
            desc: 'one has to start somewhere',
            weeks: [
                {days: [run(35), rest(), run(20), rest(), run(25), run(50), rest()]},
                {days: [run(40), rest(), run(25), rest(), run(25), run(60), rest()]},
                {days: [run(35), rest(), run(25), rest(), run(20), run(70), rest()]},
                {days: [run(45), rest(), run(25), rest(), rest(), run(80), rest()]}
            ]
        }
    ];
    return {
        query: function () {
            var data = [];
            $http({
                method: 'get', 
                url: '/runn/_all_docs?include_docs=true',
                transformResponse: function(r){ 
                    var result = [];
                    angular.forEach(angular.fromJson(r).rows, function(a){
                        result.push(a.doc);
                    });
                    return result; 
                }
            }).success(function(d){
                    angular.forEach(d, function(d){
                        data.push(d);
                    });
                    
            });
            return data;
        },
        get: function (name) {
            return allSchedules[1];
        }
    };
}]);