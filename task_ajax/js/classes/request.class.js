function Request() {  
}

Request.prototype.load = function (queryParams) {
  var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
  this.xhr = new XHR();
  this.xhr.open(queryParams.method, queryParams.URL);
  this.xhr.onload = this.doAfterLoad;
  this.xhr.onerror = this.doAfterError;
  this.xhr.send();  
}

Request.prototype.doAfterLoad = function () {
  console.log(this.status);
}

Request.prototype.doAfterError = function () {
  console.log('Error ' + this.status);
}
