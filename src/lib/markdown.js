import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'

/**
 * 将Markdown文本转换为HTML
 * @param {string} markdown - Markdown文本
 * @returns {Promise<string>} - 转换后的HTML
 */
export async function markdownToHtml(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return ''
  }

  try {
    const result = await unified()
      .use(remarkParse) // 解析Markdown
      .use(remarkGfm) // 支持GitHub Flavored Markdown
      .use(remarkRehype, { allowDangerousHtml: true }) // 转换为HTML AST
      .use(rehypeStringify, { allowDangerousHtml: true }) // 转换为HTML字符串
      .process(markdown)

    return String(result)
  } catch (error) {
    console.error('Markdown转换失败:', error)
    // 如果转换失败，返回原始文本的HTML转义版本
    return markdown.replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#39;')
  }
}

/**
 * 简单的Markdown转HTML函数（同步版本，用于紧急情况）
 * 支持基本的Markdown语法
 * @param {string} markdown - Markdown文本
 * @returns {string} - 转换后的HTML
 */
export function simpleMarkdownToHtml(markdown) {
  if (!markdown || typeof markdown !== 'string') {
    return ''
  }

  let html = markdown
    // 处理标题
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // 处理粗体
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 处理斜体
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 处理行内代码
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // 处理链接
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    // 处理图片
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    // 处理换行
    .replace(/\n/g, '<br>')

  return html
}
