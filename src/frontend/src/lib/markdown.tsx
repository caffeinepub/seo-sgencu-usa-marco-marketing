import { useMemo } from 'react';

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  const html = useMemo(() => {
    let processed = content;

    // Headers
    processed = processed.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
    processed = processed.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-8 mb-4">$1</h2>');
    processed = processed.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');

    // Bold
    processed = processed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic
    processed = processed.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Links
    processed = processed.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>');

    // Lists
    processed = processed.replace(/^\* (.*$)/gim, '<li class="ml-4">$1</li>');
    processed = processed.replace(/(<li.*<\/li>)/s, '<ul class="list-disc my-4">$1</ul>');

    // Paragraphs
    processed = processed.split('\n\n').map(para => {
      if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<li')) {
        return para;
      }
      return `<p class="my-4">${para}</p>`;
    }).join('\n');

    return processed;
  }, [content]);

  return <div className="prose prose-slate max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: html }} />;
}
