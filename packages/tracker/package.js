Package.describe({
  summary: "Use mogul-tracker instead",
  version: '1.1.3'
});

Package.onUse(function (api) {
  api.imply("meteormogul:mogul-tracker");
});
