'use client'

import { FC } from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleProps {
  content: string;
}

const Article: FC<ArticleProps> = ({ content }) => {
  return (
    <div className="text-center flex-auto pt-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default Article;