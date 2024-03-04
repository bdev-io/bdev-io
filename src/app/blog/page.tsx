import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BorderedBox from '@components/box/BorderedBox';
import MainBox from '@components/box/MainBox';

const NoticeBox = () => (
  <BorderedBox>
    <h2>Posts.</h2>
    <p>Post from the future.</p>
  </BorderedBox>
);

async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const res = await fetch('https://...')
  // const markdown = await res.text()
  const markdown = `
    # Hello, world!
I'm Markdown Content
  `;
  return <MDXRemote source={markdown} />;
}

export default function About() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      width: '100%',
    }}>
      <div style={{
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: '100%',
      }}>
        <div>
          <NoticeBox />
          <MainBox title="Post: RemoteMDXtest">
            <div>
              <RemoteMdxPage />
            </div>
          </MainBox>

        </div>
      </div>
    </div>
  );
}
