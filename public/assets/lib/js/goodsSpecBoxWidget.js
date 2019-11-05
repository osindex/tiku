var init=!1,Spec=require("./spec.js"),GoodsSpecBoxWidget={getOption:function($container){var initValue;try{try{initValue=JSON.parse($container.attr("data-goods-spec-box-widget"))}catch(e){eval("initValue = "+$container.attr("data-goods-spec-box-widget"))}}catch(t){initValue={}}return $.extend({isSpec:!1,spec:{},specStockTotal:0,defaultCover:"/assets/lib/img/none.png"},initValue)},init:function(){if(init)return void alert("GoodsSpecWidget already init");init=!0,$(document).on("click","[data-goods-spec-box-widget] [data-spec-value]",function(){$(this).closest(".line.spec").find("[data-spec-value]").removeClass("active"),$(this).addClass("active"),$(this).closest("[data-goods-spec-box-widget]").GoodsSpecBoxWidget().refresh()});var t=function(t){var e=$(t),a=this;this.refresh=function(){var t=a.spec();if(!t.data){var i=GoodsSpecBoxWidget.getOption(e);return e.find("[data-item-market-price]").html("-"),e.find("[data-item-price]").html("-"),e.find("[data-item-stock]").html("-"),e.find("[data-input-number-widget]").InputNumberWidget().clearMax(),e.find("[data-input-number-widget]").InputNumberWidget().val(0),void e.find("[data-item-cover]").css({backgroundImage:"url("+i.defaultCover+")"})}e.find("[data-item-market-price]").html(t.data.marketPrice),e.find("[data-item-price]").html(t.data.price),t.data.stock>0?e.find("[data-item-stock]").html(t.data.stock):e.find("[data-item-stock]").html("库存不足"),e.find("[data-input-number-widget]").InputNumberWidget().setMax(t.data.stock),t.data.stock>0?(e.find("[data-input-number-widget]").InputNumberWidget().val()>t.data.stock&&e.find("[data-input-number-widget]").InputNumberWidget().val(t.data.stock),e.find("[data-input-number-widget]").InputNumberWidget().val()<=0&&e.find("[data-input-number-widget]").InputNumberWidget().val(1)):e.find("[data-input-number-widget]").InputNumberWidget().val(0),e.find("[data-item-cover]").css({backgroundImage:"url("+t.data.cover+")"})},this.init=function(){},this.spec=function(){var t=!0,a=[];e.find(".line.spec").each(function(e,i){var d=$(i).find("[data-spec-name]").attr("data-spec-name"),n=$(i).find("[data-spec-value].active").attr("data-spec-value");d&&n?a.push({name:d,value:n}):t=!1});var i=GoodsSpecBoxWidget.getOption(e),d=Spec.keyValue2Unify(a);return t&&d in i.spec?(i.spec[d].cover||(i.spec[d].cover=i.defaultCover),{spec:d,data:i.spec[d]}):{spec:null,data:null}},this.isSpec=function(){return!!GoodsSpecBoxWidget.getOption(e).isSpec},this.amount=function(){return e.find("[data-input-number-widget]").InputNumberWidget().val()}};$.fn.extend({GoodsSpecBoxWidget:function(){if($(this).length>1)return alert("GoodsSpecBoxWidget only accept one dom"),null;var e=$(this).data("widget");return e||(e=new t(this),$(this).data("widget",e),e)}}),$(function(){$("[data-goods-spec-box-widget]").each(function(t,e){$(e).GoodsSpecBoxWidget().init()})})}};module.exports=GoodsSpecBoxWidget;