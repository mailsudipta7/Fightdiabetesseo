sduttaApp.factory('commonApiServices', function() {
  return {
      homePageServices : {
          GetHomePageInfo: "api/Home/GetHomePageInfo",
      },
      servicePageServices: {
          GetServicesPageInfo: "api/Home/GetServicesInfo",
      },
      blogsPageServices: {
          GetBlogsPageInfo: "api/Home/GetBlogsInfo",
      }
  };
});