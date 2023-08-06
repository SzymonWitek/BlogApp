import { Components } from 'react-markdown';

export const useGetTextFormat = (): Components => {
  return {
    h1: ({ node, children, ...props }) => {
      return <h1 className="pt-4 pb-2 text-white">{children}</h1>;
    },
    h2: ({ node, children, ...props }) => {
      return (
        <h2 className="pt-4 pb-1 text-white" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => {
      return <h3 className=" pt-4 pb-1 text-white">{children}</h3>;
    },
    h4: ({ node, children, ...props }) => {
      return <h4 className=" pt-4 text-white">{children}</h4>;
    },
    h5: ({ node, children, ...props }) => {
      return <h5 className=" pt-4 text-white">{children}</h5>;
    },
    h6: ({ node, children, ...props }) => {
      return <h6 className=" pt-4 text-white">{children}</h6>;
    },
    p: ({ node, children, ...props }) => {
      return <p className="leading-[1.75] py-2 text-lg">{children}</p>;
    },
    a: ({ node, children, href, ...props }) => {
      return (
        <a className="text-blue-500" href={href}>
          {children}
        </a>
      );
    }
  };
};
