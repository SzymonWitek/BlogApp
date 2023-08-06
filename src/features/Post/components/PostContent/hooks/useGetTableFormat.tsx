import type { Components } from 'react-markdown';
import type { Options } from 'remark-gfm';

export const useGetTableFormat = (): Components & Options => {
  return {
    li: ({ node, children, ...props }) => {
      return <li className="italic list-disc ml-[2vw] py-1">{children}</li>;
    },
    td: ({ node, children, ...props }) => {
      return <td className="border py-1 text-center">{children}</td>;
    },
    th: ({ node, children, ...props }) => {
      return <th className="py-1">{children}</th>;
    },
    tr: ({ node, children, ...props }) => {
      return <tr>{children}</tr>;
    },
    table: ({ node, children, ...props }) => {
      return (
        <div className="overflow-auto mx-auto w-[900px] mt-1  mb-5">
          <table className="border w-[100%]">{children}</table>
        </div>
      );
    }
  };
};
