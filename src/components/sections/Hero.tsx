
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#f0fdf4_0%,#dcfce7_30%,rgba(255,255,255,0)_50%)] dark:bg-[linear-gradient(to_right,#052e16_0%,#14532d_30%,rgba(0,0,0,0)_50%)]"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start gap-4">
            <div className="animate-fade-in-up flex items-center rounded-full bg-secondary/80 px-4 py-1 text-sm text-secondary-foreground">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary-foreground mr-2">
                ✓
              </div>
              Simplifying Rotating Savings
            </div>
            <h1 className="heading-xl animate-fade-in-up [animation-delay:100ms]">
              Smart Group Savings <span className="text-gradient">for Everyone</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md animate-fade-in-up [animation-delay:200ms]">
              EsusuChain modernizes traditional rotating savings groups. Create pools, track contributions, and manage payouts—all from your smartphone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-4 w-full sm:w-auto animate-fade-in-up [animation-delay:300ms]">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="#download">
                  Download Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 animate-fade-in-up [animation-delay:400ms]">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full bg-esusu-300 ring-2 ring-white dark:ring-gray-900"
                  ></div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>2,000+</strong> happy users and growing
              </div>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[540px] w-full animate-fade-in rounded-xl overflow-hidden shadow-xl border border-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-esusu-100 to-white dark:from-esusu-900 dark:to-background flex items-center justify-center">
              <div className="relative w-[220px] h-[440px] md:w-[270px] md:h-[540px] bg-white dark:bg-gray-900 rounded-[36px] border-8 border-gray-800 overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-[28px]"></div>
                <div className="h-full w-full p-2 pt-6 bg-esusu-100 dark:bg-esusu-950/30">
                  <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                    {/* App mockup content */}
                    <div className="h-14 bg-primary flex items-center justify-between px-4">
                      <div className="text-white font-bold">EsusuChain</div>
                      <div className="h-8 w-8 rounded-full bg-white/20"></div>
                    </div>
                    <div className="p-4">
                      <div className="mb-4">
                        <div className="h-8 w-1/2 bg-esusu-100 dark:bg-esusu-900 rounded-md mb-2"></div>
                        <div className="h-5 w-2/3 bg-esusu-50 dark:bg-esusu-900/50 rounded-md"></div>
                      </div>
                      <div className="h-32 bg-esusu-50 dark:bg-esusu-900/30 rounded-lg mb-4 p-3">
                        <div className="h-6 w-1/3 bg-esusu-200 dark:bg-esusu-800 rounded mb-2"></div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="h-4 w-1/4 bg-esusu-100 dark:bg-esusu-900 rounded"></div>
                          <div className="h-4 w-1/4 bg-esusu-200 dark:bg-esusu-800 rounded"></div>
                        </div>
                        <div className="h-12 bg-white dark:bg-gray-700 rounded-md"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="h-24 bg-esusu-50 dark:bg-esusu-900/30 rounded-lg p-2">
                          <div className="h-4 bg-esusu-200 dark:bg-esusu-800 rounded mb-2"></div>
                          <div className="h-10 bg-white dark:bg-gray-700 rounded-md"></div>
                        </div>
                        <div className="h-24 bg-esusu-50 dark:bg-esusu-900/30 rounded-lg p-2">
                          <div className="h-4 bg-esusu-200 dark:bg-esusu-800 rounded mb-2"></div>
                          <div className="h-10 bg-white dark:bg-gray-700 rounded-md"></div>
                        </div>
                      </div>
                      <div className="h-36 bg-esusu-50 dark:bg-esusu-900/30 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
