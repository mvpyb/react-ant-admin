
const plugins = [
  // 'audios',
  'upfile', 'indent2em', 'letterspacing', // 'formatpainter',
  'lists', 'code', 'hr', 'link', 'preview', 'print', 'lineheight',
  'advlist', // 高级插件列表 依赖lists插件
  'anchor', // 锚点插件
  'autolink', // 自动链接插件 - 当用户输入有效的完整URL时，autolink插件会自动创建超链接
  // 'autoresize ', // TODO 开启之后设置height 无效 编辑器大小自适应 - 该插件提供自动调整编辑器大小的方法以适应内容
  'autosave', // 功能：定时保存内容，在文件菜单中添加了一个“恢复草稿”选项，在工具栏添加一个“恢复草稿”的可选按钮，同时如果用户修改了编辑区内的原始内容，在跳转URL之前，其还会弹出一个提示框，提醒用户修改的内容没有提交
  'charmap ', // 特殊字符插件
  'codesample', // 代码示例插件
  'directionality', // 适应不同语言的书写方式，ltr文字方向从左到右，rtl从右到左
  'emoticons', // 表情插件
  // 'fullpage', // TODO 不用 文档属性 编辑元数据和文档属性，包含title，keywords，description和文档编码charset。
  'fullscreen', // 全屏
  'help', // 帮助
  'image', // 插入编辑图片
  'importcss', // 引入css
  'insertdatetime', // 插入当前日期时间
  'media', // 插入编辑媒体
  'nonbreaking', // 插入不间断空格
  'noneditable', // 不可编辑元素
  'pagebreak', // 插入分页符
  'paste', // TODO 强大 粘贴插件 此插件将过滤/清除从Word粘贴过来的内容。它的强大之处在于它提供的强大配置，所以请花点时间将本页所有内容阅读完。
  'quickbars', // 快速工具栏
  'save', // 在工具栏添加了一个保存提交按钮，点击它将提交编辑器所在的表单
  'searchreplace', // 查找替换
  'spellchecker', // 拼写检查
  'tabfocus', // tab切入切出

  // toolbar中可配置这些:tabledelete | tableprops tablerowprops tablecellprops |
  // tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol
  'table',
  'template', // TODO 强大 内容模板
  'textcolor', // 文字颜色
  'textpattern', // 快速排版（类似markdown）
  'toc', // 目录生成器
  'visualblocks', // 显示块元素范围
  'visualchars', // 显示不可见字符
  'wordcount', // 字数统计
  'colorpicker', //
  'contextmenu', //
  'imagetools' //
  // 'checklist', //

  // 'powerpaste', // 需要复制粘贴带图片的内容，这时就需要用到这个插件了
  // 'casechange', // 允许文本框选择的情况下更改为大写，小写或标题情况
  // 'mediaembed', // 增强型媒体嵌入插件 将采取一个URL，将它发送到后端服务，回报的代码可嵌入片段，并且代码添加到编辑器。这通常采用富媒体的形式，例如音频，视频和社交媒体卡
  // 'formatpainter', // 插件允许用户将格式从一个位置复制和粘贴到另一个位置，例如字体样式和大小。格式绘制器能够处理多种格式，例如内联和块格式以及样式（例如表格样式）。
  // 'linkchecker' // 在您键入URL时对其进行验证。视为无效的URL将以红色突出显示，并具有专用的上下文菜单，其中包含以下选项：编辑链接，尝试在单独的选项卡中打开链接，删除链接或忽略链接。

]

export default plugins
