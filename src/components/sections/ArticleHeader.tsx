import Image from "next/image";

interface ArticleHeaderProps {
  category: string;
  title: string;
  description?: string;
  publishDate: string;
  author: string;
  readTime: string;
  image?: { src: string; alt: string };
}

export function ArticleHeader({
  category,
  title,
  publishDate,
  author,
  readTime,
  image,
}: ArticleHeaderProps) {
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-essence-black">
      {/* Background image with gradient overlay */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-essence-black via-essence-black/70 to-essence-black/20" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-page max-w-4xl pb-24 pt-40">
        {/* Category badge */}
        <span className="text-[0.7rem] uppercase tracking-brand text-essence-accent border border-essence-accent/40 px-3 py-1 inline-flex">
          {category}
        </span>

        {/* Title */}
        <h1 className="font-display text-fluid-services leading-[1.05] text-essence-white mt-8">
          {title}
        </h1>

        {/* Meta row */}
        <div className="mt-8 text-[0.7rem] uppercase tracking-brand text-essence-muted">
          <span>{author}</span>
          <span className="mx-2">·</span>
          <span>{formattedDate}</span>
          <span className="mx-2">·</span>
          <span>{readTime}</span>
        </div>
      </div>
    </header>
  );
}
