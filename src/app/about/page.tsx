import Image from "next/image";
import Markdown from "react-markdown";

export default function Home() {
  const markdown = `![cmd-markdown-logo](https://www.zybuluo.com/static/img/logo.png)

  # 1. 制作一份待办事宜 [Todo 列表](https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-待办事宜-todo-列表)

  - [ ] 支持以 PDF 格式导出文稿
  - [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
  - [x] 新增 Todo 列表功能
  - [x] 修复 LaTex 公式渲染问题
  - [x] 新增 LaTex 公式编号功能

  # 2. 书写一个质能守恒公式[^LaTeX]

  $$E=mc^2$$`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Markdown >{markdown}</Markdown>
    </main>
  );
}
