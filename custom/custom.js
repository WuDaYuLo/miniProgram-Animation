Component({
    properties: {
        name: {
            type: String,
            value: 'swan'
        }
    },
    data: {
        age: 1,
        number: ''
    },
    methods: {
        nextTick() {
            swan.showToast({
                title: '在控制台或者sConsole中查看执行顺序',
                icon: 'none'
            });
            this.setData({number: 1}) // 直接在当前同步流程中执行
            console.log(this.data.number);
            swan.nextTick(() => {
                this.setData({number: 3}) // 在当前同步流程结束后，下一个时间片执行         
                console.log(this.data.number);
            })
            this.setData({number: 2}) // 直接在当前同步流程中执行
            console.log(this.data.number);
        }
    }
});