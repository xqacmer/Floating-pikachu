  <script type="text/javascript" src="这里填写spig.js的链接路径" charset="gb2312"></script>
<style>
.spig {display:block;width:130px;height:170px;position:absolute;bottom: 300px;left:160px;z-index:9999;}
#message{color :#191919;border: 1px solid #c4c4c4;background:#ddd;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;min-height:1em;padding:5px;top:-45px;position:absolute;text-align:center;width:auto !important;z-index:10000;-moz-box-shadow:0 0 15px #eeeeee;-webkit-box-shadow:0 0 15px #eeeeee;border-color:#eeeeee;box-shadow:0 0 15px #eeeeee;outline:none;}
.mumu{width:130px;height:170px;cursor: move;background:url(http://139.224.113.29/wp-content/themes/Vtrois-Kratos-4e29de2/xq1.png) no-repeat;}
</style>
    <div id="spig" class="spig">
        <div id="message">加载中……</div> 
        <div id="mumu" class="mumu"></div> 
    </div> 
    <!--.end spig--> 
    <span class="hitokoto" id="hitokoto" style="display:none">Loading...</span> 
       <div id="hjsbox" style="display:none"> 
        </div> 
<script>
setTimeout("getkoto()",1000); 
            var t; 
            function getkoto(){ 
                var hjs = document.createElement('script'); 
                hjs.setAttribute('id', 'hjs'); 
                hjs.setAttribute('src', 'https://api.lwl12.com/hitokoto/main/get?encode=json'); 
                document.getElementById("hjsbox").appendChild(hjs); 
                t=setTimeout("getkoto()",2000); 
            } 
            function echokoto(result){ 
                var hc = eval(result); 
                //$("#hitokoto").fadeTo(300,0); 
                document.getElementById("hitokoto").innerHTML = hc.hitokoto; 
                //$("#hitokoto").fadeTo(300,0.75); 
            }
</script>