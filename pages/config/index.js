//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    count: 7,
    imagePath: '../../image/Character/',
    roles: [
      {
        name: '法官',
        url: 'judge.png',
        flag: false,
        id: 1,
        number: 0,
        type: 0
      },{
        name: '狼人',
        url: 'werewolf.png',
        flag: false,
        id: 2,
        number: 0,
        type: 0
      },{
        name: '平民',
        url: 'human.png',
        flag: false,
        id: 3,
        number: 0,
        type: 0
      },{
        name: '预言家',
        url: 'seer.png',
        flag: false,
        id: 4,
        number: 0,
        type: 0
      },{
        name: '守卫',
        url: 'guard.png',
        flag: false,
        id: 5,
        number: 0,
        type: 0
      },{
        name: '女巫',
        url: 'witch.png',
        flag: false,
        id: 6,
        number: 0,
        type: 0
      },{
        name: '盗贼',
        url: 'thief.png',
        flag: false,
        id: 7,
        number: 0,
        type: 0
      },{
        name: '丘比特',
        url: 'cupid.png',
        flag: false,
        id: 8,
        number: 0,
        type: 0
      },{
        name: '猎人',
        url: 'hunter.png',
        flag: false,
        id: 9,
        number: 0,
        type: 0
      },{
        name: '长老',
        url: 'elder.png',
        flag: false,
        id: 10,
        number: 0,
        type: 0
      },{
        name: '白痴',
        url: 'idiot.png',
        flag: false,
        id: 11,
        number: 0,
        type: 0
      },{
        name: '替罪羊',
        url: 'scapegoat.png',
        flag: false,
        id: 12,
        number: 0,
        type: 0
      },{
        name: '警长',
        url: 'police.png',
        flag: false,
        id: 13,
        number: 0,
        type: 0
      },{
        name: '吹笛者',
        url: 'piper.png',
        flag: false,
        id: 14,
        number: 0,
        type: 0
      },{
        name: '野孩子',
        url: 'wildChild.png',
        flag: false,
        id: 15,
        number: 0,
        type: 0
      },{
        name: '乌鸦嘴',
        url: 'crow.png',
        flag: false,
        id: 16,
        number: 0,
        type: 0
      },{
        name: '白狼',
        url: 'whiteWolf.png',
        flag: false,
        id: 17,
        number: 0,
        type: 0
      },{
        name: '狂狼',
        url: 'bigWolf.png',
        flag: false,
        id: 18,
        number: 0,
        type: 0
      },{
        name: '天使',
        url: 'angel.png',
        flag: false,
        id: 19,
        number: 0,
        type: 0
      },{
        name: '狼王',
        url: 'wolfKing.png',
        flag: false,
        id: 20,
        number: 0,
        type: 0
      }
    ],
    roleList:  [
      {
        name: '法官',
        url: 'judge.png',
        flag: true,
        id: 1,
        number: 1,
        type: 0
      },{
        name: '狼人',
        url: 'werewolf.png',
        flag: true,
        id: 2,
        number: 1,
        type: 2
      },{
        name: '平民',
        url: 'human.png',
        flag: true,
        id: 3,
        number: 4,
        type: 2
      },{
        name: '预言家',
        url: 'seer.png',
        flag: true,
        id: 4,
        number: 1,
        type: 2
      },{
        name: '守卫',
        url: 'guard.png',
        flag: false,
        id: 5,
        number: 0,
        type: 1
      },{
        name: '女巫',
        url: 'witch.png',
        flag: false,
        id: 6,
        number: 0,
        type: 1
      },{
        name: '盗贼',
        url: 'thief.png',
        flag: false,
        id: 7,
        number: 0,
        type: 1
      },{
        name: '丘比特',
        url: 'cupid.png',
        flag: false,
        id: 8,
        number: 0,
        type: 1
      },{
        name: '猎人',
        url: 'hunter.png',
        flag: false,
        id: 9,
        number: 0,
        type: 1
      },{
        name: '长老',
        url: 'elder.png',
        flag: false,
        id: 10,
        number: 0,
        type: 1
      },{
        name: '白痴',
        url: 'idiot.png',
        flag: false,
        id: 11,
        number: 0,
        type: 1
      },{
        name: '替罪羊',
        url: 'scapegoat.png',
        flag: false,
        id: 12,
        number: 0,
        type: 1
      },{
        name: '警长',
        url: 'police.png',
        flag: false,
        id: 13,
        number: 0,
        type: 1
      },{
        name: '吹笛者',
        url: 'piper.png',
        flag: false,
        id: 14,
        number: 0,
        type: 1
      },{
        name: '野孩子',
        url: 'wildChild.png',
        flag: false,
        id: 15,
        number: 0,
        type: 1
      },{
        name: '乌鸦嘴',
        url: 'crow.png',
        flag: false,
        id: 16,
        number: 0,
        type: 1
      },{
        name: '白狼',
        url: 'whiteWolf.png',
        flag: false,
        id: 17,
        number: 0,
        type: 1
      },{
        name: '狂狼',
        url: 'bigWolf.png',
        flag: false,
        id: 18,
        number: 0,
        type: 1
      },{
        name: '天使',
        url: 'angel.png',
        flag: false,
        id: 19,
        number: 0,
        type: 1
      },{
        name: '狼王',
        url: 'wolfKing.png',
        flag: false,
        id: 20,
        number: 0,
        type: 1
      }
    ],
    coverPath: 'judge.png',
    coverText: '法官',
    coverNumber: 0,
    coverId: 0,
    isCover: false,
    toastMessage: '',
    toastHidden: true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log("Status:onLoad.");
    var configInfo = wx.getStorageSync('config');
    var total = wx.getStorageSync('total');
    //调用API从本地缓存中获取数据
    if(configInfo){
      this.setData({
        roleList: configInfo,
        count: total
      });
    }else {
      wx.setStorageSync('config', this.data.roleList);
    }
  },
  changeNumber: function(event) {
    var id = parseInt(event.currentTarget.dataset.value,10);
    var dataList = this.data.roleList;
    var total = this.data.count;
    var item = dataList[id-1];
    switch(item.type) {
      case 0 :
        break;
      case 1 :
        if(item.number == 0){
          item.number = 1;
          item.flag = true;
          total +=1;
        }else {
          item.number = 0;
          item.flag = false;
          total -=1;
        };
        break;
      case 2 :
        this.setData({
          isCover: true,
          coverPath: item.url,
          coverText: item.name,
          coverNumber: item.number,
          coverId: item.id
        });
        break;
      default:
        break;
    }
    this.setData({
      roleList: dataList,
      count: total
    });
  },
  cancelCover: function(event) {
    this.setData({
      isCover: false
    })
  },
  addButton: function(event) {
    var number = this.data.coverNumber;
    var dataList = this.data.roleList;
    var index = this.data.coverId;
    if (number<=8) {
      dataList[index-1].number +=1;
      dataList[index-1].flag = true;
      this.setData({
        coverNumber: number+1,
        count: this.data.count+1,
        roleList: dataList
      })
    }
  },
  minusButton: function(event) {
    var number = this.data.coverNumber;
    var dataList = this.data.roleList;
    var index = this.data.coverId;
    if (number>0) {
      dataList[index-1].number -=1;
      if(dataList[index-1].number==0) {
        dataList[index-1].flag = false;
      }
      this.setData({
        coverNumber: number-1,
        count: this.data.count-1,
        roleList: dataList
      })
    }
  },
  playGame: function() {
    if(this.data.count>1){
      wx.setStorageSync('config', this.data.roleList);
      wx.setStorageSync('total', this.data.count);
      wx.navigateTo({
        url: 'assign/index'
      })
    }else{
      this.showToast('请先设置玩家.');
    }
  },
  showToast: function(info) {
    this.setData({
      toastMessage: info,
      toastHidden: false
    })
  },
  toastChange: function(){
    this.setData({
      toastHidden: true
    })
  }
})
