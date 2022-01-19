// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "亲爱的宝贝",  // 同上...
        "今天是你的生日",
        "也是我陪宝贝过的",
        "第一个生日哦~",
        "以前的日子里",
        "我不在宝贝的身边",
        "今后的日子里",
        "我不想再缺席任何一天",
        "希望我的宝贝在新的一年里",
        "贪吃不胖",
        "万事顺意",
        "每天都会在我身边",
        "小兔子般跳来跳去",
        "以后宝贝的每个生日",
        "我都会陪在宝贝身边",
        "永远宠你",
        "最后，祝我的宝贝",
        "生日快乐~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"亲爱的宝贝": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "宝贝点我一下",
        play: "再来一下？",
        bannar_coming: "再试试？",
        balloons_flying: "还有呢~",
        cake_fadein: "宝贝的生日蛋糕",
        light_candle: "把蜡烛点上叭~",
        wish_message: "宝贝~生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
