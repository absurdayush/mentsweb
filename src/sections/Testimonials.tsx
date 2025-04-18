import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "I found this community very helpful as I can see students are discussing on various projects and I can devote my skills there.",
      name: "Varun Choudhary",
      designation: "IIT Madras Student",
      src: "https://media.licdn.com/dms/image/v2/D4E03AQEk0oXJXKlvNw/profile-displayphoto-shrink_400_400/B4EZThIunYGgAk-/0/1738943950832?e=1744243200&v=beta&t=Z752lc5B8fEF847f8LT1jR_-C_U5LHNFt-eLC5N2xzA",
    },
    {
      quote:
        "Krishna's Ments platform has been really good for my startup. I was impressed by how he connected me with relevant experts and peers, sparking valuable insights. Highly recommend Ments for any founder seeking meaningful connections!",
      name: "Rudransh",
      designation: "Software developer",
      src: "https://i.imgur.com/J8DIKdt.jpeg",
    },
    // {
    //   quote:
    //     "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //   name: "Emily Watson",
    //   designation: "Operations Director at CloudScale",
    //   src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return (
  <div className="relative z-15">
    <AnimatedTestimonials testimonials={testimonials} />
  </div>
);
}
