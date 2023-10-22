import { SiFacebook, SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
import React from 'react';

function Contact() {
  return (
    <article id="about" className="bg-neutral py-12 text-black">
      <div className="px-4">
        <section>
          <h2 className="text-3xl font-bold mb-6">Connect With Me 👥</h2>
          <div className="space-y-2">
            <a href="https://github.com/stackpan" className="btn btn-secondary btn-block">
              <SiGithub />
              <span>stackpan</span>
            </a>
            <a href="https://www.linkedin.com/in/ivan-rizkya-susanto-54a6721b3" className="btn btn-secondary btn-block">
              <SiLinkedin />
              <span>Ivan Rizkya Susanto</span>
            </a>
            <a href="https://web.facebook.com/PanEpanJoul" className="btn btn-secondary btn-block">
              <SiFacebook />
              <span>Ivan Rizkyanto</span>
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

export default Contact;
