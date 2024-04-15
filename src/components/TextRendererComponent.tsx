import { cn } from "@/lib/utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface TextRendererProps {
  content: any[];
  quotePosition?: "left" | "right" | "center";
}

const TextRendererComponent = ({ content, quotePosition} : TextRendererProps) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // You can use the default components to set class names...
        paragraph: ({ children }) => (
          <p className="text-neutral-900 w-full md:max-w-4xl">{children}</p>
        ),
        image: ({ image }) => (
          <div className="py-8">
            <a data-fslightbox="fslightbox" href={image.url}>
              <img
              className="w-full h-56 md:h-80 lg:max-w-4xl lg:h-auto py-3 object-cover rounded-lg"
              src={image.url}
              alt={image.alternativeText || ""}
              />
            </a>
            <p
              className="text-center text-sm text-gray-400"
            >
              {image.alternativeText}
            </p>
          </div>
        ),
        quote: ({ children }) => {
          // Render the \n as a <br />
          // @ts-ignore
          // Get the text from the children
          const text = children[0].props.text;

          // check if the text has \n and replace it with <br />
          if (text.includes("\n")) {
            const splitText = text.split("\n");
            return (
              <blockquote className={cn(
                "text-neutral-900 max-w-3xl italic border-l-4 border-gray-150 pl-4 pr-4 py-6 my-6 xl:mr-40",
                quotePosition === "left" && "mr-auto",
                quotePosition === "right" && "ml-auto",
                quotePosition === "center" && "mx-auto"
              )}>
                {splitText.map((text: string, index: number) => (
                  <span key={index}>
                    {text}
                    {index !== splitText.length - 1 && <br />}
                  </span>
                ))}
              </blockquote>
            );
          } else {
            // If there is no \n, render the text as is
            return (
              <blockquote className={cn(
                "text-neutral-900 max-w-3xl italic border-l-4 border-gray-150 pl-4 py-6 my-6 xl:mr-40",
                quotePosition === "left" && "mr-auto",
                quotePosition === "right" && "ml-auto",
                quotePosition === "center" && "mx-auto"
              )}>
                {children}
              </blockquote>
            );
          }
        },
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-4xl font-bold py-2 pb-4">{children}</h1>;
            case 2:
              return <h2 className="text-3xl font-bold py-2 pb-4">{children}</h2>;
            case 3:
              return <h3 className="text-2xl font-bold py-2 pb-4">{children}</h3>;
            case 4:
              return <h4 className="text-xl font-bold py-2 pb-4">{children}</h4>;
            case 5:
              return <h5 className="text-lg font-bold py-2 pb-4">{children}</h5>;
            case 6:
              return <h6 className="text-md font-bold py-2 pb-4">{children}</h6>;
            default:
              return <p>{children}</p>;
          }
        },
        // For links, you may want to use the component from your router or framework
        link: ({ children, url }) => <a href={url}>{children}</a>,
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
      }}
    />
  );
};

export default TextRendererComponent;
