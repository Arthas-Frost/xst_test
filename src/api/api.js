import request from '@/utils/request'


// weixin登录
export function wxLogin (data){
  return request({
    url:"/wxLogin/",
    method:"post",
    data
  })
}

// 微信头像昵称获取
export function WeiXinImg (){
  return request({
    url:"/wxInfo/1/",
    method:"get"
  })
}

// 查看是否完善信息
export function getInviteCode (){
  return request({
    url:"/getInviteCode/",
    method:"get"
  })
}

// 查看邀请码
export function haveCompleted (){
  return request({
    url:"/haveCompleted/",
    method:"get"
  })
}

// 完善信息,绑定邀请者
export function bindInvitor (data){
  return request({
    url:"/bindInvitor/",
    method:"post",
    data
  })
}

// 自我绑定完善信息
export function selfBind (data){
  return request({
    url:"/selfBind/",
    method:"post",
    data
  })
}

// 智能问答
export function InquiryResult (data){
  return request({
    url:"/inquiryResult/",
    method:"post",
    data
  })
}

// 获取检查地点
export function getPlace (){
  return request({
    url:"/getPlace/",
    method:"get"
  })
}

// 检查预约日期
export function getDays (data){
  return request({
    url:"/getDays/",
    method:"post",
    data
  })
}

// 检查预约详细日期
export function getDetailTime (data){
  return request({
    url:"/getDetailTime/",
    method:"post",
    data
  })
}

// 训练预约详细日期
export function getDetailTime1 (data){
  return request({
    url:"/getDetailTime1/",
    method:"post",
    data
  })
}

// 训练预约日期
export function getDays1 (data){
  return request({
    url:"/getDays1/",
    method:"post",
    data
  })
}

// 检查预约
export function createReservation (data){
  return request({
    url:"/createReservation/",
    method:"post",
    data
  })
}

// 训练预约
export function createReservation1 (data){
  return request({
    url:"/createReservation1/",
    method:"post",
    data
  })
}

// 发送短信验证码
export function sendCode (data){
  return request({
    url:"/sendCode/",
    method:"post",
    data
  })
}

// 发送自己绑定验证码
export function sendSelfBindCode (data){
  return request({
    url:"/sendSelfBindCode/",
    method:"post",
    data
  })
}

// 查看我的报告
export function myReport (){
  return request({
    url:"/myReport/",
    method:"get"
  })
}

// 查看我的档案
export function myProfiles (){
  return request({
    url:"/myProfiles/",
    method:"get"
  })
}

// 首页轮播
export function bannerNews (){
  return request({
    url:"/bannerNews/",
    method:"get"
  })
}

// 大家在看
export function mostViewNews (){
  return request({
    url:"/mostViewNews/",
    method:"get"
  })
}

// 首页轮播详情
export function bannerNewsDetail (data){
  return request({
    url:"/bannerNewsDetail/"+data+"/",
    method:"get"
  })
}

// 查看我的兑换券
export function myCouPon (){
  return request({
    url:"/myCouPon/",
    method:"get"
  })
}

// 查看我的检查预约
export function myReservation (){
  return request({
    url:"/myReservation/",
    method:"get"
  })
}

// 查看我的积分
export function myJiFen (){
  return request({
    url:"/myJiFen/",
    method:"get"
  })
}

// 取消我的检查预约
export function deleteReservation (data){
  return request({
    url:"/deleteReservation/"+data+"/",
    method:"delete"
  })
}

// 取消我的检查预约
export function deleteReservation1 (data){
  return request({
    url:"/deleteReservation1/"+data+"/",
    method:"delete"
  })
}

// 查看我的训练预约
export function myReservation1 (){
  return request({
    url:"/myReservation1/",
    method:"get"
  })
}

// 大家在看详情
export function mostViewNewsDetail (data){
  return request({
    url:"/mostViewNewsDetail/"+data+"/",
    method:"get"
  })
}
