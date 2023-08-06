import { Components } from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import { CopyBtn } from '../../CopyBtn';

export const useGetCodeFormat = (): Components => {
  return {
    code({ node, inline, className, children, ...props }) {
      const code = String(children).replace(/\n$/, '');
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <div style={{ position: 'relative' }}>
          <SyntaxHighlighter
            {...props}
            children={code}
            style={atomDark}
            language={match[1]}
            PreTag="div"
            showLineNumbers
            lineNumberStyle={{
              color: 'white',
              paddingRight: '1em',
              textAlign: 'right',
              userSelect: 'none'
            }}
            customStyle={{ position: 'relative' }}
          />
          <div
            style={{
              position: 'absolute',
              right: '1%',
              bottom: 0,
              fontStyle: 'italic',
              fontSize: '13px'
            }}
          >
            {match[1]}
          </div>
          <CopyBtn textToCopy={code} />
        </div>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    }
  };
};
