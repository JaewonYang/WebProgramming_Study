/**
 * Created by Jaewon on 2015-03-26.
 */
var pictureCountNumber = 0;
var todayPhoto = [
    {"url":"http://media.daum.net/photo/2841","img":"http://icon.daumcdn.net/w/c/12/05/82877085750988319.jpeg",
        "title":"&quot;뜨면 끝장&quot; 최강 공격헬기 성능이 설마","id":"20120516082207657"}
    ,
    {"url":"http://media.daum.net/entertain/photo/gallery/?gid=100320","img":"http://icon.daumcdn.net/w/c/12/05/82876693901189319.jpeg",
        "title":"&#39;오늘만&#39; 필리핀 새댁 5개국어 능통 엄친딸","id":"20120516091011626"}
    ,
    {"url":"http://media.daum.net/photo/4010","img":"http://icon.daumcdn.net/w/c/12/05/82876307459008319.jpeg",
        "title":"[북한 결혼식 풍경] 신랑·신부 &quot;행복합니다&quot;","id":"20120516092605081"}
    ,
    {"url":"http://sports.media.daum.net/general/gallery/gagsports/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81730673405131839.jpeg",
        "title":"&#39;내가 더 잘해&#39; 후보GK 경기 난입해 선방","id":"20120516100608409"}
    ,
    {"url":"http://sports.media.daum.net/general/gallery/0516ufc/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81728759258718839.jpeg",
        "title":"양동이의 하이킥에 타바레스 &#39;주춤&#39;","id":"20120516093313331"}
    ,
    {"url":"http://media.daum.net/entertain/photo/gallery/?gid=100539","img":"http://icon.daumcdn.net/w/c/12/05/81728404408992839.jpeg",
        "title":"이승철 아내와 딸 사진 공개 &quot;사주에. .&quot;","id":"20120516093918544"}
    ,
    {"url":"http://media.daum.net/photo/3899","img":"http://icon.daumcdn.net/w/c/12/05/81728227037306839.jpeg",
        "title":"생후 6개월에 프랑스로 입양됐던 아이가..","id":"20120516030614331"}
    ,
    {"url":"http://sports.media.daum.net/general/gallery/STARKIMYUNA/index.html","img":"http://icon.daumcdn.net/w/c/12/05/81727815537682839.jpeg",
        "title":"&#39;교생&#39; 김연아, 스승의날에도 인기폭발","id":"20120516092003892"}];
showPicture();

//var wrap = document.getElementById('wrap');
//
//var str = '';
//
//for(var i=0; i<todayPhoto.length; i++){
//    str += '<img src="'+todayPhoto[i].img+'"> ';
//}
//wrap.innerHTML = str;

//event   (addEventListener 사용!! 수정 ㄱㄱ)
window.onload = function() {
    document.getElementById('toLeft').onclick = function() {
//        사진이 3개있는 화면에서 왼쪽으로 넘길 때
        if (pictureCountNumber%3 == 2) {
            pictureCountNumber = pictureCountNumber - 5;
            showPicture();
//            사진이 2개있는 화면에서 왼쪽으로 넘길 때
        }else if(pictureCountNumber%3 ==1){
            pictureCountNumber = pictureCountNumber - 4;
            showPicture();
        }
        else{
            pictureCountNumber = pictureCountNumber - 3;
            showPicture();
        }
    }

// 사진이 1개있는 화면에서 왼쪽으로 넘길 때



//   addEventListner 써야하는데..
//    window.onload = function(){
//        var pageMoveEvent= document.getElementById('toLeft');
//        pageMoveEvent.addEventListener()
//    }

    document.getElementById('toRight').onclick = function() {
        this.style.color = 'red';
        if(pictureCountNumber <6){
            showPicture();
        }else if(pictureCountNumber =6){
            for(var i = 0; i<2; i++){
                var str = '';
                str += '<img src="'+todayPhoto[pictureCountNumber].img+'"> ';
                pictureCountNumber++;
            }
            wrap.innerHTML = str;

        }
    }
};

//화면에 사진을 출력하는 메소드
function showPicture() {
    // 사진 3장을 화면에 보여줄 때
    if(pictureCountNumber+2 !=null){
        var str = '';
        for(var i = 0; i<3; i++){
            str += '<img src="'+todayPhoto[pictureCountNumber].img+'"> ';
            pictureCountNumber++;
        }
        // 사진 2장을 화면에 보여줄 때
    }else if(pictureCountNumber+1 !=null){
        var str = '';
        for(var i = 0; i<2; i++){
            str += '<img src="'+todayPhoto[pictureCountNumber].img+'"> ';
            pictureCountNumber++;
        }
    }
    wrap.innerHTML = str;
}

