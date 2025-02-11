/**
 * 首页的服务模块
 */

angular.module('publishIdeas.service', ['publishIdeas.controller'])

  .factory('publishIdeasService', function ($http) {
    return {
      insert: function (ideas,callback) {
        // ideas就是controller传过来的个人信息对象，可以传对象、变量
        console.log(ideas)
        //  向后台发起请求，更新个人信息
        var url = configService.getHostUrl() + '/idear/addMobieIdeas?callback=JSON_CALLBACK'
        $http.jsonp(url,
          {
            params: ideas
          }).success(function (data) {
            callback(data)
          })
      }
    }
  });
