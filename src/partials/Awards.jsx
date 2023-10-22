import React from 'react';

function Awards() {
  return (
    <article id="awards" className="bg-base-100 py-12 text-black">
      <div className="px-6 mx-auto w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-6 md:text-center">Awards 🏆</h2>
        <p className="mb-4 lg:px-2">I also have achievement(s) that make my parents proud!</p>
        <section className="mb-8">
          <ul className="flex flex-col gap-4 lg:px-2">
            <li>
              <article className="p-4 rounded-md border-4 border-black space-y-2">
                <header>
                  <h4 className="text-xl font-bold my-2">Top Startup 3 in KKSI 2020 - Smart Apps for School</h4>
                </header>
                <div>
                  <p className="my-4">AyoPKL! is the 3rd Best Startup Project of 2020 KKSI created by a team of students of SMK Negeri 1 Pemalang</p>
                </div>
                <footer>
                  <div className="flex justify-end">
                    <a href="https://youtu.be/n2-8Ir7p-p8?si=1jNECynK4lcT62Gh" className="btn btn-active btn-link">Overview &gt;&gt;&gt;</a>
                    <a href="https://drive.google.com/file/d/1qmEdw0MXsTt0u-fCg4XFDfR1AZCY5796/view?usp=share_link" className="btn btn-active btn-link">Check it out &gt;&gt;&gt;</a>
                  </div>
                </footer>
              </article>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}

export default Awards;
