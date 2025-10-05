## Telegram

> Telegram频道转微博展示系统

> 基于Telegram和Cloudflare Worker构建的信息展示系统

> 将Telegram频道的内容以类似微博的形式进行展示，支持Markdown渲染、图片展示、标签搜索等功能

> 项目状态：活跃开发中

> 团队：个人项目

> 技术栈：Astro 4.15.1 + Cloudflare Workers + Cheerio + Unified Markdown处理



## Dependencies (init from programming language specification like package.json, requirements.txt, etc.)

* astro (4.15.1): 现代化的静态站点生成框架
* cheerio (1.0.0-rc.12): 用于解析Telegram HTML内容的服务器端jQuery实现
* unified (11.0.5): Markdown内容处理的核心引擎
* remark-parse (11.0.0): Markdown解析器
* remark-gfm (4.0.0): GitHub Flavored Markdown支持
* remark-rehype (11.1.1): Markdown转HTML处理
* rehype-stringify (10.0.1): HTML字符串输出
* ofetch: HTTP请求库
* lru-cache: LRU缓存实现
* prismjs:  代码高亮
* dayjs: 时间处理库


## Development Environment

> 开发工具：Node.js + pnpm
> 部署环境：Cloudflare Workers
> 包管理器：pnpm (推荐)
> 构建命令：pnpm build
> 开发命令：pnpm dev


## Structrue (init from project tree)

> It is essential to consistently refine the analysis down to the file level — this level of granularity is of utmost importance.
> If the number of files is too large, you should at least list all the directories, and provide comments for the parts you consider particularly important.

> In the code block below, add comments to the directories/files to explain their functionality and usage scenarios.

> if you think the directory/file is not important, you can not skip it, just add a simple comment to it.

> but if you think the directory/file is important, you should read the files and add more detail comments on it (e.g. add comments on the functions, classes, and variables. explain the functionality and usage scenarios. write the importance of the directory/file).
```
root
- .astro
- .dockerignore
- .editorconfig
- .github
    - FUNDING.yml
    - workflows
        - docker.yml
        - sync.yml
- .gitignore
- .husky
    - _
        - .gitignore
        - applypatch-msg
        - commit-msg
        - h
        - husky.sh
        - post-applypatch
        - post-checkout
        - post-commit
        - post-merge
        - post-rewrite
        - pre-applypatch
        - pre-auto-gc
        - pre-commit
        - pre-merge-commit
        - pre-push
        - pre-rebase
        - prepare-commit-msg
- .kiro
    - specs
        - mobile-navigation-fix
- .node-version
- api
    - static
        - index.js
- astro.config.mjs
- CODE_OF_CONDUCT.md
- dist
- Dockerfile
- eslint.config.js
- layout-test.html
- LICENSE
- mobile-search-test.html
- MOBILE_SEARCH_OPTIMIZATION.md
- node_modules
- package.json
- pnpm-lock.yaml
- postcss.config.cjs
- public
    - favicon.ico
    - favicon.svg
    - robots.txt
    - rss.xsl
- README.md
- README.zh-cn.md
- src
    - assets // 静态资源
        - back-to-top.svg
        - bluesky.svg
        - discord.svg
        - github.svg
        - global.css // 全局样式
        - item.css // 内容项样式，包含Markdown超链接样式优化 **[重要]**
        - mastodon.svg
        - normalize.css
        - podcast.svg
        - rss.svg
        - style.css // 主样式文件
        - tags.png
        - telegram.svg
        - twitter.svg
        - void.png
    - components // Astro组件
        - header.astro // 页面头部
        - item.astro // 单条内容项渲染（使用set:html渲染Markdown内容）**[重要]**
        - list.astro // 内容列表
    - env.d.ts
    - layouts
        - base.astro
    - lib // 核心功能库
        - dayjs.js // 时间处理配置
        - env.js // 环境变量管理
        - markdown.js // Markdown转HTML核心处理（支持标准Markdown语法）
        - prism.js // 代码高亮配置
        - telegram // Telegram数据处理模块 **[重要]**
            - index.js // 核心功能：获取Telegram频道数据、解析HTML、处理Markdown超链接格式
    - middleware.js
    - pages
        - after
            - [cursor].astro
        - before
            - [cursor].astro
        - fyrss.xml.js
        - index.astro
        - links.astro
        - posts
            - [id].astro
        - rss.json.js
        - rules
            - prefetch.json.js
        - search
            - [q].astro
        - sitemap
            - [cursor].xml.js
        - sitemap.xml.js
        - static
            - [...url].js
        - tags.astro
- THEME_README.md
- theme_test.html
- tsconfig.json
- vercel.json
```
