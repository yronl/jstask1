/**
 * Created by Administrator on 2017/6/17.
 */




    //获取DOM对象
    var box = document.getElementsByClassName("box");
    var color = ['red', 'pink', 'black','gold', 'blue', 'yellow', 'grey', 'coral', 'paleturquoise','mediumaquamarine'];
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");
    //获取随机数
    function selNum(x){
        return Math.floor(Math.random()*x)
    }
function shan(){

    for(var i=0;i<box.length;i++){
        box[i].style.background="#fea500"
    }
    var t1=selNum(9);
     var t2=selNum(9);
      var t3=selNum(9);
   while (t1==t2||t1==t3||t2==t3){
       t2=selNum(9);
       t3=selNum(9);
   }
   console.log(t1,t2,t3);
    var t4=selNum(9);
    var t5=selNum(9);
    var t6=selNum(9);
  while (t4==t5||t4==t6||t5==t6){
    t5=selNum(9);
      t6=selNum(9);
}
   console.log(t4,t5,t6);
   box[t1].style.background=color[t4];
   box[t2].style.background=color[t5];
   box[t3].style.background=color[t6];
}

    function zou(){
        for(var i=0;i<box.length;i++){
            box[i].style.background="#fea500"
        }
        shan()
    }
yes.onclick=function(){
    t=setInterval(zou,1000);
    yes.style.background="#fea500";
    yes.style.color="#fff";
    no.style.background="#fff";
    no.style.color="#fea500";
    yes.disabled=true;

};

no.onclick=function(){
    t=clearInterval(t);
    yes.style.background="#fff";
    no.style.background="#fea500";
    no.style.color="#fff";
    yes.style.color="#fea500";

    for(var i=0;i<box.length;i++){
        box[i].style.background="#fea500"
    }

    yes.disabled=false;
    no.onmouseout=function(){
        no.style.background="#fff";
        no.style.color="#fea500";
    }
};

