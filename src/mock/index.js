import Mock from "mockjs";
const Random = Mock.Random;

Mock.setup({
  timeout: "200-600",
});

const baseURL = "http://localhost:3000";
export { baseURL };

Mock.mock(`${baseURL}/getSwipers`, {
  data: [
    {
      id: 1,
      name: "@cname",
      // cover: "@image(800x300, @cword(2, 4))",  // Random.image('200x100')
      cover: Random.dataImage("800x300", "走远"),
    },
    {
      id: 2,
      name: "@cname",
      cover: Random.dataImage("800x300", "流浪地球"), // Random.image('200x100')
    },
    {
      id: 3,
      name: "@cname",
      cover: Random.dataImage("800x300", "超能陆战队"), // Random.image('200x100')
    },
  ],
});

Mock.mock(`${baseURL}/getRecommends`, {
  "data|7-20": [
    {
      "id|+1": 1,
      name: "@cname",
      cover: "@image(200x150)", // Random.image('200x100')
    },
  ],
});

Mock.mock(`${baseURL}/getDetail`, {
  message: "success",
  status: 200,
  data: {
    "id|+1": 1,
    name: "@cname",
    cover: "@image(100x150)",
    xiangqing: {
      导演: "@cname",
      编剧: "@cname",
      主演: "@cname",
      类型: "@cword(2, 4)",
      地区: "@cword(2, 4)",
      语言: "@cword(2, 4)",
      上映日期: "@date",
      时长: "@integer(60, 180)",
      别名: "@cword(2, 4)",
    },
    jianjie: "@cparagraph(15, 30)",
    "actors|5-10": [
      {
        "id|+1": 1,
        name: "@cname",
        cover: "@image(100x150)",
      },
    ],
  },
});
