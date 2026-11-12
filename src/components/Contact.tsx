import { useEffect, useRef, useState } from 'react';
import resume from '../../public/resume.pdf';
import { ArrowDown, ArrowRight, ArrowUpRight, GitHubMark, HalftoneRamp, LinkedInMark } from './Marks';

const EMAIL = 'kmontayre07@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/king-joshua-montayre/';

type CopyState = 'idle' | 'copied' | 'failed';

export default function Contact() {
  const [copy, setCopy] = useState<CopyState>('idle');
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopy('copied');
    } catch {
      setCopy('failed');
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopy('idle'), 2400);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <HalftoneRamp className="contact__ramp" cols={132} rows={12} />
      <div className="contact__text">
        <h2 id="contact-title" className="display">
          Let's put your project on press.
        </h2>
        <p className="contact__lead">
          Open to full-time remote roles and freelance builds. Email me or send a message on
          LinkedIn, whichever suits you.
        </p>
        <p className="contact__minor">
          <a href="https://github.com/montayrekj" target="_blank" rel="noreferrer" className="link">
            <GitHubMark /> GitHub <ArrowUpRight />
          </a>
          <a href={resume} download="King Joshua Montayre - Resume" className="link">
            Résumé (PDF) <ArrowDown />
          </a>
        </p>
      </div>

      <div className="ways">
        <div className="way way--mail">
          <p className="way__label">Email</p>
          <a className="way__main" href={`mailto:${EMAIL}`}>
            kmontayre07
            <wbr />
            @gmail.com
          </a>
          <div className="way__actions">
            <a className="way__btn way__btn--solid" href={`mailto:${EMAIL}`}>
              Write an email <ArrowRight />
            </a>
            <button type="button" className="way__btn" onClick={copyEmail}>
              {copy === 'copied' ? 'Copied' : copy === 'failed' ? 'Copy failed' : 'Copy address'}
            </button>
            <span className="sr-only" aria-live="polite">
              {copy === 'copied'
                ? 'Email address copied to clipboard'
                : copy === 'failed'
                  ? 'Could not copy. Select the address to copy it.'
                  : ''}
            </span>
          </div>
        </div>

        <a className="way way--linkedin" href={LINKEDIN} target="_blank" rel="noreferrer">
          <p className="way__label">
            <LinkedInMark /> LinkedIn
          </p>
          <span className="way__main">in/king-joshua-montayre</span>
          <span className="way__go">
            Message me on LinkedIn <ArrowUpRight />
          </span>
        </a>
      </div>
    </section>
  );
}
