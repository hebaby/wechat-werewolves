var app = getApp()
Page({
    data: {
        roles: [],
        imagePath: '../../../image/headPortait/',
        rolePath: '../../../image/Character/',
        isPreview: false
    },
    onLoad: function() {
        var roles = wx.getStorageSync('roles');
        if(roles) {
            this.setData({
                roles: roles
            })
        }
    },
    previewStart: function() {
        this.setData({
            isPreview: true
        })
    },
    previewEnd: function() {
        this.setData({
            isPreview: false
        })
    },
    exitButton: function() {
        wx.navigateTo({
            url: '../index'
        })
    },
    restartButton: function() {
        wx.navigateTo({
            url: '../assign/index'
        })
    }
})