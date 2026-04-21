import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

interface MDXContentProps {
  source: string;
}

const components: MDXRemoteProps["components"] = {
  h2: ({ children }) => (
    <h2 className="font-display text-3xl md:text-4xl text-essence-white mt-16 mb-6 leading-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-display text-2xl text-essence-white mt-12 mb-4 leading-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[1.05rem] leading-[1.9] text-essence-white-off mb-6">
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-essence-accent underline decoration-essence-accent/30 underline-offset-4 hover:decoration-essence-accent transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-essence-white-off mb-6 space-y-2 marker:text-essence-accent">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-essence-white-off mb-6 space-y-2 marker:text-essence-accent">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-[1rem] leading-[1.9]">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-essence-accent pl-6 my-8 font-editorial italic text-2xl text-essence-gold leading-relaxed">
      {children}
    </blockquote>
  ),
  strong: ({ children }) => (
    <strong className="text-essence-white font-medium">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="font-editorial italic text-essence-gold">{children}</em>
  ),
  code: ({ children }) => (
    <code className="bg-essence-black-soft px-2 py-0.5 text-essence-accent font-mono text-[0.9em]">
      {children}
    </code>
  ),
};

export function MDXContent({ source }: MDXContentProps) {
  return (
    <article className="prose-essence max-w-3xl mx-auto">
      <MDXRemote source={source} components={components} />
    </article>
  );
}
