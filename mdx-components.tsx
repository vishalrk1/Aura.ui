import type { MDXProvider } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

import FootnoteBackReference from "@/components/footnote/back-reference";
import FootnoteForwardReference from "@/components/footnote/forward-reference";
import MDXImage from "@/components/image";
import Link from "@/components/link";
import Preview from "@/components/preview";
import { cn } from "@/lib/cn";

import { TriangleAlert, User } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";

import GradientButton from "./components/displayComponents/Button/GradientButton";
import HoverButton from "./components/displayComponents/Button/HoverButton/HoverButton";
import HoverFillButton from "./components/displayComponents/Button/HoverFillButton/HoverFillButton";
import ReadMoreButton from "./components/displayComponents/Button/ReadMoreButton";
import { ExapandedCardExample } from "./components/displayComponents/Cards/ExpandableCard/example";
import AnimatedBorder from "./components/displayComponents/Other/AnimatedBorder";
import { ImageCropperExample } from "./components/displayComponents/Other/CropImage/example";
import { ImageStackSliderExample } from "./components/displayComponents/Other/ImageStackSlider/example";
import { BottomBorderTabExample } from "./components/displayComponents/Tab/BottomBorderTab/example";
import {
  FadeUpTextPreview,
  VoteButtonExample,
} from "./components/displayComponents/Text/Fadeup/example";
import GradientText from "./components/displayComponents/Text/GradientText/GradientText";
import { MaskCursorExample } from "./components/displayComponents/Text/MaskCursor/example";
import MaskCursor from "./components/displayComponents/Text/MaskCursor/MaskCursor";
import FigCaption from "./components/figcaption";
import { PropsTable } from "./components/propsTable";

type FigCaptionProps = React.ComponentProps<typeof FigCaption>;
type PropsTableProps = React.ComponentProps<typeof PropsTable>;

const components: MDXComponents = {
  Preview: ({ component, code, codeblock }) => (
    <Preview
      codeblock={codeblock ? codeblock : undefined}
      code={code}
      component={component}
    />
  ),
  Image: ({ caption, alt, ...props }) => (
    <MDXImage {...props} caption={caption} alt={alt} />
  ),
  figcaption: (props: FigCaptionProps) => <FigCaption {...props} />,
  PropsTable: (props: PropsTableProps) => <PropsTable {...props} />,
  h1: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
    if (id?.includes("footnote-label")) {
      return null;
    }
    return (
      <h1 style={{ fontSize: "20px" }} id={id}>
        {children}
      </h1>
    );
  },
  h2: ({ children, id }: React.HTMLAttributes<HTMLHeadingElement>) => {
    if (id?.includes("footnote-label")) {
      return null;
    }
    return (
      <h2 id={id} style={{ fontSize: "16px" }}>
        {children}
      </h2>
    );
  },
  a: ({ children, href }) => {
    if (href?.startsWith("#user-content-fn-")) {
      return (
        <FootnoteForwardReference href={href}>
          {children}
        </FootnoteForwardReference>
      );
    }
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-muted"
        underline
      >
        {children}
      </Link>
    );
  },
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-gray-4 border-l-2 pl-6 text-muted", className)}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-hidden overflow-y-auto">
      <table className={cn("w-full overflow-hidden", className)} {...props} />
    </div>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => {
    if (
      React.Children.toArray(props.children).some(
        (child) =>
          React.isValidElement(child) &&
          (child as React.ReactElement).props.id?.includes("user-content-fn-"),
      )
    ) {
      return (
        <ol data-footnotes>
          <div className="mt-6 mb-2 text-muted text-small">Footnotes</div>
          {props.children}
        </ol>
      );
    }
    return (
      <ol className={cn("mt-2 ml-2 list-decimal", className)} {...props} />
    );
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("mt-2 ml-2 list-disc", className)} {...props} />
  ),
  WarningAlert: ({ text }: { text: string }) => {
    return (
      <div className="my-3 flex items-center gap-3 rounded-lg bg-[#ee7272]/20 px-6 py-3">
        <TriangleAlert size={24} className="text-white-a8" />
        <p className="m-0 text-white-a9">{text}</p>
      </div>
    );
  },
  li: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLLIElement>) => {
    if (props.id?.includes("user-content-fn-")) {
      return (
        <li id={props.id}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              if (child.type === "p") {
                const href = child.props.children.find(
                  (child: React.ReactNode) => {
                    if (React.isValidElement(child)) {
                      return (
                        React.isValidElement(child) &&
                        "props" in child &&
                        (child.props as { href?: string }).href?.includes(
                          "user-content-fnref-",
                        )
                      );
                    }
                    return false;
                  },
                )?.props.href;

                const filtered = child.props.children.filter(
                  (child: React.ReactNode) => {
                    if (React.isValidElement(child)) {
                      return !(
                        React.isValidElement(child) &&
                        "props" in child &&
                        (child.props as { href?: string }).href?.includes(
                          "user-content-fnref-",
                        )
                      );
                    }
                    return true;
                  },
                );

                return (
                  <FootnoteBackReference href={href}>
                    {filtered}
                  </FootnoteBackReference>
                );
              }
              return child;
            }
            return child;
          })}
        </li>
      );
    }
    return <li className={cn("mt-2 ml-2 list-item", className)}>{children}</li>;
  },

  //Button components preview
  GradientButtonPreview: () => {
    return (
      <GradientButton
        className="h-14 w-32"
        text="AuraUI"
        startColor="#ff6a38"
        endColor="#8549df"
        middleColor="#f73b96"
      />
    );
  },
  ReadMoreButtonPreview: () => {
    return <ReadMoreButton text="Read More" />;
  },
  FadeUpTextPreview: FadeUpTextPreview,
  VoteButtonExample: VoteButtonExample,
  HoverButtonOneExample: () => {
    return (
      <HoverButton
        buttonText="Components"
        expandText="Start Building"
        icon="😎"
      />
    );
  },
  HoverFillButtonExample: () => {
    return (
      <HoverFillButton>
        <User size={20} />
        Hover here
      </HoverFillButton>
    );
  },

  // cards
  ExpandableCardExample: ExapandedCardExample,

  // Texts
  GradientTextPreview: () => {
    return (
      <GradientText
        text="Gradient Text"
        startColor="#666666"
        endColor="#ffffff"
      />
    );
  },

  MaskCursorPreview: MaskCursorExample,

  // Tabs
  BottomBorderTabExample: BottomBorderTabExample,

  // Other
  AnimatedBorderExample: AnimatedBorder,
  ImageStackSliderExample: ImageStackSliderExample,
  ImageCropperExample: ImageCropperExample,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}

export function MDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={
        components as React.ComponentProps<typeof MDXProvider>["components"]
      }
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            remarkParse,
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                bypassInlineCode: true,
                theme: {
                  dark: "github-dark",
                  light: "github-light",
                },
                keepBackground: false,
                defaultLang: "tsx",
              },
            ],
            rehypeStringify,
          ],
        },
      }}
    />
  );
}
