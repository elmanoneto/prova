"use strict";

app.controller('FeedListController', function (FeedListService) {
  var ctrl = this;
  ctrl.photos = FeedListService.getFeedlist();
});
