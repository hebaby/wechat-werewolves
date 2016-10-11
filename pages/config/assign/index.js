var utils = require('../../../utils/util.js');
Page({
    data: {
        roleList: [],
        randomList: [],
        imagePath: '../../../image/headPortait/',
        rolePath: '../../../image/Character/',
        assignSrc: 'animals01.png',
        assignIndex: 1,
        roleSrc: 'human.png',
        roleName: '村民',
        isWatch: false,
        isShow: false,
        isEnd: false
    },
    onLoad: function () {
        var configInfo = wx.getStorageSync('config');
        var randomInfo = this.hashArray(configInfo);
        wx.setStorageSync('roles',randomInfo);
        //调用API从本地缓存中获取数据
        if(configInfo){
            this.setData({
                roleList: configInfo,
                randomList: randomInfo,
                roleSrc: randomInfo[0].url,
                roleName: randomInfo[0].name,
                assignIndex: 1,
                isWatch: false,
                isShow: false
            });
        }
    },
    checkIdentify: function (){
        console.log("玩家"+this.data.assignIndex+"正在查看身份.");
        var that = this;
        var data = {
            isShow: false,
        }
        this.setData({
            isWatch: true,
            isShow: true,
            isEnd: this.data.assignIndex==this.data.randomList.length
        })
        setTimeout(function(){
            that.setData(data);
        },1500)
    },
    nextOne: function (){
        console.log("玩家"+this.data.assignIndex+"确认身份完毕.");
        var nextOne = this.data.randomList[this.data.assignIndex];
        this.setData({
            isWatch: false,
            isShow: false,
            assignIndex: this.data.assignIndex+1,
            roleSrc: nextOne.url,
            roleName: nextOne.name
        })
    },
    returnJudge: function(){
        wx.setStorageSync('roles', this.data.randomList);
        wx.navigateTo({
            url: '../list/list'
        })
    },
    hashArray: function (aArray) {
        var bArray = [];
        aArray.forEach(function(item) {
            // 选中有效角色
            if(!item.flag) return;
            // 筛掉法官
            if(item.id==1) return;
            for(var i=0;i<item.number;i++){
                bArray.push({
                    name: item.name,
                    url: item.url,
                    id: item.id
                })
            }
        })
        var num = bArray.length;
        for (var i = 0; i < num; i++) {
            var iRand = parseInt(num * Math.random());
            var temp = bArray[i];
            bArray[i] = bArray[iRand];
            bArray[iRand] = temp;
        }
        return bArray;
    },

})