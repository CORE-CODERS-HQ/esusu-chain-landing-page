
import React from 'react';
import { Button } from '@/components/ui/button';

const Download = () => {
  return (
    <section id="download" className="section-padding bg-gradient-to-b from-secondary/50 to-background dark:from-secondary/20 dark:to-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">Download EsusuChain Today</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Start your savings journey with EsusuChain and experience secure, transparent rotating savings on your mobile device.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-black/90 text-white h-16 px-6" asChild>
              <a href="#" className="inline-flex items-center">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.5656 0H6.4328C5.08404 0 4 1.08404 4 2.4328V21.5656C4 22.916 5.08404 24 6.4328 24H17.5656C18.916 24 20 22.916 20 21.5672V2.4328C20 1.08404 18.916 0 17.5656 0ZM12 22.5984C11.1016 22.5984 10.3781 21.8766 10.3781 20.9781C10.3781 20.0797 11.1016 19.3562 12 19.3562C12.8984 19.3562 13.6219 20.0797 13.6219 20.9781C13.6219 21.8766 12.8984 22.5984 12 22.5984ZM17.2 18.8672H6.8V3.2H17.2V18.8672Z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold font-sans -mt-1">App Store</div>
                </div>
              </a>
            </Button>
            <Button size="lg" className="bg-black hover:bg-black/90 text-white h-16 px-6" asChild>
              <a href="#" className="inline-flex items-center">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.5227 9.69543L6.87116 2.50391L14.8522 10.9996L17.5227 9.69543Z"></path>
                    <path d="M5.50391 2.95519C5.33914 3.22489 5.24963 3.55991 5.25 3.90327V20.0972C5.25 20.4339 5.3375 20.753 5.49609 21.0152L13.3336 12.6339L5.50391 2.95519Z"></path>
                    <path d="M19.5909 12.0014L16.6364 10.5L13.8 13.0939L16.8091 16.4564L19.5909 15.0001C20.473 14.4893 20.473 12.5107 19.5909 12.0014Z"></path>
                    <path d="M5.81836 21.4421C5.93742 21.4939 6.0661 21.52 6.19568 21.5192C6.47568 21.5192 6.74568 21.4346 6.97068 21.2682L14.7798 16.5893L11.7707 13.2268L5.81836 21.4421Z"></path>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
                </div>
              </a>
            </Button>
          </div>
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background dark:from-background to-transparent h-full w-full z-10"></div>
            <div className="relative z-0 rounded-xl overflow-hidden border border-border/50 shadow-xl max-w-3xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-esusu-100/70 to-esusu-50/30 dark:from-esusu-900/30 dark:to-background">
                <div className="flex items-center justify-center h-full">
                  <div className="grid grid-cols-3 gap-4 max-w-2xl p-4">
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg w-full h-80">
                      <div className="h-12 bg-primary flex items-center px-4">
                        <div className="text-white font-semibold text-sm">Dashboard</div>
                      </div>
                      <div className="p-3">
                        <div className="h-4 bg-esusu-100 dark:bg-esusu-800 rounded mb-2 w-2/3"></div>
                        <div className="h-12 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg mb-3"></div>
                        <div className="h-6 bg-esusu-100 dark:bg-esusu-800 rounded-lg w-1/2 mb-2"></div>
                        <div className="h-28 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg mb-3"></div>
                        <div className="h-16 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg w-full h-80">
                      <div className="h-12 bg-primary flex items-center px-4">
                        <div className="text-white font-semibold text-sm">Savings Pool</div>
                      </div>
                      <div className="p-3">
                        <div className="h-4 bg-esusu-100 dark:bg-esusu-800 rounded mb-2 w-3/4"></div>
                        <div className="h-8 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg mb-3"></div>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="h-20 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg"></div>
                          <div className="h-20 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg"></div>
                        </div>
                        <div className="h-6 bg-esusu-100 dark:bg-esusu-800 rounded-lg w-1/2 mb-2"></div>
                        <div className="h-24 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg w-full h-80">
                      <div className="h-12 bg-primary flex items-center px-4">
                        <div className="text-white font-semibold text-sm">Payment</div>
                      </div>
                      <div className="p-3">
                        <div className="h-4 bg-esusu-100 dark:bg-esusu-800 rounded mb-2 w-1/2"></div>
                        <div className="h-16 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg mb-3"></div>
                        <div className="h-6 bg-esusu-100 dark:bg-esusu-800 rounded-lg w-3/4 mb-2"></div>
                        <div className="h-12 bg-esusu-50 dark:bg-esusu-900/50 rounded-lg mb-3"></div>
                        <div className="h-10 bg-primary rounded-lg mb-2"></div>
                        <div className="h-4 bg-esusu-100 dark:bg-esusu-800 rounded w-1/3 mx-auto"></div>
                      </div>
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

export default Download;
