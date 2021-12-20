// pages/store/list/list.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectName:"",
    materialList:[
      {
        "c_valid": true,
        "m_name": "葡萄",
        "m_code": "0001",
        "c_create_time": "2021-11-20 14:41:19",
        "_id": "9bfd776117c14cc0bfa8fc04aec22498",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021-11-20 14:41:19",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "佛手",
        "m_code": "0002",
        "c_create_time": "2021-11-20 14:40:37",
        "_id": "93f623e87ccd4ee9b907b92414ff1a0d",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021-11-20 14:40:37",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "香茅",
        "m_code": "0001",
        "c_create_time": "2021/11/20 14:40",
        "_id": "d6cf52ee3e9b43b0b3b346db7ba0aabe",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "佛手",
        "m_code": "0002",
        "c_create_time": "2021/11/20 14:40",
        "_id": "991bba0fd1f84782b78127e15e82017f",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "菠萝",
        "m_code": "0003",
        "c_create_time": "2021/11/20 14:40",
        "_id": "21ad53d9ed1b4ba4aee39e4a01874409",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "新鲜凤梨块",
        "m_code": "0004",
        "c_create_time": "2021/11/20 14:40",
        "_id": "61a94e928a354875afbd3c50256a1b05",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "新鲜腌制菠萝酱",
        "m_code": "0005",
        "c_create_time": "2021/11/20 14:40",
        "_id": "5672c026cb8a45839df6bb9634e916cc",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "芒果",
        "m_code": "0006",
        "c_create_time": "2021/11/20 14:40",
        "_id": "c2c78b4fa90f4e268f941607e79a45a4",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "柠檬",
        "m_code": "0009",
        "c_create_time": "2021/11/20 14:40",
        "_id": "7f6ad326bed44c6aae6222e4ad1c1044",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "柠檬角",
        "m_code": "0010",
        "c_create_time": "2021/11/20 14:40",
        "_id": "65791833a8854258a624d1f432ada924",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "龙芽茉绿",
        "m_code": "0011",
        "c_create_time": "2021/11/20 14:40",
        "_id": "155ff4fe598042568b5f234ab599ac13",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "滇南红玉",
        "m_code": "0012",
        "c_create_time": "2021/11/20 14:40",
        "_id": "66fe1daa530441daa5a3859f59f36426",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "玉麒麟",
        "m_code": "0013",
        "c_create_time": "2021/11/20 14:40",
        "_id": "bf50ca70e1334bdf9a9fef1f427bb95c",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "肉桂乌龙",
        "m_code": "0014",
        "c_create_time": "2021/11/20 14:40",
        "_id": "ac0b510f868c4ef6be2e852b0bcd3eb3",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "兰香铁观音",
        "m_code": "0015",
        "c_create_time": "2021/11/20 14:40",
        "_id": "3a1af747e6d5443b85179d7f758c6307",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "龙芽茉绿（茶汤）",
        "m_code": "0016",
        "c_create_time": "2021/11/20 14:40",
        "_id": "9edf70eee5744333a515513eb78e86a6",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "滇南红玉（茶汤）",
        "m_code": "0017",
        "c_create_time": "2021/11/20 14:40",
        "_id": "c8830572b4f8442289adda8a890ac4e3",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "玉麒麟（茶汤）",
        "m_code": "0018",
        "c_create_time": "2021/11/20 14:40",
        "_id": "d7e0bb05f75c4fdc945cf4d8cf481cf8",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "肉桂乌龙（茶汤）",
        "m_code": "0019",
        "c_create_time": "2021/11/20 14:40",
        "_id": "9b832d424167450f81757a99f51b7940",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "兰香铁观音（茶汤）",
        "m_code": "0020",
        "c_create_time": "2021/11/20 14:40",
        "_id": "e9945cae02bb423fac26704d626e72b3",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "纯抹茶粉",
        "m_code": "0021",
        "c_create_time": "2021/11/20 14:40",
        "_id": "1e8d9a4423934051aee81cc615fac6b1",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "熟黄豆粉",
        "m_code": "0022",
        "c_create_time": "2021/11/20 14:40",
        "_id": "d598670a84874445afeb0c29518ee9ba",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "奥利奥碎",
        "m_code": "0023",
        "c_create_time": "2021/11/20 14:40",
        "_id": "07f26e8d678844cea286e92cfa3acee1",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "马卡龙碎",
        "m_code": "0024",
        "c_create_time": "2021/11/20 14:40",
        "_id": "9feeaaf3fcba400cb7f871d6437fefd7",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "植脂末",
        "m_code": "0025",
        "c_create_time": "2021/11/20 14:40",
        "_id": "93060f1a793742279543e1c84a2ac733",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "双皮奶风味固体饮料",
        "m_code": "0026",
        "c_create_time": "2021/11/20 14:40",
        "_id": "99023b1e51fc4e7e9a93e96bfa3b186e",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "布丁预拌粉",
        "m_code": "0027",
        "c_create_time": "2021/11/20 14:40",
        "_id": "986fdd24e1264c03828922094438134e",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "糯米麻薯粉",
        "m_code": "0028",
        "c_create_time": "2021/11/20 14:40",
        "_id": "d83a32a055024b1c867ad3b3c66dae0a",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "红糖糖浆",
        "m_code": "0029",
        "c_create_time": "2021/11/20 14:40",
        "_id": "f6e263b9f2b94353bf89114b9b2270c1",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "黑糖粉",
        "m_code": "0030",
        "c_create_time": "2021/11/20 14:40",
        "_id": "0df2c993cc744bf5a2d4f20c2289ef8a",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "白砂糖",
        "m_code": "0031",
        "c_create_time": "2021/11/20 14:40",
        "_id": "608da77547364861b51176a971cc74f5",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "精制海盐",
        "m_code": "0032",
        "c_create_time": "2021/11/20 14:40",
        "_id": "b6025fcd507c40dd8d8a89b4e664566a",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "黄金糖浆",
        "m_code": "0033",
        "c_create_time": "2021/11/20 14:40",
        "_id": "bbdb297c22834f73a82120eccb2819cb",
        "clf_id": "7a7c561ca14c42fbaa67b8e433b51202",
        "clf_name": "粉料类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "芋泥",
        "m_code": "0034",
        "c_create_time": "2021/11/20 14:40",
        "_id": "c1da4f9f845743f284d65c8adadb80a7",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "特奶",
        "m_code": "0035",
        "c_create_time": "2021/11/20 14:40",
        "_id": "9d88f3683d6d4befb5385ca9bc0cf555",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "西米制作",
        "m_code": "0036",
        "c_create_time": "2021/11/20 14:40",
        "_id": "8f30bde7369e4704b038b5d864d34537",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "奶冻",
        "m_code": "0037",
        "c_create_time": "2021/11/20 14:40",
        "_id": "071d1394d4b343bbad24c7a2f006c0ef",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "奶盖",
        "m_code": "0038",
        "c_create_time": "2021/11/20 14:40",
        "_id": "9dca16a5b16a4b8b8094385bc347edb5",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "熟制珍珠粉圆",
        "m_code": "0039",
        "c_create_time": "2021/11/20 14:40",
        "_id": "46e2204bc33544fa875cea62ed3ade15",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "熟制小芋圆（芋圆啵啵）",
        "m_code": "0040",
        "c_create_time": "2021/11/20 14:40",
        "_id": "e279a7392d484d5f9c2277b78aedc6b0",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "冻冻",
        "m_code": "0041",
        "c_create_time": "2021/11/20 14:40",
        "_id": "7a695a4b4c1d48aeba2fb6bda31192f1",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "速冻血糯米饭熟制后",
        "m_code": "0042",
        "c_create_time": "2021/11/20 14:40",
        "_id": "9d38f45848ee4a14b80fe278bb306ae3",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "熟制糯米麻薯",
        "m_code": "0043",
        "c_create_time": "2021/11/20 14:40",
        "_id": "690b281c4f5c4e3ab7d008a44aea563a",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "奶油枪内奶油",
        "m_code": "0044",
        "c_create_time": "2021/11/20 14:40",
        "_id": "ede2f1fd75c6467b98595596df975b94",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "外卖奶油",
        "m_code": "0045",
        "c_create_time": "2021/11/20 14:40",
        "_id": "d8165e1a601a4a32b3f4a39371c6c5df",
        "clf_id": "673e602592984846b31c21fef361b108",
        "clf_name": "半成品类",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "桂花冻冻",
        "m_code": "0046",
        "c_create_time": "2021/11/20 14:40",
        "_id": "5a6fda6810644e9aa43a99c09075e0f8",
        "clf_id": "167c6e7e2a1142348321161829005ff9",
        "clf_name": "自制类原料",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "珍珠粉圆",
        "m_code": "0047",
        "c_create_time": "2021/11/20 14:40",
        "_id": "c81360e59cd341a58fcfbc637d24b9c7",
        "clf_id": "167c6e7e2a1142348321161829005ff9",
        "clf_name": "自制类原料",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "木薯小丸子",
        "m_code": "0048",
        "c_create_time": "2021/11/20 14:40",
        "_id": "4cf2af69522547f59bda5374e039d8eb",
        "clf_id": "167c6e7e2a1142348321161829005ff9",
        "clf_name": "自制类原料",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "小芋圆",
        "m_code": "0049",
        "c_create_time": "2021/11/20 14:40",
        "_id": "81bc4ffefd2142ccbcc88c813ab94457",
        "clf_id": "167c6e7e2a1142348321161829005ff9",
        "clf_name": "自制类原料",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "速冻芋头块",
        "m_code": "0050",
        "c_create_time": "2021/11/20 14:40",
        "_id": "44ebbeefa6984e32bf3fe857fd0a0013",
        "clf_id": "167c6e7e2a1142348321161829005ff9",
        "clf_name": "自制类原料",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "水晶冻粉",
        "m_code": "0051",
        "c_create_time": "2021/11/20 14:40",
        "_id": "02c0dba51df84274bd30f0ee420f4e72",
        "clf_id": "167c6e7e2a1142348321161829005ff9",
        "clf_name": "自制类原料",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "二沙红豆罐头",
        "m_code": "0052",
        "c_create_time": "2021/11/20 14:40",
        "_id": "7d2d5d98ddbb4e9aadbb719332f91c31",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "西柚果粒罐头",
        "m_code": "0053",
        "c_create_time": "2021/11/20 14:40",
        "_id": "c60d6951ce5f462585ff559c2dfa408c",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "百香果原浆",
        "m_code": "0054",
        "c_create_time": "2021/11/20 14:40",
        "_id": "6411e43bfd1a4758a03a4a84224e925d",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "冷冻芒果浆",
        "m_code": "0055",
        "c_create_time": "2021/11/20 14:40",
        "_id": "0a8c95593c8145f999c3aa8a6781f629",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "生椰乳",
        "m_code": "0056",
        "c_create_time": "2021/11/20 14:40",
        "_id": "c09a29d62438465bb435dc359a855297",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "安佳稀奶油",
        "m_code": "0057",
        "c_create_time": "2021/11/20 14:40",
        "_id": "414aafbfc2f04d49973670a2358ab49b",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "厚牛乳",
        "m_code": "0058",
        "c_create_time": "2021/11/20 14:40",
        "_id": "6c31f06e5d634228b74782a6654ed690",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "冰醇厚乳",
        "m_code": "0059",
        "c_create_time": "2021/11/20 14:40",
        "_id": "401e6c83c8ea49219f3bd385c362d399",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "椰浆（越南）",
        "m_code": "0060",
        "c_create_time": "2021/11/20 14:40",
        "_id": "9165cd5ba8c24481a01e6aeae4cfbdfe",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "原味晶球",
        "m_code": "0061",
        "c_create_time": "2021/11/20 14:40",
        "_id": "e6f49da6a91446a5996450df25bb6a0a",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "糖蜜椰果",
        "m_code": "0062",
        "c_create_time": "2021/11/20 14:40",
        "_id": "94500b3071b8411893ef43f3c0acbac4",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "葡萄饮料浓浆",
        "m_code": "0063",
        "c_create_time": "2021/11/20 14:40",
        "_id": "1469b63107184ed69af8d38155494f74",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "仔姜汁",
        "m_code": "0064",
        "c_create_time": "2021/11/20 14:40",
        "_id": "874a060c0a02448d9c5310ae10df146d",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "焦糖海盐糖浆",
        "m_code": "0065",
        "c_create_time": "2021/11/20 14:40",
        "_id": "dbecf33e5eba42afa0fe3fdecafa87f7",
        "clf_id": "8d2da45004e54d3d815b57d72e22fd27",
        "clf_name": "其它",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "PP棉",
        "m_code": "0066",
        "c_create_time": "2021/11/20 14:40",
        "_id": "505ccd76c9224bed854153975323812b",
        "clf_id": "063ea1df8ee54c01bf33c769c6b05043",
        "clf_name": "过滤器滤芯",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "软化",
        "m_code": "0067",
        "c_create_time": "2021/11/20 14:40",
        "_id": "859e700ba166417497e6fb874b144b8f",
        "clf_id": "063ea1df8ee54c01bf33c769c6b05043",
        "clf_name": "过滤器滤芯",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "超滤",
        "m_code": "0068",
        "c_create_time": "2021/11/20 14:40",
        "_id": "30f9b99cd3344f8c92ad08e5785f2afe",
        "clf_id": "063ea1df8ee54c01bf33c769c6b05043",
        "clf_name": "过滤器滤芯",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "双联爱惠浦（mc2和7fc-s）",
        "m_code": "0069",
        "c_create_time": "2021/11/20 14:40",
        "_id": "8b7267a1718b47e0a4f7637d40bf056a",
        "clf_id": "063ea1df8ee54c01bf33c769c6b05043",
        "clf_name": "过滤器滤芯",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "凯玛仕牌清洁消毒液（配制后）",
        "m_code": "0070",
        "c_create_time": "2021/11/20 14:40",
        "_id": "14cea20198b1419a96a9ed0b350dccdc",
        "clf_id": "9766e9619ab1440e8688fe56b2958b84",
        "clf_name": "消毒剂",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "碟净超浓缩清洁剂  （配制后）",
        "m_code": "0071",
        "c_create_time": "2021/11/20 14:40",
        "_id": "2ff15efca4544a99a2757231671aca06",
        "clf_id": "9766e9619ab1440e8688fe56b2958b84",
        "clf_name": "消毒剂",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "含氯消毒粉（配制后）",
        "m_code": "0072",
        "c_create_time": "2021/11/20 14:40",
        "_id": "ac21182e0b1b4445b638165a06b5a276",
        "clf_id": "9766e9619ab1440e8688fe56b2958b84",
        "clf_name": "消毒剂",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "渍清餐具浸渍粉",
        "m_code": "0073",
        "c_create_time": "2021/11/20 14:40",
        "_id": "187c0f4821184dd79b589e3f02cb7323",
        "clf_id": "9766e9619ab1440e8688fe56b2958b84",
        "clf_name": "消毒剂",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "涤垢水垢清除剂",
        "m_code": "0074",
        "c_create_time": "2021/11/20 14:40",
        "_id": "855d2a67b122455d81c719f960e736b9",
        "clf_id": "9766e9619ab1440e8688fe56b2958b84",
        "clf_name": "消毒剂",
        "c_update_time": "2021/11/20 14:40",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "消毒剂2",
        "c_version": 1,
        "c_create_time": "2021-11-29 16:27:57",
        "_id": "277a93a548c641d0b49d61990eae315e",
        "clf_id": "9766e9619ab1440e8688fe56b2958b84",
        "clf_name": "消毒剂",
        "c_update_time": "2021-11-29 16:27:57",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "消毒剂3",
        "m_code": "0075",
        "c_version": 1,
        "c_create_time": "2021-11-30 16:44:14",
        "_id": "eb65447509c54bdc80537040ce8a6e3d",
        "clf_id": "9766e9619ab1440e8688fe56b2958b84",
        "clf_name": "消毒剂",
        "c_update_time": "2021-11-30 16:44:14",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "测试物料新增",
        "c_version": 2,
        "c_create_time": "2021-11-30 17:42:39",
        "_id": "9490cdede4ae4d7fb99cf479deefc9b2",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021-12-03 09:16:48",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "测试",
        "m_code": "0076",
        "c_version": 1,
        "c_create_time": "2021-12-10 14:35:38",
        "_id": "a3a07f1c69e4476692e29335216455bd",
        "clf_id": "22276f9335ff4a45bb74eb507b5ad0ad",
        "clf_name": "茶叶类",
        "c_update_time": "2021-12-10 14:35:38",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "芒果粒腌制",
        "m_code": "0077",
        "c_version": 1,
        "c_create_time": "2021-12-17 11:41:25",
        "_id": "58a21be0f5874d99ac624b84cf71559e",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021-12-17 11:41:25",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      },
      {
        "c_valid": true,
        "m_name": "手碎芒果肉",
        "m_code": "0078",
        "c_version": 1,
        "c_create_time": "2021-12-17 11:41:35",
        "_id": "05c775e4e29d4c63b419a8bd34c21a37",
        "clf_id": "93a0c7f6f95e41ccb5a937304325a666",
        "clf_name": "水果类",
        "c_update_time": "2021-12-17 11:41:35",
        "c_update_user": "idxq",
        "c_create_user": "idxq"
      }
    ],
    statusBarHeight:wx.getSystemInfoSync()['statusBarHeight'],
    menuWidth:wx.getMenuButtonBoundingClientRect()['width']
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  onChange(e) {
    this.setData({
      selectName: e.detail,
    });
  },
  onSearch(){
    console.log('搜索' , this.data.selectName);
  },
  toInfo(e){
    const item = e.currentTarget.dataset.item;
    wx.navigateTo({
      url: `../info/info?id=${item._id}&name=${item.m_name}`,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
        show:true
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})