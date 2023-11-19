$(function(){

let now_illust = 0
const illust_num = 5

$(".big-illust").hide();
$(".dark").hide();

for(let i = 0; i <= illust_num; i++){
$(".illust img").eq(i).on("click", function(){
    $(".big-illust img").attr("src", `${i}.png`);
    $(".big-illust").show();
    $(".dark").show();
    now_illust = i
})
}

$(".image-close").on("click", function(){
    $(".big-illust").hide();
    $(".dark").hide();
})

$(".image-right").on("click", function(){
    if(now_illust === illust_num){
        now_illust = 0
    }
    else{ now_illust++}
    $(".big-illust img").attr("src", `${now_illust}.png`);
})

$(".image-left").on("click", function(){
    if(now_illust === 0){
        now_illust = illust_num
    }
    else{ now_illust--}
    $(".big-illust img").attr("src", `${now_illust}.png`);
})

})
