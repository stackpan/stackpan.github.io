import {
  SiFacebook, SiGithub, SiGmail, SiLinkedin,
} from '@icons-pack/react-simple-icons';
import React from 'react';

function Contact() {
  return (
    <article id="contact" className="bg-base-300 py-12 text-black">
      <div className="px-6 mx-auto w-full md:max-w-3xl lg:max-w-5xl">
        <section>
          <h2 className="text-3xl font-bold mb-6 md:text-center">Connect With Me 👥</h2>
          <div className="flex flex-col gap-2 lg:flex-row lg:flex-wrap md:gap-x-0">
            <div className="lg:basis-1/2 lg:px-2">
              <a href="mailto:ivanrizqy.ir@gmail.com" className="btn btn-primary btn-block normal-case hover:bg-accent hover:border-accent active:bg-secondary active:border-secondary" target="_blank" rel="noreferrer">
                <SiGmail />
                <span>ivanrizqy.ir@gmail.com</span>
              </a>
            </div>
            <div className="lg:basis-1/2 lg:px-2">
              <a href="https://github.com/stackpan" className="btn btn-primary btn-block normal-case hover:bg-accent hover:border-accent active:bg-secondary active:border-secondary" target="_blank" rel="noreferrer">
                <SiGithub />
                <span>stackpan</span>
              </a>
            </div>
            <div className="lg:basis-1/2 lg:px-2">
              <a href="https://www.linkedin.com/in/ivan-rizkya-susanto-54a6721b3" className="btn btn-primary btn-block normal-case hover:bg-accent hover:border-accent active:bg-secondary active:border-secondary" target="_blank" rel="noreferrer">
                <SiLinkedin />
                <span>Ivan Rizkya Susanto</span>
              </a>
            </div>
            <div className="lg:basis-1/2 lg:px-2">
              <a href="https://web.facebook.com/PanEpanJoul" className="btn btn-primary btn-block normal-case hover:bg-accent hover:border-accent active:bg-secondary active:border-secondary" target="_blank" rel="noreferrer">
                <SiFacebook />
                <span>Ivan Rizkyanto</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Contact;
