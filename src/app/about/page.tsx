import React from 'react';
import BorderedBox from '@components/box/BorderedBox';
import MainBox from '@/components/box/MainBox';
import Image from 'next/image';

import './about.css';

const NoticeBox = () => (
  <BorderedBox>
    <h2>Notice.</h2>
    <p>
      This is My First Web Application, and I am still learning.
    </p>
    <p>
      1. Quality is better than quantity.
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
  </BorderedBox>
);

const QuestionAnserDiv = ({ question, answer }: { question: string, answer: string }) => (
  <div style={{ marginBottom: '1rem' }}>
    <h3 style={{ color: 'lime' }}>{question}</h3>

    <div style={{ marginLeft: '1rem' }}>
      <p>&gt; {answer}</p>
    </div>
  </div>
);

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
          <MainBox title="Who Am I?">
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: '1rem',
              }}>
                <div className="about-logo">
                  <Image src="/assets/images/banner.png" alt="logo" width={800} height={800} />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <p>I am a software developer who is passionate about learning new things.</p>
                <br />
                <p>
                  I am also an open-source enthusiast
                  and a contributor to various open-source projects.
                </p>
                <br />
                <p>I am currently learning about web development and cloud computing.</p>
              </div>
              <QuestionAnserDiv question="Who we are" answer="???" />
              <QuestionAnserDiv question="What we do" answer="???" />

              <h3>Links</h3>
              <ul>
                <div className="link-wrapper">
                  <ul style={{ flexDirection: 'column' }}>
                    <li><a href="https://github.com/bdev-io/">&gt; Github</a></li>
                    <li><a href="mailto:public@bdev.io">&gt; Email</a></li>
                  </ul>
                </div>
              </ul>
            </div>
          </MainBox>

          <MainBox title="What is this?" style={{ marginTop: '2rem' }}>
            <div>
              <p>This is a simple web application that I made to learn about web development.</p>
              <br />
              <p>It is made with:</p>
              <ul>
                <li>React</li>
                <li>NestJS</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </MainBox>

        </div>
      </div>
    </div>
  );
}
