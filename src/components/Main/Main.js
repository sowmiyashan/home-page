import React from 'react';
import arrow from '../../images/arrow.svg';
import dashboard2 from '../../images/Dashboard 2.svg'
import dots from '../../images/dots.svg';
import ryan1x from '../../images/ryan@1x.jpg';
import bankofamerica from '../../images/bankofamerica.svg';
import captialone from '../../images/captialone.svg';
import citi from '../../images/citi.svg';
import td from '../../images/td.svg';
import rbc from '../../images/rbc.svg';
import growing from '../../images/growing.svg';
import wellsfargo from '../../images/wellsfargo.svg';
import twitter from '../../images/twitter.svg';
import swing from '../../images/swing.svg';

import Asset from '../../images/Asset 4-8.png'
import Desktop from '../../images/Desktop - 2 with logos.jpg'


import Info from '../Info';


function Main(props) {
    return (
        <>
        <div className='main m-cont shadow-bo'>
          <div className=' sm:grid sm:grid-cols-10 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12'>
           
            <section className='main-text col-span-6 lg:col-span-4'>
              <h1 className='text-first leading-first md:text-sec md:leading-sec  font-body font-semibold mb-8 heading'>
                  Bridging companies and campuses to <span className='text-purple-500'> empower students</span> 
                
              </h1>
              <p className='text-lg mb-8 heading-sub'>
              GradTheory  is creating a future where it is exciting and 
              fair to pursue your career in the ever-evolving world of technology. 
              </p>

              {/* <form>
                <div className='bg-white rounded-full py-1 pr-1 pl-6 mb-6 shadow-input'>
                  <label className='absolute -m-px w-px h-px overflow-hidden whitespace-nowrap border-0'>
                    Enter email address...
                  </label>
                  <div className='flex items-center'>
                    <input
                      type='email'
                      placeholder='Enter email address...'
                      id='email'
                      name='email'
                      className='outline-none flex-1 bg-transparent min-w-0'
                    />
                    <button
                      type='submit'
                      className='submit flex items-center flex-none bg-yellow-200 rounded-full py-4 px-5 sm:px-7 ml-4'
                    >
                      <span className='hidden sm:block text-sm'>
                        Join waitlist
                      </span>
                      <span className='sm:hidden text-sm'>Waitlist</span>
                      <span className='block ml-2 w-3 h-3'>
                        <img
                          alt='Right arrow icon'
                          className='arrow'
                          width='12'
                          height='12'
                          src={arrow}
                        />
                      </span>
                    </button>
                  </div>
                </div>

                <p>
                  <small className='text-sm text-gray-400'>
                    We won&rsquo;t sell or spam your email. Scouts honour.
                  </small>
                </p>
              </form> */}
            </section>

              {/* <aside class="col-start-7 col-end-11 mt-32 sm:mt-12">
                <div class="app absolute right-0 rounded-lg overflow-hidden">
                  <img
                    alt='Mock up of the earmark application'
                    loading='lazy'
                    src={}
                    className='sm:max-w-none h-auto'
                    width='875'
                    height='779'
                  />
                </div>
                <div class="app-filler justify-self-stretch bg-transparent"></div>
              </aside> */}
                
            
          </div>
        </div>

        <section className='logo-sec bg-white py-16 lg:pt-28'>
          <h3 className='sub-headings text-7xl leading-3v font-semibold mb-6'>
            They can be your future employers
          </h3>
          <Info />
        </section>

        

        <div className='bg-white pb-6 sm:pb-12'>
          <div className='mx-auto max-w-screen-xl px-6 md:px-12'>
            <section className='pt-16 sm:pt-28'>
              <div className='btm-cont max-w-lg text-center mx-auto'>
                <h3 className='sub-headings text-7xl leading-3v font-semibold mb-6'>
                Creating an ecosystem of opportunities
                </h3>
                <p className='sub-para text-lg leading-v mb-8'>
                Recruiting is so broken in that it focuses so much on background information 
                through resumes rather than the candidate’s actual abilities to perform on the job. 
                That’s why millions of great candidates are not getting hired and are working multiple 
                jobs to make ends meet while 72% of recruiters struggling to find qualified candidates.

                </p>

                {/* <form>
                  <div className='bg-white rounded-full py-1 pr-1 pl-6 mb-6 shadow-input'>
                    <label className='absolute -m-px w-px h-px overflow-hidden whitespace-nowrap border-0'>
                      Enter email address...
                    </label>
                    <div className='flex items-center'>
                      <input
                        type='email'
                        placeholder='Enter email address...'
                        id='email'
                        name='email'
                        className='outline-none flex-1 bg-transparent min-w-0'
                      />
                      <button
                        type='submit'
                        className='submit flex items-center flex-none bg-yellow-200 rounded-full py-4 px-5 sm:px-7 ml-4'
                      >
                        <span className='hidden sm:block text-sm'>
                          Join waitlist
                        </span>
                        <span className='sm:hidden text-sm'>Waitlist</span>
                        <span className='block ml-2 w-3 h-3'>
                          <img
                            alt='Right arrow icon'
                            className='arrow'
                            width='12'
                            height='12'
                            src={arrow}
                          />
                        </span>
                      </button>
                    </div>
                  </div>

                  <p>
                    <small className='text-sm text-gray-400'>
                      We won&rsquo;t sell or spam your email. Scouts honour.
                    </small>
                  </p>
                </form> */}
              </div>
            </section>
          </div>
        </div>

        <div className=' bg-beige '>
          <div className='sm:grid sm:grid-cols-12 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12'>
            <section className='col-start-7 col-end-13 row-start-2 z-10'>
              <article className='pt-12 sm:pt-24 pb-4 sm:pb-28'>
                <h2 className='sub-headings leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                  Introducing GradTheory
                </h2>
                <p className='sub-para text-lg mb-6 -mt-1'>
                Recent graduates want great jobs. Companies want great talent. 
                GradTheory enables collaboration between companies, universities and 
                their students by creating an ecosystem of opportunities where students 
                are rewarded with opportunities they deserve
                </p>
              </article>
            </section>
            <div className='col-start-1 col-end-5 row-start-2 self-end justify-self-end'>
              {/* <img
                alt='Illustration of a woman on a swing'
                loading='lazy'
                width='512'
                className='max-w-full h-auto sm:max-w-none'
                height='481'
                src={swing}
              /> */}
            </div>
          </div>
        </div>

        <section className='stud-sec bg-white py-16 lg:pt-28'>
          <div className='sm:grid sm:grid-cols-10 sm:gap-12 md:gap-24 mx-auto max-w-screen-xl px-6 md:px-12'>
            <div className='col-span-6 lg:col-span-5 sm:pr-12'>
              {/* <p className='inline-block py-0.5  px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                <span className='text-sm text-purple-600'>
                  Personalized insights
                </span>
              </p> */}
              <h2 className='sub-headings heading-2 leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                For students
              </h2>
              <p className='sub-para text-lg mb-6 -mt-1'>
                We help candidates showcase their skills and experience to employers as a way to get hired.
              </p>
              <p className='sub-para text-lg -mt-1.5'>
              Land an internship or entry-level job at cutting edge startups, 
              leading tech companies or anything in between. Your career starts here.
              </p>
            </div>
            <aside className='col-start-8 lg:col-start-6 col-end-11 mt-8 '>
              <div className='chart absolute right-0 rounded-lg overflow-hidden'>
                <img
                  alt='Monthly budget graphing showing a balance'
                  loading='lazy'
                  src={Desktop}
                  className='dashboard2 max-w-none h-auto'
                  width='759'
                  height='400'
                />
              </div>
              <div className='chart-filler justify-self-stretch bg-transparent'></div>
            </aside>
          </div>
        </section>

        <div className=' bg-white sm:bg-transparent bg-vhite '>
          <div className='sm:grid sm:grid-cols-12 sm:gap-3 md:gap-6  px-6 md:px-12'>
            <section className='col-start-8 col-end-12 row-start-2 z-10'>
              <article className='pt-12 sm:pt-24 pb-4 sm:pb-28'>
                {/* <p className='inline-block py-0.5  px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                  <span className='text-sm text-purple-600'>
                    Personalized insights
                  </span>
                </p> */}
                <h2 className='sub-headings heading-2 leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                  For colleges
                </h2>
                <p className='sub-para text-lg mb-6 -mt-1'>
                  We help candidates showcase their skills and experience to employers as a way to get hired.
                </p>
                <p className='sub-para text-lg -mt-1.5'>
                Land an internship or entry-level job at cutting edge startups, 
                leading tech companies or anything in between. Your career starts here.
                </p>
              </article>
            </section>
            <div className='col-start-1 col-end-7 row-start-2 self-end justify-self-end'>
              <img
                alt='Illustration of a woman on a swing'
                loading='lazy'
                className='dashboard2 h-auto sm:max-w-none'
                width='759'
                height='400'
                src={Asset}
              />
            </div>
          </div>
        </div>

    
        <section className='quote-ltext sm:hidden bg-beige px-6 py-12'>
          <blockquote className='relative'>
            <img
              alt=''
              loading='lazy'
              width='196'
              height='158'
              className='absolute transform -translate-x-1/2 -translate-y-1/2'
              src={dots}
            />
            <article className='flex flex-col relative'>
              <img
                alt='Ryan Johnson headshot avatar'
                loading='lazy'
                src={ryan1x}
                className='self-center sm:self-start lg:self-center rounded-full mb-6'
                width='64'
                height='64'
              />
              <p className='text-xl leading-2v font-semibold mb-8'>
                &ldquo;This will seriously be a game changer. Get ready for the
                best thing to come to your finances.&rdquo;
              </p>
              <p className='text-lg leading-v '>
                <strong>Ryan Johnson</strong>
              </p>
              <p className='text-lg leading-v'>
                Principal Product Design, Dribbble
              </p>
            </article>
          </blockquote>
        </section>

        <div className='quote bg-white sm:bg-transparent bg-vhite'>
          <div className='sm:grid sm:grid-cols-12 sm:gap-3 md:gap-6 mx-auto max-w-screen-xl px-6 md:px-12'>
            <div className='hidden sm:block col-start-1 row-start-1 col-end-5 pt-28 pr-4 lg:pr-12'>
              <blockquote className='relative'>
                <img
                  alt=''
                  loading='lazy'
                  width='196'
                  height='158'
                  className='absolute transform -translate-x-1/2 -translate-y-1/2'
                  src={dots}
                />
                <article className='flex flex-col relative'>
                  <img
                    alt='Ryan Johnson headshot avatar'
                    loading='lazy'
                    src={ryan1x}
                    className='self-center sm:self-start lg:self-center rounded-full mb-6'
                    width='64'
                    height='64'
                  />
                  <p className='text-xl leading-2v font-semibold mb-8'>
                    &ldquo;This will seriously be a game changer. Get ready for
                    the best thing to come to your finances.&rdquo;
                  </p>
                  <p className='text-lg leading-v '>
                    <strong>Ryan Johnson</strong>
                  </p>
                  <p className='text-lg leading-v'>
                    Principal Product Design, Dribbble
                  </p>
                </article>
              </blockquote>
            </div>

            <section className='col-start-7 col-end-13 row-start-1 pt-12 sm:pt-6 z-10'>
              <article>
                {/* <p className='inline-block py-0.5  px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                  <span className='text-sm text-purple-600'>No boundaries</span>
                </p> */}
                <h2 className='sub-headings leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                  Easily swap money between all your accounts
                </h2>
                <p className='sub-para text-lg mb-6 -mt-1'>
                  We&rsquo;re big believers in paying yourself first. Set
                  automated transfers between accounts and banks to make your
                  pay work for you.
                </p>
                <p className='sub-para text-lg -mt-1.5 mb-10'>
                  Quickly create and cancel transfers to align with your
                  investment goals.
                </p>
                <ul className='flex justify-between items-center mb-4'>
                  <li>
                    <img
                      alt='Wells fargo logo'
                      loading='lazy'
                      width='50'
                      height='50'
                      src={wellsfargo}
                    />
                  </li>
                  <li>
                    <img
                      alt='Citi logo'
                      loading='lazy'
                      width='62'
                      height='40'
                      src={citi}
                    />
                  </li>
                  <li className='hidden lg:block'>
                    <img
                      alt='Capital One logo'
                      loading='lazy'
                      width='111'
                      height='40'
                      src={captialone}
                    />
                  </li>
                  <li className='block sm:hidden md:block'>
                    <img
                      alt='TD logo'
                      loading='lazy'
                      width='53'
                      height='48'
                      src={td}
                    />
                  </li>
                  <li>
                    <img
                      alt='Bank of America logo'
                      loading='lazy'
                      width='68'
                      height='68'
                      src={bankofamerica}
                    />
                  </li>
                  <li className='hidden xl:block'>
                    <img
                      alt='RBC logo'
                      loading='lazy'
                      width='50'
                      height='50'
                      src={rbc}
                    />
                  </li>
                </ul>
                <p className='text-right opacity-50'>+ many others</p>
              </article>
            </section>

            <section className='col-start-7 col-end-13 row-start-2 z-10'>
              <article className='pt-12 sm:pt-24 pb-4 sm:pb-28'>
                {/* <p className='inline-block py-0.5 px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                  <span className='text-sm text-purple-600'>Net worth</span>
                </p> */}
                <h2 className='sub-headings leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                  Grow your savings
                </h2>
                <p className='sub-para text-lg mb-6 -mt-1.5'>
                  Track your net worth over time and overview your current
                  portfolio.
                </p>
                <p className='sub-para text-lg -mt-1.5 mb-10'>
                  Better yet, view trendlines for specific accounts to better
                  inform future decisions.
                </p>
              </article>
            </section>

            <div className='hidden sm:block sm:bg-white col-start-5 col-end-13 row-start-1 row-end-3'></div>
            <div className='col-start-1 col-end-5 row-start-2 self-end justify-self-end'>
              <img
                alt='Illustration of woman holding a plant'
                loading='lazy'
                width='493'
                height='461'
                className='max-w-full h-auto sm:max-w-none sm:transform sm:translate-x-24 sm:translate-y-6'
                src={growing}
              />
            </div>
          </div>
        </div>

        {/* <section className='bg-white py-16 lg:pt-28'>
          <div className='sm:grid sm:grid-cols-10 sm:gap-12 md:gap-24 mx-auto max-w-screen-xl px-6 md:px-12'>
            <div className='col-span-6 lg:col-span-5 sm:pr-12'>
              <p className='inline-block py-0.5  px-3 rounded-full bg-purple-500 bg-opacity-25 mb-4'>
                <span className='text-sm text-purple-600'>
                  Personalized insights
                </span>
              </p>
              <h2 className='heading-2 leading-3v -mt-1.5 text-7xl font-body font-semibold mb-6 max-w-lg'>
                For colleges
              </h2>
              <p className='text-lg mb-6 -mt-1'>
                We help candidates showcase their skills and experience to employers as a way to get hired.
              </p>
              <p className='text-lg -mt-1.5'>
              Land an internship or entry-level job at cutting edge startups, 
              leading tech companies or anything in between. Your career starts here.
              </p>
            </div>
            <aside className='col-start-8 lg:col-start-6 col-end-11 mt-8 '>
              <div className='chart absolute right-0 rounded-lg overflow-hidden'>
                <img
                  alt='Monthly budget graphing showing a balance'
                  loading='lazy'
                  src={Asset}
                  className='dashboard2 max-w-none h-auto'
                  width='759'
                  height='400'
                />
              </div>
              <div className='chart-filler justify-self-stretch bg-transparent'></div>
            </aside>
          </div>
        </section> */}

        <div className='footer bg-white pb-6 sm:pb-12'>
          <div className='mx-auto max-w-screen-xl px-6 md:px-12'>
            <footer className='text-center sm:text-left sm:flex justify-between items-end pt-24'>
              <p className='mb-6 sm:mb-0 text-sm'>
                Copyright &copy; 2020 Earmark. All right reserved.
              </p>
              <a
                href=''
                className='inline-flex items-center hover:text-indigo-400'
              >
                <img alt='Twitter icon' src={twitter} width='16' height='14' />
                <span className='ml-2 text-sm'>Twitter</span>
              </a>
            </footer>
          </div>
        </div>


        </>
    );
}

export default Main;