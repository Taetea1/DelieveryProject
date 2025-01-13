// 가게 정보 받아오는 파일


// export const storeMenus = {
//   "BurgerKing": ["추천메뉴", "오리지널스&맥시멈", "프리미엄", "와퍼&주니어", "치킨&슈림프버거", "올데이킹&킹모닝 사이드"],
//   "McDonalds": ["추천메뉴", "해피밀", "빅맥", "치즈버거", "맥모닝", "디저트"],
//   "PizzaHut": ["추천메뉴", "치즈피자", "페퍼로니피자", "고구마피자", "콤비네이션", "사이드메뉴"],
// };

export const storeMenus = {
  "BurgerKing": {
    "추천메뉴": [
      {
        id: "menu1",
        name: "풀드비프 와퍼",
        description: "강한 불맛패티와 부드러운 풀드비프의 만남, 결이 다른 비프가 와퍼맛을 살린다",
        price: 10000,
        image: "../image/menu/추천메뉴/풀드비프 와퍼.png",
      },
      {
        id: "menu2",
        name: "스파이시 풀드비프 와퍼",
        description: "매운 맛을 더한 풀드비프와 불맛 패티의 조화, 매운 맛이 일품인 버거",
        price: 10500,
        image: "../image/menu/추천메뉴/스파이시 풀드비프 와퍼.png",
      },
      {
        id: "menu3",
        name: "콰트로치즈 풀드비프 와퍼",
        description: "4종 치즈의 풍미가 더해진 풀드비프와 와퍼의 만남, 치즈 애호가들을 위한 선택",
        price: 11000,
        image: "../image/menu/추천메뉴/콰트로치즈 풀드비프 와퍼.png",
      },
      {
        id: "menu4",
        name: "풀드비프 팩",
        description: "풀드비프와 와퍼를 한 번에 즐길 수 있는 든든한 팩, 두 가지 메뉴의 조화",
        price: 15000,
        image: "../image/menu/추천메뉴/풀드비프 팩.png",
      },
      {
        id: "menu5",
        name: "두툼버거",
        description: "두툼한 패티와 신선한 채소가 어우러진 고급스러운 버거",
        price: 12000,
        image: "../image/menu/추천메뉴/두툼버거.png",
      },
      {
        id: "menu6",
        name: "두툼버거 더블",
        description: "두툼한 패티가 두 겹으로 더해져서 더욱 풍성하고 만족스러운 버거",
        price: 13000,
        image: "../image/menu/추천메뉴/두툼버거 더블.png",
      },
      {
        id: "menu7",
        name: "몬스터 와퍼",
        description: "강력한 맛과 크기를 자랑하는 몬스터급 버거, 푸짐하게 즐길 수 있다",
        price: 14000,
        image: "../image/menu/추천메뉴/몬스터 와퍼.png",
      },
      {
        id: "menu8",
        name: "콰트로치즈와퍼",
        description: "4종 치즈가 어우러져 더욱 풍성한 맛을 자랑하는 와퍼",
        price: 12500,
        image: "../image/menu/추천메뉴/콰트로치즈와퍼.png",
      },
      {
        id: "menu9",
        name: "통새우와퍼",
        description: "바삭한 통새우와 부드러운 패티가 함께 즐겨지는 와퍼",
        price: 11500,
        image: "../image/menu/추천메뉴/통새우와퍼.png",
      },
      {
        id: "menu10",
        name: "불맛 더블치즈버거",
        description: "불맛이 가미된 두 개의 치즈 패티로 풍성한 맛을 선사하는 버거",
        price: 12500,
        image: "../image/menu/추천메뉴/불맛 더블치즈버거.png",
      },
    ],
    "프리미엄": [
      {
        id: "menu13",
        name: "불맛 더블치즈버거",
        description: "불맛 패티와 두 겹의 치즈, 그리고 베이컨의 풍미가 어우러진 버거",
        price: 13500,
        image: "../image/menu/프리미엄/불맛 더블치즈버거.png",
      },
      {
        id: "menu14",
        name: "블랙바비큐콰트로치즈와퍼",
        description: "바비큐 소스와 4종 치즈가 더해져 깊고 풍성한 맛을 자랑하는 와퍼",
        price: 14500,
        image: "../image/menu/프리미엄/블랙바비큐콰트로치즈와퍼.png",
      },
      {
        id: "menu15",
        name: "베이컨치즈와퍼",
        description: "바삭한 베이컨과 고소한 치즈가 만난 클래식한 와퍼",
        price: 12000,
        image: "../image/menu/프리미엄/베이컨치즈와퍼.png",
      },
      {
        id: "menu16",
        name: "불맛 더블치즈앤베이컨버거",
        description: "불맛 패티와 두 겹의 치즈가 풍성하게 어우러진 고소하고 매콤한 버거",
        price: 13000,
        image: "../image/menu/프리미엄/불맛 더블치즈앤베이컨버거.png",
      },
    ],
    "와퍼&주니어": [
      {
        id: "menu17",
        name: "갈릭불고기와퍼",
        description: "마늘의 풍미가 가득한 불고기와퍼로, 고소하고 짭짤한 맛을 선사하는 버거",
        price: 12000,
        image: "../image/menu/와퍼&주니어/갈릭불고기와퍼.png",
      },
      {
        id: "menu18",
        name: "몬스터와퍼",
        description: "강력한 맛과 크기를 자랑하는 몬스터급 버거, 푸짐하게 즐길 수 있다",
        price: 14000,
        image: "../image/menu/와퍼&주니어/몬스터 와퍼.png",
      },
      {
        id: "menu19",
        name: "불고기와퍼",
        description: "달콤한 불고기 소스와 불고기의 풍미가 어우러진 클래식한 와퍼",
        price: 11500,
        image: "../image/menu/와퍼&주니어/불고기와퍼.png",
      },
      {
        id: "menu20",
        name: "블랙바비큐와퍼",
        description: "진한 바비큐 소스와 불맛이 더해져 깊은 풍미를 자랑하는 와퍼",
        price: 12500,
        image: "../image/menu/와퍼&주니어/블랙바비큐와퍼.png",
      },
      {
        id: "menu21",
        name: "와퍼",
        description: "고소한 치즈와 바삭한 패티가 조화를 이루는 맛있는 와퍼",
        price: 12000,
        image: "../image/menu/와퍼&주니어/와퍼.png",
      },
      {
        id: "menu22",
        name: "콰트로치즈와퍼",
        description: "4종 치즈의 풍미가 가미되어 더욱 풍성하고 고소한 와퍼",
        price: 13000,
        image: "../image/menu/와퍼&주니어/콰트로치즈와퍼.png",
      },
      {
        id: "menu23",
        name: "통새우와퍼",
        description: "바삭한 통새우와 부드러운 패티가 함께 즐겨지는 와퍼",
        price: 11500,
        image: "../image/menu/와퍼&주니어/통새우와퍼.png",
      },
      {
        id: "menu24",
        name: "치즈와퍼",
        description: "바삭한 통새우와 부드러운 패티가 함께 즐겨지는 와퍼",
        price: 11500,
        image: "../image/menu/와퍼&주니어/치즈와퍼.png",
      },
    ],
    "치킨&슈림프": [
      {
        id: "menu25",
        name: "BLT오믈렛킹모닝",
        description: "베이컨, 상추, 토마토, 오믈렛이 어우러진 아침을 위한 든든한 메뉴",
        price: 11000,
        image: "../image/menu/치킨&슈림프/BLT오믈렛킹모닝.png",
      },
      {
        id: "menu26",
        name: "비프&슈림프버거",
        description: "부드러운 비프 패티와 탱글한 새우가 결합된 이색적인 버거",
        price: 13000,
        image: "../image/menu/치킨&슈림프/비프&슈림프버거.png",
      },
      {
        id: "menu27",
        name: "치킨킹",
        description: "바삭한 치킨 패티와 풍부한 소스가 어우러져 맛있는 치킨 버거",
        price: 12000,
        image: "../image/menu/치킨&슈림프/치킨킹.png",
      },
      {
        id: "menu28",
        name: "치킨킹BLT",
        description: "치킨 패티와 베이컨, 상추, 토마토가 함께하는 버거",
        price: 12500,
        image: "../image/menu/치킨&슈림프/치킨킹BLT.png",
      },
    ],
    "올데이킹": [
      {
        id: "menu29",
        name: "몬스터 주니어",
        description: "몬스터와퍼의 미니 버전, 더 작은 사이즈로 푸짐한 맛을 즐길 수 있는 주니어 버거",
        price: 9500,
        image: "../image/menu/올데이킹/몬스터 주니어.png",
      },
      {
        id: "menu30",
        name: "불맛 더블 치즈버거 주니어",
        description: "매운 불맛과 두 겹의 치즈가 어우러져 강력한 풍미를 자랑하는 버거",
        price: 12500,
        image: "../image/menu/올데이킹/불맛 더블치즈버거주니어.png",
      },
      {
        id: "menu31",
        name: "오믈렛킹모닝",
        description: "부드러운 오믈렛과 신선한 재료들이 어우러진 아침을 위한 완벽한 메뉴",
        price: 11000,
        image: "../image/menu/올데이킹/오믈렛킹모닝.png",
      },
    ],
  },
  "McDonalds": {
    "추천메뉴": [
      // 메뉴 내용 생략
    ],
    "빅맥": [
      // 메뉴 내용 생략
    ],
    "해피밀": [
      // 메뉴 내용 생략
    ],
    "디저트": [
      // 메뉴 내용 생략
    ],
    "버거": [
      // 메뉴 내용 생략
    ],
  },
  "PizzaHut": {
    "추천메뉴": [
      // 메뉴 내용 생략
    ],
    "피자": [
      // 메뉴 내용 생략
    ],
    "사이드": [
      // 메뉴 내용 생략
    ],
    "디저트": [
      // 메뉴 내용 생략
    ],
    "음료": [
      // 메뉴 내용 생략
    ],
  },
};