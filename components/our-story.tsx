import { Sprout, HeartHandshake, Home } from 'lucide-react';

const storyCards = [
  {
    icon: Sprout,
    title: 'Natural Harvesting',
    description:
      'Water hyacinth is sustainably harvested from the quiet rivers of the Mekong Delta, turning an invasive plant into a valuable resource.',
    image:
      'https://images.pexels.com/photos/36544751/pexels-photo-36544751.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Water hyacinth on a quiet Mekong river in Vietnam',
  },
  {
    icon: HeartHandshake,
    title: 'Artisan Craftsmanship',
    description:
      'Skilled rural artisans meticulously weave each piece by hand, preserving traditional techniques passed down through generations.',
    image:
      'https://images.pexels.com/photos/29497912/pexels-photo-29497912.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Close-up of artisan hands weaving a basket',
  },
  {
    icon: Home,
    title: 'Eco-Luxury Living',
    description:
      'Each finished product brings warmth and natural elegance into modern European homes — sustainable luxury that tells a story.',
    image:
      'https://images.pexels.com/photos/5424913/pexels-photo-5424913.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Water hyacinth basket in a modern Scandinavian room',
  },
];

export function OurStory() {
  return (
    <section id="story" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Our Story
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Vietnamese Rivers to European Homes
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Every product carries the journey from river to artisan workshop to
            your showroom floor — a chain built on sustainability, craft, and
            trust.
          </p>
        </div>

        {/* 3-card grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-12">
          {storyCards.map((card, index) => (
            <article key={card.title} className="group flex flex-col">
              {/* Image with hover zoom */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col pt-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
