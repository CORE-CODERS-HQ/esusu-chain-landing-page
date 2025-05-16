
import React from 'react';

const testimonials = [
  {
    quote: "EsusuChain has made our family saving circle so much easier to manage. We used to track everything on paper, but now everything is transparent and organized.",
    author: "Amina Ibrahim",
    position: "Group Organizer",
  },
  {
    quote: "I never trusted rotating savings groups until I used EsusuChain. The transparency and automatic reminders have changed how I save with my friends.",
    author: "Emmanuel Okonkwo",
    position: "Business Owner",
  },
  {
    quote: "My market women association has been using EsusuChain for 6 months now. No more disputes about who paid and when - everything is clear for all members to see.",
    author: "Grace Adeyemi",
    position: "Market Vendor",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30 dark:bg-secondary/10">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Join thousands of satisfied users who are already enjoying the benefits of EsusuChain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border/50 relative"
            >
              <div className="absolute -top-3 left-6 text-primary text-5xl">"</div>
              <blockquote className="relative pt-6">
                <p className="text-foreground mb-4">{testimonial.quote}</p>
                <footer>
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-esusu-100 dark:bg-esusu-800 mr-3"></div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
