module.exports = ctx => {
  ctx.state.data = {
    books: [
      {
        uid: "000",
        title: "流浪地球",
        author: "刘慈欣",
        alias: ["earth wanderings"],
        cover: "",
        chapters: [
          {
            cid: "000",
            subtitle: "刹车时代",
            detail: [
              "我没见过黑夜，我没见过星星，我没见过春天、秋天和冬天。",
              "我出生在刹车时代结束的时候，那时地球刚刚停止转动。",
              "地球自转刹车用了四十二年，比联合政府的计划长了三年。妈妈给我讲过我们 全家看最后一个日落的情景，太阳落得很慢，仿佛在地平线上停住了，用了三天三 夜才落下去。当然，以后没有“天”也没有“夜”了，东半球在相当长的一段时间 里(有十几年吧)将处于永远的黄昏中，因为太阳在地平线下并没落深，还在半边天 上映出它的光芒。就在那次漫长的日落中，我出生了。",
              "黄昏并不意味着昏暗，地球发动机把整个北半球照得通明。地球发动机安装在亚洲和美洲大陆上，因为只有这两个大陆完整坚实的板块结构才能承受发动机对地球巨大的推力。地球发动机共有一万二千台，分布在亚洲和美洲大陆的各个平原上。",
              "从我住的地方，可以看到几百台发动机喷出的等离子体光柱。你想像一个巨大的宫殿，有雅典卫城上的神殿那么大，殿中有无数根顶天立地的巨柱，每根柱子像一根巨大的日光灯管那样发出蓝白色的强光。而你，是那巨大宫殿地板上的一个细菌，这样，你就可以想像到我所在的世界是什么样子了。其实这样描述还不是太准确，是地球发动机产生的切线推力分量刹住了地球的自转，因此地球发动机的喷射必须有一定的角度，这样天空中的那些巨型光柱是倾斜的，我们是处在一个将要倾倒的巨殿中！南半球的人来到北半球后突然置身于这个环境中，有许多人会精神失常的。",
              "比这景象更可怕的是发动机带来的酷热，户外气温高达七八十摄氏度，必须穿冷却服才能外出。在这样的气温下常常会有暴雨，而发动机光柱穿过乌云时的景象简直是一场噩梦！光柱蓝白色的强光在云中散射，变成无数种色彩组成的疯狂涌动的光晕，整个天空仿佛被白热的火山岩浆所覆盖。爷爷老糊涂了，有一次被酷热折磨得实在受不了，看到下大雨喜出望外，赤膊冲出门去，我们没来得及拦住他，外面雨点已被地球发动机超高温的等离子光柱烤热，把他身上烫脱了一层皮。"
            ]
          },
          {
            cid: "001",
            subtitle: "逃逸时代",
            detail: [
              "学校要搬入地下城了，我们是第一批入城的居民。校车钻进了一个高大的隧洞， 隧洞成不大的坡度向地下延伸。走了有半个钟头，我们被告之已入城了，可车窗外 哪有城市的样子？只看到不断掠过的错综复杂的支洞和洞壁上无数的密封门，在高 高洞顶一排泛光灯下，一切都呈单调的金属蓝色。想到后半生的大部分时光都要在 这个世界中度过，我们不禁黯然神伤。",
              "“原始人就住洞里，我们又住洞里了。”灵儿低声说，这话还是让小星老师听 见了。",
              "“没有办法的，孩子们，地面的环境很快就要变得很可怕很可怕，那时，冷的 时候，吐一口唾沫，还没掉到地上呢，就冻成小冰块儿了；热的时候，再吐一口唾 沫，还没掉到地上，就变成蒸汽了！”",
              "“冷我知道，因为地球离太阳越来越远了；可为什么还会热呢？”同车的一个 低年级的小娃娃问。",
              "“笨，没学过变轨加速吗？”我没好气地说。",
              "“没有。”",
              "灵儿耐心地解释起来，好像是为了分散刚才的悲伤。“是这样：跟你想的不同， 地球发动机没那么大劲儿，它只能给地球很小的加速度，不能把地球一下子推出太 阳轨道，在地球离开太阳前，还要绕着它转15个圈呢！在这15个圈中地球慢慢加速。",
              "现在，地球绕太阳转着一个挺圆的圈儿，可它的速度越快呢，这圈就越扁，越快越 扁越快越扁，太阳越来越移到这个扁圈的一边儿，所以后来，地球有时离太阳会很 远很远，当然冷了……”",
              "“可……还是不对！地球到最远的地方是很冷，可在扁圈的另一头儿，它离太 阳……嗯，我想想，按轨道动力学，还是现在这么近啊，怎么会更热呢？”"
            ]
          },
          {
            cid: "002",
            subtitle: "叛乱",
            detail: [
              "离开木星后，亚洲大陆上一万多台地球发动机再次全功率开动，这一次它们要 不停地运行500年，不停地加速地球。这500年中，发动机将把亚洲大陆上一半的山 脉用做燃料消耗掉。",
              "从四个多世纪死亡的恐惧中解脱出来，人们长出了一口气。但预料中的狂欢并 没有出现，接下来发生的事情出乎所有人的想像。",
              "在地下城的庆祝集会后，我一个人穿上密封服来到地面。童年时熟悉的群山已 被超级挖掘机夷为平地，大地上只有裸露的岩石和坚硬的冻土，冻土上到处有白色 的斑块，那是大海潮留下的盐渍。面前那座爷爷和爸爸度过了一生的曾有千万人口 的大城市现在已是一片废墟，高楼钢筋外露的残骸在地球发动机光柱的蓝光中拖着 长长的影子，好像是史前巨兽的化石……一次次的洪水和小行星的撞击已摧毁了地 面上的一切，各大陆上的城市和植被都荡然无存，地球表面已变成火星一样的荒漠。",
              "这一段时间，加代子心神不定。她常常扔下孩子不管，一个人开着飞行汽车出 去旅行，回来后，只是说她去了西半球。最后，她拉我一起去了。",
              "我们的飞行汽车以四倍音速飞行了两个小时，终于能够看到太阳了，它刚刚升 出太平洋，这时看上去只有棒球大小，给冰封的洋面投下一片微弱的、冷冷的光芒。"
            ]
          }
        ],
        price: 10,
        discount: 0.8
      },
      {
        uid: "001",
        title: "中国太阳",
        author: "刘慈欣",
        alias: [],
        cover: "",
        chapters: [
          {
            cid: "000",
            subtitle: "引 子",
            detail: [
              "水娃从娘颤颤的手中接过那个小小的包裹，包裹中有娘做的一双厚底布鞋，三个馍，两件打了大块补丁的衣裳，二十块钱。爹蹲在路边，闷闷地抽着旱烟锅。",
              "“娃要出门了，你就不能给个好脸？”娘对爹说。爹仍蹲在那儿，还是闷闷地一声不吭，娘又说：“不让娃出去，你能出钱给他盖房娶媳妇啊？”",
              "“走！东一个西一个都走球了，养他们还不如养窝狗！”爹干嚎着说，头也不抬。"
            ]
          },
          {
            cid: "001",
            subtitle: "喝点不苦的水，挣点钱",
            detail: [
              "人生第一个目标：喝点不苦的水，挣点钱",
              "“哟，这么些个灯！”",
              "水娃到矿区时天已黑了，这个矿区是由许多私开的小窑煤矿组成的。",
              "“这算啥？城里的灯那才叫多哩。”来接他的国强说，国强也是水娃村里的，出来好多年了。",
              "水娃随国强来到工棚住下，吃饭时喝的水居然是甜丝丝的！国强告诉他，矿上打的是深井，水当然不苦了，但他又加了一句：“城里的水才叫好喝呢！”",
              "睡觉时国强递给水娃一包硬邦邦的东西当枕头，打开看，是黑塑料皮包着的一根根圆棒棒，再打开塑料皮，看到那棒棒黄黄的，像肥皂。"
            ]
          },
          {
            cid: "002",
            subtitle: "成为一个北京人",
            detail: [
              "人生第四个目标：成为一个北京人",
              "水娃与四位工友从航天大厦的顶层谨慎地下降，用了四十分钟才到达它的第八十三层，这是他们昨天擦到的位置。蜘蛛人最头疼的活儿就是擦倒角墙，即与地面的角度小于九十度的墙。而航天大厦的设计者为了表现他那变态的创意，把整个大厦设计成倾斜的，在顶部由一根细长的立校与地面支撑，据这位著名建筑师说，倾斜更能表现出上升感。这话似乎有道理，这座摩天大厦也名扬世界，成为北京的又一标志性建筑。但这位建筑大师的祖宗八代都被北京的蜘蛛人骂遍了，清洁航天大厦的活儿对他们几乎是一场噩梦，因为这个倾斜的大厦整整一面全是倒角墙，高达四百米，与地面的角度小到六十五度。",
              "到达工作位置后，水娃仰头看看，头顶上这面巨大的玻璃悬崖仿佛正在倾倒下来。他一只手打开清洁剂容器的盖子，另一只手紧紧抓着吸盘的把手。这种吸盘是为清洁倒角墙特制的，但并不好使，常常脱吸，这时蜘蛛人就会荡离墙面，被安全带吊着在空中打秋千。这种事在清洁航天大厦时多次发生，每次都让人魂飞天外。就在昨天，水娃的一位工友脱吸后远远地荡出去，又荡回来，在强风的推送下直撞到墙上，撞碎了一大块玻璃，在他的额头和手臂上各划了一道大口子，而那块昂贵的镀膜高级建筑玻璃让他这一年的活儿白干了。",
              "到现在为止，水娃干蜘蛛人的工作已经两年多了，这活儿可真不容易。在地面上有二级风力时，百米空中的风力就有五级，而现在的四五百米的超高层建筑上，风就更大了。危险自不必说，从本世纪初开始，蜘蛛人的坠落事故就时有发生。在冬天时那强风就像刀子一样锋利；清洗玻璃时最常用的氢氟酸洗剂腐蚀性很大，使手指甲先变黑再脱落；而到了夏天，为防洗涤药水的腐蚀，还得穿着不透气的雨衣雨裤雨鞋。如果是擦镀膜玻璃，背上太阳暴晒，面前玻璃反射的阳光也让人睁不开眼，这时水娃的感觉真像是被放在庄宇的太阳灶上。",
              "但水娃热爱这个工作，这一年多是他有生以来最快乐的时光。这固然因为在外地来京的低文化层次的打工者中，蜘蛛人的收入相对较高，更重要的是，他从工作中获得了一种奇妙的满足感。他最喜欢于那些别的工友不愿意干的活儿：清洁新近落成的超高建筑，这些建筑的高度都在二百米以上，最高的达五百米。悬在这些摩天楼顶端的外墙上，北京城在下面一览无遗地伸延开来，那些上世纪建成的所谓高层建筑从这里看下去是那么矮小，再远一些，它们就像一簇簇插在地上的细木条，而城市中心的紫禁城则像是用金色的积木搭起来的；在这个高度听不到城市的喧闹，整个北京成了一个可以一眼望全的整体，成了一个以蛛网般的公路为血脉的巨大的生命，在下面静静地呼吸着。有时，摩天大楼高耸在云层之上，腰部以下笼罩在阴暗的暴雨之中，以上却阳光灿烂，干活儿时脚下是一望无际的滚滚云海，每到这时，水娃总觉得他的身体都被云海之上的强风吹得透明了……",
              "水娃从这经历中学到了一个哲理：事情得从高处才能看清楚。如果你淹没于这座大都市之中，周围的一切是那么纷繁复杂．城市仿佛是一个无边无际的迷宫，但从这高处一看，整座城市不过是一个有一千多万人的大蚂蚁窝罢了，而它周围的世界又是那么广阔。",
              "在第一次领到工资后，水娃到一个大商场转了转，乘电梯上到第三层时，他发现这是一个让自己迷惑的地方。与繁华的下两层不同，这一层的大厅比较空旷，只摆放着几张大得惊人的低桌子，在每张桌子宽阔的桌面上，都有一片小小的楼群．每幢楼有一本书那么高。楼间有翠绿的草地，草地上有白色的凉亭和回廊……这些小建筑好像是用象牙和奶酪做成的，看上去那么可爱，它们与绿草地一起，构成了精致的小世界，在水娃眼中，真像是一个个小天堂的模型。最初他猜测这是某种玩具，但这里见不到孩子，桌边的人们也一脸认真和严肃。他站在一个小天堂边上对着它出神地望了很久，一位漂亮小姐过来招呼他，他这才知道这里是出售商品房的地方。他随便指着一幢小楼，问最顶上那套房多少钱，小姐告诉他那是三室一厅，每平米三千五百元，总价值三十八万。听到这数目水娃倒吸一日冷气，但小姐接下来的话让这冷酷的数字温柔了许多：",
              "“分期付款，每月一千五百到两千元。”"
            ]
          }
        ],
        price: 12,
        discount: 0.5
      }
    ]
  }
}