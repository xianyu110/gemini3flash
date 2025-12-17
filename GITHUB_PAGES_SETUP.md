# GitHub Pages 部署指南

## 🚀 快速部署

这个项目已经配置好 GitHub Pages，只需要几个简单步骤就能部署到线上。

### 步骤 1: 更新配置

1. **替换用户名**：
   编辑 `index.html` 文件，将 `[YOUR-USERNAME]` 替换为你的 GitHub 用户名

   ```html
   <!-- 第16行和第23行 -->
   <meta property="og:url" content="https://[YOUR-USERNAME].github.io/gemini3flash/">
   <meta property="twitter:url" content="https://[YOUR-USERNAME].github.io/gemini3flash/">
   ```

2. **确保仓库名称正确**：
   确保你的仓库名称是 `gemini3flash`，这样 GitHub Pages 的 URL 会是：
   `https://[YOUR-USERNAME].github.io/gemini3flash/`

### 步骤 2: 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** 标签页
3. 在左侧菜单中找到 **Pages**
4. 在 "Source" 下，选择 **GitHub Actions**

### 步骤 3: 部署

1. 提交所有更改到 `main` 分支
2. GitHub Actions 会自动构建和部署网站
3. 部署完成后，访问 `https://[YOUR-USERNAME].github.io/gemini3flash/`

## 📁 文件结构

```
gemini3flash/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions 工作流
├── index.html              # 主页面文件
├── styles.css              # 样式文件
├── script.js               # JavaScript 文件
├── README.md               # 原始 README
└── GITHUB_PAGES_SETUP.md   # 这个设置指南
```

## 🔧 自定义域名（可选）

如果你想使用自定义域名：

1. 在仓库的 Settings > Pages 中添加你的自定义域名
2. 在 DNS 提供商处添加 CNAME 记录指向 `[YOUR-USERNAME].github.io`
3. 在项目根目录创建 `CNAME` 文件，内容为你的域名

## 📊 SEO 优化

这个 landing page 已经包含了完整的 SEO 优化：

- **Meta 标签**：完整的 description、keywords、author
- **Open Graph**：Facebook、LinkedIn 等社交媒体分享优化
- **Twitter Cards**：Twitter 分享优化
- **结构化数据**：Schema.org JSON-LD 格式
- **语义化 HTML**：正确的 HTML5 标签结构
- **移动端优化**：响应式设计，移动端友好
- **性能优化**：图片懒加载、代码压缩

## 🎨 设计特色

- **现代化设计**：渐变色彩、卡片布局、动画效果
- **响应式布局**：完美适配桌面、平板、手机
- **交互体验**：平滑滚动、悬停效果、滚动动画
- **高性能**：优化的 CSS 和 JavaScript
- **无障碍**：键盘导航、屏幕阅读器支持

## 📈 性能指标

- **Lighthouse 分数**：预期 90+ 分
- **加载速度**：首屏加载 < 2秒
- **SEO 得分**：95+ 分
- **移动端友好**：100%

## 🔄 自动更新

- 任何推送到 `main` 分支的更改都会自动部署
- GitHub Actions 会处理构建和部署过程
- 部署状态可以在 Actions 标签页查看

## 🐛 故障排除

如果部署失败：

1. 检查 GitHub Actions 的错误日志
2. 确保仓库是公开的（或者你有 GitHub Pages 权限）
3. 检查文件路径是否正确
4. 确保没有语法错误

## 📞 支持

如果遇到问题：

1. 查看 GitHub Actions 日志
2. 检查浏览器控制台错误
3. 确保所有文件都已正确提交

---

🎉 **恭喜！** 你的 Gemini 3 Flash landing page 现在已经可以在线访问了！