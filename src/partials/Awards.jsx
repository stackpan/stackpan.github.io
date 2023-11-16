import React from 'react';
import achievements from '../data/achievementData';
import AchievementCard from '../components/AchievementCard';

function Awards() {
  return (
    <article id="awards" className="bg-base-100 py-12 text-black">
      <div className="px-4 mx-auto w-full md:max-w-3xl lg:max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 md:px-2 md:text-center">Awards 🏆</h2>
        <p className="mb-4 md:px-2">I also have achievement(s) that make my parents proud!</p>
        <section className="mb-8">
          <ul className="flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-x-0">
            {achievements.map((achievement) => (
              <li key={achievement.name} className="md:px-2 lg:basis-1/2">
                <AchievementCard
                  name={achievement.name}
                  description={achievement.description}
                  documentationUrl={achievement.documentationUrl}
                  url={achievement.url}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default Awards;
