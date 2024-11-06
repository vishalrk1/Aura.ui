import type React from "react";

import styles from "./styles.module.css";

export interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  codeblock?: string;
}

export default function ComponentPreview({
  children,
  codeblock,
}: ComponentPreviewProps) {
  return (
    <figure data-with-codeblock={codeblock} className={styles.preview}>
      {children}
    </figure>
  );
}
