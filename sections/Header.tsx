import { JSX } from "preact";

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @format rich-text
   * @default This text is entirely editable, tailor it freely.
  */
  description?: string;
}

export default function Header(
  {
    title = "Click here to tweak this text however you want.",
    description = "This text is entirely editable, tailor it freely.",
  }: Props,
): JSX.Element | null {

  return (
    <header class="flex flex-col gap-4 items-center justify-center max-w-[746px] mx-auto pt-10 w-full lg:px-0 px-6">
      {title && (
        <h1 class="lg:text-6xl text-4xl text-center" dangerouslySetInnerHTML={{
                __html: title,
              }}/>
      )}
      {description && <div dangerouslySetInnerHTML={{
        __html: description,
      }}/>}
    </header>
  );
}
