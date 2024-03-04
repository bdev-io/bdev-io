'use client';

import React from 'react';
import BorderedBox from '@components/box/BorderedBox';
import MainBox from '@components/box/MainBox';

const NoticeBox = () => (
  <BorderedBox>
    <h2>Hacker&apos;s Attitude.</h2>
    <p>
      1. The world is full of fascinating problems waiting to be solved.
    </p>
    <p>
      2. No problem should ever have to be solved twice.
    </p>
    <p>
      3. Boredom and drudgery are evil.
    </p>
    <p>
      4. Freedom is good.
    </p>
    <p>
      5. Attitude is no substitute for competence.
    </p>
  </BorderedBox>
);

export default function Home() {
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
          <MainBox title="What is this?" style={{ marginTop: '2rem' }}>
            <div>
              <p>This is a simple web application that I made to learn about web development.</p>
              <br />
              <p>It is made with:</p>
              <div className="link-wrapper">
                <ul style={{
                  listStyle: 'none',
                  flexDirection: 'column',
                  justifyItems: 'left',
                  justifyContent: 'left',
                  alignItems: 'start',
                }}>
                  <li>React</li>
                  <li>NestJS</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </MainBox>
        </div>
      </div>
    </div>
  );
}
