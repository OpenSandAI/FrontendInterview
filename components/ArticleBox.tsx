import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticleBox = () => {
  const markdown = `Just a link: https://github.com/alrightp/FrontendInterview`;
  return <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>;
};

export default ArticleBox;
