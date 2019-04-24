// layui.use(['layer','form'],function(){
//     var layer = layui.layer
//     ,form = layui.form;
//     layer.msg('this is my first layui!');
// })
//模块化用法
// layui.config({
//     base:'/layui/res/js/modules/'
// }).use('modules');

//轮播
layui.use(['carousel','form'],function(){
    var carousel1 = layui.carousel
    ,form = layui.form;
    carousel1.render({
        elem:'#name'
        ,width:'1200px'
        ,height:'450px'
        ,interval:3000
        ,arrow:'hover'
        ,anim:'default'
    })
})
/* 退出按钮 */ 
layui.use(['form','element','layer'],function(){
    var form = layui.form
    ,element = layui.element
    ,layer = layui.layer;
    //监听提交
    form.on('submit(formDemo)', function(data){
        layer.msg(JSON.stringify(data.field));
        return false;
    });    
    menuHeght();
    contentHeght();
})
/* 设置侧边自适应高度 */
function menuHeght(){
    var height = document.documentElement.clientHeight-50;
    $('.menu').height(height);
}
function refun(){
    layui.use(['form','element','layer'],function(){
        var form = layui.form
        ,element = layui.element
        ,layer = layui.layer;
    })
    layer.confirm('确定要退出么？', {
        offset: '300px'
        ,icon:3
        ,btn: ['确定', '取消'] //可以无限个按钮
      }, function(index, layero){
        layer.close(index);
      }, function(index){
        layer.close(index);
    });
}
/* 删除按钮 */
function del(){
    layui.use(['form','element','layer'],function(){
        var form = layui.form
        ,element = layui.element
        ,layer = layui.layer;
    })
    layer.confirm('确定要删除么？', {
        offset: '200px'
        ,shade:0
        ,icon:2
        ,btn: ['确定', '取消'] //可以无限个按钮          
      }, function(index, layero){
        layer.close(index);
      }, function(index){
        layer.close(index);
    });   
}
/* menuShow */ 
function menuShow(obj){
    var menuCon = $(obj).attr('src');
    $('iframe').attr('src',menuCon);
}
// ruleContent
function ruleContent(obj){
    var menuCon = $(obj).attr('src');
    $('iframe').attr('src',menuCon);
}
//设置content自适应高度 
function contentHeght(){
    var height = document.documentElement.clientHeight-50;
    $('.fram').height(height);
}
//添加管理员/编辑管理员
function contentEdit(){
    layer.open({
        type: 2
        ,area:['480px','520px']
        ,content: 'contentEdit.html' //这里content是一个普通的String
    });  
}
//ruleContent 
layui.use(['form','layedit','layer','table'],function(){
    var form = layui.form;
    var layedit = layui.layedit;
    var layer = layui.layer;
    var table = layui.table;
    //表单初始赋值
    form.val('example', {
        "order": "1" // "name": "value"
        ,"menuName": "管理员管理"
        ,"controller": ""
        ,"hidehh": true //以name区分，复选框选中状态
        ,"forbidden": false //以name区分，复选框选中状态
    }) 
})