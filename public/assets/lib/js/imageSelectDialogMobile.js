var Dialog=require("./dialogMobile.js"),CSS=require("./../css/imageSelectDialogMobile.less"),Base=require("./baseMobile.js"),globalIndex=0,ImageSelectDialogMobile=function(e){void 0==Dialog&&alert("Dialog must defined");var i={eventType:"click",imageUploadServer:"/image-select-dialog-mobile/upload_image",imageUploadFileName:"file",imageListEnable:!0,imageListServer:"/image-select-dialog-mobile/list_images",callback:function(e){alert("选择了:"+e)}};this.opt=$.extend(i,e),this.runtime={dialog:null},this.$dialog=null};ImageSelectDialogMobile.prototype.show=function(){var e=this;globalIndex++;var i=[];i.push('<div class="image-select-dialog-mobile-image-editor" id="imageSelectDialogMobile_'+globalIndex+'">   <div class="image-select-dialog-mobile-title">选择图片</div>   <div class="image-select-dialog-mobile-image-box">       <iframe src="about:blank" frameborder="0" name="image-select-dialog-mobileImageUploadIframe_'+globalIndex+'"></iframe>       <div class="image-select-dialog-mobile-preview"></div>       <div class="image-select-dialog-mobile-uploading">正在上传...</div>       <div class="image-select-dialog-mobile-upload">           <form action="'+e.opt.imageUploadServer+'" method="post" enctype="multipart/form-data" target="image-select-dialog-mobileImageUploadIframe_'+globalIndex+'" data-form-no-loading>               <label>                   +上传新图片 <input type="file" name="'+e.opt.imageUploadFileName+'" />               </label>           </form>       </div>       '+(this.opt.imageListEnable?'<div class="image-select-dialog-mobile-list"></div><div class="image-select-dialog-mobile-loading">正在加载...</div><div class="image-select-dialog-mobile-more">点击加载更多</div>':"")+'   </div>   <div class="image-select-dialog-mobile-action">       <a href="javascript:;" class="image-select-dialog-mobile-cancel">取消</a>       <a href="javascript:;" class="image-select-dialog-mobile-ok">确定</a>   </div></div>'),$("body").append(i.join("")),this.$dialog=$("#imageSelectDialogMobile_"+globalIndex);var a={$container:this.$dialog,listPage:1,callback:null,init:function(){return a.$container.find(".image-select-dialog-mobile-cancel").on(e.opt.eventType,function(){return a.close(),!1}),a.$container.find(".image-select-dialog-mobile-ok").on(e.opt.eventType,function(){return a.save(),!1}),a.$container.find(".image-select-dialog-mobile-more").on(e.opt.eventType,function(){return a.requestList(),!1}),a.$container.on("click",".image-select-dialog-mobile-list .image-select-dialog-mobile-cover",function(){var e=$(this).attr("data-image-select-dialog-mobile-image");return a.setPreview(e),a.$container.find(".image-select-dialog-mobile-cover").removeClass("image-select-dialog-mobile-active"),$(this).addClass("image-select-dialog-mobile-active"),!1}),a.$container.on("change","input[type=file]",function(){a.$container.find("input[type=file]").val()&&(a.$container.find(".image-select-dialog-mobile-upload").hide(),a.$container.find(".image-select-dialog-mobile-uploading").show(),a.$container.find("form").submit())}),a.$container.find("iframe").on("load",function(){var i,l=this.contentWindow,o=l.document.body,t=$(o).find("pre").html()||$(o).html();try{i=JSON.parse(t)}catch(e){i={code:-1,msg:"parse json error : "+JSON.stringify(t)}}a.$container.find(".image-select-dialog-mobile-upload").show(),a.$container.find(".image-select-dialog-mobile-uploading").hide(),"code"in i?i.code?alert(i.msg):(Dialog.loadingOn(),$.post(e.opt.imageUploadServer,{action:"save",path:i.data.path},function(e){Dialog.loadingOff(),Base.defaultFormCallback(e,{success:function(e){a.setPreview(e.data.path);var i='<a href="javascript:;" class="image-select-dialog-mobile-cover image-select-dialog-mobile-active" data-image-select-dialog-mobile-image="'+e.data.path+'"><div><img src="'+e.data.path+'" /></div></a>';a.$container.find(".image-select-dialog-mobile-list").find("[data-image-select-dialog-mobile-image]").removeClass("image-select-dialog-mobile-active"),a.$container.find(".image-select-dialog-mobile-list").prepend(i)}})})):alert("上传出错:"+JSON.stringify(i))}),a},close:function(){a.$container.hide(),a.callback=null,a.$container.remove()},setPreview:function(e){a.$container.find(".image-select-dialog-mobile-preview").css({backgroundImage:'url("'+e+'")'}).attr("data-image-select-dialog-mobile-image",e)},getPreview:function(){return a.$container.find(".image-select-dialog-mobile-preview").attr("data-image-select-dialog-mobile-image")},clearPreview:function(){a.$container.find(".image-select-dialog-mobile-preview").css({backgroundImage:""}).attr("data-image-select-dialog-mobile-image","")},save:function(){var e=a.getPreview();e&&a.callback(e),a.close()},select:function(e){a.clearPreview(),a.$container.find(".image-select-dialog-mobile-list").find("[data-image-select-dialog-mobile-image]").removeClass("image-select-dialog-mobile-active"),a.$container.show(),a.listCheck(),a.callback=e},listCheck:function(){e.opt.imageListEnable&&1==a.listPage&&a.requestList()},requestList:function(){a.$container.find(".image-select-dialog-mobile-loading").show(),a.$container.find(".image-select-dialog-mobile-more").hide(),$.post(e.opt.imageListServer,{page:a.listPage++},function(e){if(a.$container.find(".image-select-dialog-mobile-loading").hide(),a.$container.find(".image-select-dialog-mobile-more").show(),"code"in e)if(e.code)alert("请求图片列表出错:"+e.msg);else{for(var i=e.data.list,l=[],o=0;o<i.length;o++)l.push('<a href="javascript:;" class="image-select-dialog-mobile-cover" data-image-select-dialog-mobile-image="'+i[o].path+'"><div><img src="'+i[o].path+'" /></div></a>');a.$container.find(".image-select-dialog-mobile-list").append(l.join("")),0==e.data.list.length&&a.$container.find(".image-select-dialog-mobile-more").hide()}else alert("请求图片列表出错:"+JSON.stringify(e))})}};a.init(),a.select(function(i){i&&e.opt.callback(i)})},module.exports=ImageSelectDialogMobile;