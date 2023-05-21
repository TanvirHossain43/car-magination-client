import { Accordion } from 'flowbite-react';
import React from 'react';
import photo from '../../assets/faq.png'

const FaqSection = () => {
    return (
        <div className='mt-16'>
            <h2 className='text-3xl font-extrabold text-center mb-2'>Frequently Asked Questions</h2>

            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-2/4'>
                        <img src={photo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>
                            <Accordion  >
                                <Accordion.Panel>
                                    <Accordion.Title>
                                    How do I place an order?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        To place an order, simply browse our selection of car toys, choose the items you want, and click the "Add to Cart" button. Once you've finished shopping, proceed to the checkout page, provide your shipping information, select your preferred payment method, and complete the order.
                                        </p>
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                    What payment methods do you accept?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        We accept major credit cards (Visa, Mastercard, American Express) and PayPal for secure and convenient payment transactions.
                                        </p>
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                    Do you offer international shipping?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Yes, we offer international shipping to select countries. During the checkout process, you can enter your location to check if we deliver to your country. Please note that additional customs fees or import duties may apply and are the responsibility of the buyer.
                                        </p>
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                    What is your return policy?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        We want you to be completely satisfied with your purchase. If for any reason you are not happy with your car toy, you can return it within 30 days of delivery for a refund or exchange. Please refer to our Returns and Refunds page for detailed instructions on how to initiate a return.
                                        </p>
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                    Are the car toys safe for children?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Our car toys are designed with safety in mind and comply with relevant safety regulations. However, parental supervision is always recommended, especially for young children, to ensure safe play and prevent any potential choking hazards.
                                        </p>
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                    Do you offer international shipping?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Yes, we offer international shipping to select countries. During the checkout process, you can enter your location to check if we deliver to your country. Please note that additional customs fees or import duties may apply and are the responsibility of the buyer.
                                        </p>
                                        
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FaqSection;