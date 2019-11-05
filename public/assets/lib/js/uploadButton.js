var $=require("jquery"),WebUploader=require("./../../webuploader/webuploader.js");require("./../../webuploader/css.css"),WebUploader.Uploader.register({"before-send":"beforeBlockSend","before-send-file":"beforeSendFile"},{beforeBlockSend:function(e){var i=new $.Deferred;return e.chunk+1>=this.options.chunkUploaded?setTimeout(i.resolve,0):setTimeout(i.reject,0),$.when(i)},beforeSendFile:function(e){var i=new $.Deferred,n={action:"init",name:e.name,type:e.type,lastModifiedDate:e.lastModifiedDate,size:e.size},r=this;return $.post(this.options.server,n).done(function(e){e.code?(alert(e.msg),i.reject()):(r.options.chunkUploaded=e.data.chunkUploaded,i.resolve())}).fail(function(e){alert("上传出错"),i.reject()}),$.when(i)}});var UploadButton=function(e,i){var n=$.extend({text:"选择文件",swf:"/assets/webuploader/Uploader.swf",server:"/path/to/server",sizeLimit:2097152,extensions:"gif,jpg,png,jpeg",chunked:!0,chunkSize:5242880,tipError:function(e){alert(e)},callback:function(e,i){},finish:function(){}},i);return $(e).each(function(){var e=this,i=$(this);i.html('<div style="display:block;padding:0;margin:0;"><div class="picker">'+n.text+'</div><ul class="webuploader-list"></ul></div>');var r=i.find(".webuploader-list"),t=WebUploader.create({auto:!0,swf:n.swf,server:n.server,pick:i.find(".picker"),fileSingleSizeLimit:n.sizeLimit,chunked:n.chunked,chunkSize:n.chunkSize,chunkRetry:5,threads:1,accept:{extensions:n.extensions},formData:{_token:"__env"in window?__env.token:""},duplicate:!1});t.on("fileQueued",function(e){var i=' <li id="'+e.id+'"><div class="progress-box"><div class="progress-bar" style="width:0%"></div></div><div class="progress-info">[ <span class="status">排队等待</span> ] '+e.name+"</div></li>",n=$(i);r.append(n)}),t.on("uploadProgress",function(e,i){var n=$("#"+e.id);n.find(".progress-bar").css("width",100*i+"%"),n.find(".status").html("正在上传")}),t.on("uploadAccept",function(e,i){return!i.code}),t.on("uploadSuccess",function(i,r){this.removeFile(i);var t={name:r.data.data.filename,size:r.data.data.size,path:r.data.path};$("#"+i.id).fadeOut(function(){$("#"+i.id).remove()}),n.callback(t,e)}),t.on("uploadError",function(e){this.removeFile(e)}),t.on("uploadFinished",function(){n.finish()}),t.on("error",function(e){"Q_TYPE_DENIED"==e?n.tipError("文件类型不合法"):"Q_EXCEED_SIZE_LIMIT"==e?n.tipError("文件大小不合法"):"F_EXCEED_SIZE"==e&&n.tipError("文件大小不合法")})})};module.exports=UploadButton;