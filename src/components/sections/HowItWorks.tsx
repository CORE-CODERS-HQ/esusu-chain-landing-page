
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Create a Savings Pool",
    description: "Set up your group by entering a name, number of members, contribution amount, and frequency (weekly or monthly).",
  },
  {
    number: "02",
    title: "Invite Members",
    description: "Share your pool details with friends or family. Each member can join with their own account and view pool details.",
  },
  {
    number: "03",
    title: "Make Contributions",
    description: "Every member contributes the agreed amount according to the schedule. The app tracks all payments.",
  },
  {
    number: "04",
    title: "Receive Payouts",
    description: "Members receive the full pool amount on their payout date according to their position in the cycle.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">How EsusuChain Works</h2>
          <p className="text-muted-foreground">
            EsusuChain makes rotating savings simple and accessible for everyone with a straightforward process.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[40px] md:left-1/2 top-0 bottom-0 w-0.5 bg-esusu-100 dark:bg-esusu-900 hidden md:block" />

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="bg-esusu-50 dark:bg-esusu-900/20 p-6 rounded-lg border border-border/50 relative">
                    {/* Mobile step indicator */}
                    <div className="absolute top-6 -left-10 md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 flex md:justify-end items-center gap-2">
                      <span className="text-muted-foreground/70 text-sm font-normal hidden md:inline">{step.number}</span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                {/* Desktop step indicator */}
                <div className={`hidden md:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-4 border-primary/30 flex items-center justify-center relative z-10">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 0 ? 'md:order-2' : ''} md:flex md:items-center`}>
                  <div className="hidden md:block h-60 bg-esusu-50 dark:bg-esusu-900/20 rounded-lg overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-br from-esusu-100/50 to-esusu-50/20 dark:from-esusu-800/30 dark:to-esusu-900/10 flex items-center justify-center">
                      {/* Mockup step illustrations */}
                      {index === 0 && (
                        <div className="w-32 h-32 rounded-lg bg-white dark:bg-gray-800 shadow-md p-4">
                          <div className="h-4 w-full bg-esusu-100 dark:bg-esusu-700 rounded mb-3"></div>
                          <div className="h-4 w-3/4 bg-esusu-50 dark:bg-esusu-800 rounded mb-3"></div>
                          <div className="h-12 w-full bg-esusu-200 dark:bg-esusu-600 rounded"></div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="flex gap-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-esusu-200 dark:bg-esusu-700 flex items-center justify-center">
                              <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-800"></div>
                            </div>
                          ))}
                        </div>
                      )}
                      {index === 2 && (
                        <div className="w-32 h-8 bg-white dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
                          <div className="w-24 h-4 bg-esusu-100 dark:bg-esusu-700 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-primary"></div>
                          </div>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">₦</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
