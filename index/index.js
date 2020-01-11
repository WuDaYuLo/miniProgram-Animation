Page({
    data:{
      statusBarHeight: 0
    },
    onShow() { },
    onReady() {
      this.animation = swan.createAnimation({
        transformOrigin: "50% 50%",
        duration: 1000,
        timingFunction: "ease",
        delay: 0})
    },
    rotate() {
      this.animation.rotate(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    },
    rotateX() {
      this.animation.rotateX(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    },
    rotateY() {
      this.animation.rotateY(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    },
     rotateZ() {
      this.animation.rotateZ(Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    },
    rotate3d() {
      this.animation.rotate3d(Math.random() * 720 - 360,Math.random() * 720 - 360,Math.random() * 720 - 360,Math.random() * 720 - 360).step()
      this.setData({animation: this.animation.export()})
    },
    scale() {
      this.animation.scale(Math.random() * 2, Math.random() * 3).step()
      this.setData({animation: this.animation.export()})
    },
    scaleX() {
      this.animation.scaleX(Math.random() * 2).step()
      this.setData({animation: this.animation.export()})
    },
    scaleY() {
      this.animation.scaleY(Math.random() * 2).step()
      this.setData({animation: this.animation.export()})
    },
    scale3d() {
      this.animation.scale3d(Math.random() * 2, Math.random() * 2, Math.random() * 2).step()
      this.setData({animation: this.animation.export()})
    },
    translate() {
      this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      this.setData({animation: this.animation.export()})
    },
     translateX() {
      this.animation.translateX(Math.random() * 100 - 50).step()
      this.setData({animation: this.animation.export()})
    },
    translateY() {
      this.animation.translateY(Math.random() * 100 - 50).step()
      this.setData({animation: this.animation.export()})
    },
    translateZ() {
        let distance = (Math.random() * 2).toFixed(2)
        this.animation.translateZ(distance).step()
        this.setData({animation: this.animation.export()})
        swan.showToast({
            title: 'z轴的平移距离为' + distance,
            icon: 'none'
        });
    },
    translate3d() {
      this.animation.translate3d(Math.random() * 100 - 50,Math.random() * 100 - 50,Math.random() * 100 - 50).step()
      this.setData({animation: this.animation.export()})
    },
    skew() {
        this.animation.skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({animation: this.animation.export()})
    },
    skewX() {
        this.animation.skewX(Math.random() * 90).step()
        this.setData({animation: this.animation.export()})
    },
    skewY() {
        this.animation.skewY(Math.random() * 90).step()
        this.setData({animation: this.animation.export()})
    },
    matrix() {
        this.animation.matrix(1, 2, 2, 1, 20, 20).step()
        this.setData({animation: this.animation.export()})
    },
    matrix3d() {
        this.animation.matrix3d(
            1,0,0,0,
            0,1,0,0,
            0,0,1,0,
            -50,-100,0,1
        ).step()
        // 根据matrix3d(scalex,0,0,0,skewx,scaley,0,0,0,0,scalez,0,translatex,translatey,translatez,1)变化规则
        //上面相当于 scale3d(1,1,1)  translate3d(-50, -100, 0)  rotate3d(0, 0, 0, 0deg) skew(0deg, 0deg)
        //可写成如下形式
        // this.animation.scale3d(1,1,1)
        // .translate3d(-50, -100, 0) 
        // .rotate3d(0, 0, 0, 0)
        // .skew(0, 0)
        // .step()
        this.setData({animation: this.animation.export()})
    },

    scrollToTop() {
        swan.pageScrollTo({
            scrollTop: 0,
            duration: 300,
            success: res => {
                console.log('pageScrollTo success', res);
            },
            fail: err => {
                console.log('pageScrollTo fail', err);
            }
        });
    },
    scrollToBottom(){
        swan.createSelectorQuery()
        .select(".image")
        .boundingClientRect(function(rect) {
            swan.pageScrollTo({
                scrollTop: rect.bottom,
                duration: 300,
                success: res => {
                    console.log('pageScrollTo success', res);
                },
                fail: err => {
                    console.log('pageScrollTo fail', err);
                }
            });
        })
        .exec();
    },
    onPullDownRefresh(){
        swan.showModal({
            title: 'success',
            content: '已触发页面刷新'
        });
    }
});