var UrlWatcher=function(n){var t=$.extend({intervalInMS:2e3,data:null,url:null,preRequest:function(){},requestFinish:function(n){}},n),e=this;this.running=!1,this.start=function(){e.running=!0,setTimeout(e.sendRequest,t.intervalInMS)},this.stop=function(){e.running||(e.running=!1)},this.next=function(){setTimeout(e.sendRequest,t.intervalInMS)},this.sendRequest=function(){e.running&&(t.preRequest(),$.post(t.url,t.data,function(n){t.requestFinish(n)}))}};module.exports=UrlWatcher;