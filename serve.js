// Colour Console
require("console-color-mr");

// FS
const fs = require("fs");

// KOA
const koa = require("koa");

// Router
const router = require("koa-router");

// Mock
const mock = require("mockjs");

// App
const App = new koa();

// Page
const Page = new router();

// All
App.use(async ctx => {
  ctx.body = mock.mock(
    JSON.parse(fs.readFileSync(`./source/${ctx.path}.json`, "utf8"))
  );
});

// Customize Route Demo
Page.get("/simple", async ctx => {
  ctx.body = JSON.stringify({ a: 1, b: 2, c: 3 });
});

// Use Middleware
App.use(Page.routes()).use(Page.allowedMethods());

// Listen Port
App.listen(3000, () =>
  console.log(`Mock Server running at: ` + `http://localhost:3000/`.cyan)
);
