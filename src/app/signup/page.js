import React from 'react';

const Page = () => {
  return (
    <div style={{backgroundColor: '#F4F1ED'}}>
      <div className={'background-gradient block md:flex'}>

        <div className={'md:w-1/2 w-full'}>
          <div
            className={'max-w-[421px] text-center mx-auto 2xl:pb-[70px] md:pb-[92px] pb-[64px] relative z-10'}
          >
            <img className={'md:pt-[39px] md:pb-[42.35px] pt-[30px] pb-[13px] mx-auto'}
                 src={'/assets/Signup/SignUpLogo.png'}
                 alt={'Logo'}/>
            <h2
              className={'mb-[7px] padding-x md:px-0 font-bold text-[1.875rem] sm:text-[2.8125rem] text-(--primary) leading-[40px] md:leading-[60px] tracking-normal text-center'}>
              <span className={'md:inline-block hidden'}>Welcome back!</span>
              <span className={'inline-block md:hidden'}>the Lost Library of Alexandria</span>
            </h2>
            <p
              className={'text-black px-[18px] padding-x pb-[30px] md:pb-[24px] text-[16px] sm:text-[20px] leading-[30px] tracking-normal text-center'}>
              <span className={'md:inline-block hidden'}>Join a Global Movement to Rebuild the Greatest Library in Human History</span>
              <span className={'inline-block md:hidden'}>Sign up today to <span className={'font-bold'}>get 10 free downloads.</span></span>
            </p>
            <div
              className={'flex flex-col text-start rounded-[8px]'}
              style={{backdropFilter: 'blur(45px)'}}>
              <div
                className={'order-3 md:order-1 border-[1px] rounded-[9px] border-white border-solid px-[22px] md:px-[25.5px] pt-[20px] pb-[13px]'}>
                <div className="relative w-full">
                  <input className="font-(family-name:--inter) bg-white mb-[8px] mt-[10px] w-full placeholder:font-normal
                placeholder:text-[13px] placeholder:text-(--muted) placeholder:leading-[100%] placeholder:tracking-normal
                !border-0 !outline-0 rounded-[9px] px-[10px] py-[13px]" type="text"
                         placeholder="Full Name"/>
                  <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_267_3612" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="10"
                            width="16" height="9">
                        <path d="M0 10.4414H15.1485V18.9999H0V10.4414Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_267_3612)">
                        <path
                          d="M8.9944 10.4497H6.15406C5.95214 10.4497 5.75155 10.4604 5.55096 10.4805C5.35037 10.5005 5.15112 10.5299 4.95321 10.5701C4.75663 10.6088 4.56139 10.6583 4.36749 10.7172C4.17492 10.776 3.98637 10.8442 3.79915 10.9218C3.61327 10.9993 3.4314 11.0862 3.25355 11.1812C3.07703 11.2761 2.90453 11.3804 2.73603 11.4928C2.56887 11.6051 2.40707 11.7255 2.25194 11.8538C2.09548 11.9822 1.94705 12.1173 1.80396 12.2604C1.66221 12.4034 1.52715 12.5532 1.39877 12.7097C1.2704 12.8648 1.15138 13.0279 1.03905 13.1951C0.92672 13.3636 0.823751 13.5361 0.728806 13.7153C0.63386 13.8931 0.546939 14.075 0.469378 14.2622C0.393154 14.4494 0.324954 14.6393 0.266114 14.8319C0.207275 15.0258 0.159134 15.221 0.119016 15.4203C0.0802356 15.6182 0.0494786 15.8175 0.0294197 16.0194C0.00936072 16.22 0 16.4219 0 16.6238V18.5241C0 18.5869 0.0120352 18.6471 0.036106 18.7046C0.0601765 18.7634 0.0936082 18.8143 0.137738 18.8597C0.183205 18.9039 0.23402 18.9386 0.291522 18.9627C0.350362 18.9868 0.410539 18.9988 0.473389 18.9988H14.6751C14.7379 18.9988 14.7981 18.9868 14.8556 18.9627C14.9144 18.9386 14.9653 18.9039 15.0094 18.8597C15.0535 18.8143 15.0883 18.7634 15.1124 18.7046C15.1364 18.6471 15.1485 18.5869 15.1485 18.5241V16.6238C15.1485 16.4219 15.1378 16.22 15.1177 16.0194C15.0976 15.8175 15.0682 15.6182 15.0281 15.4203C14.9893 15.221 14.9399 15.0258 14.881 14.8319C14.8235 14.6393 14.7553 14.4494 14.6777 14.2622C14.6002 14.075 14.5146 13.8931 14.4197 13.7153C14.3247 13.5361 14.2204 13.3636 14.1094 13.1951C13.9971 13.0279 13.8767 12.8648 13.7497 12.7097C13.6213 12.5532 13.4863 12.4034 13.3432 12.2604C13.2014 12.1173 13.0516 11.9822 12.8965 11.8538C12.7401 11.7255 12.5796 11.6051 12.4111 11.4928C12.2439 11.3804 12.0714 11.2761 11.8936 11.1812C11.7157 11.0862 11.5339 10.9993 11.348 10.9218C11.1621 10.8442 10.9722 10.776 10.7796 10.7172C10.5871 10.6583 10.3918 10.6088 10.1939 10.5701C9.99601 10.5299 9.79809 10.5005 9.5975 10.4805C9.39691 10.4604 9.19499 10.4497 8.9944 10.4497ZM14.2017 18.048H0.946779V16.6238C0.946779 16.2815 0.980211 15.9418 1.04707 15.6048C1.11527 15.2692 1.21423 14.9429 1.34394 14.626C1.475 14.309 1.63547 14.0082 1.82669 13.7233C2.01659 13.4385 2.23188 13.1737 2.47393 12.9317C2.71463 12.6896 2.97807 12.473 3.26291 12.2818C3.54641 12.0919 3.84596 11.9301 4.16155 11.799C4.47714 11.6679 4.80343 11.569 5.13775 11.5008C5.4734 11.4339 5.81173 11.4005 6.15406 11.3992H8.9944C9.3354 11.4005 9.67373 11.4339 10.0094 11.5008C10.345 11.569 10.67 11.6679 10.9856 11.799C11.3012 11.9301 11.6021 12.0919 11.8856 12.2818C12.1691 12.473 12.4325 12.6896 12.6745 12.9317C12.9166 13.1737 13.1319 13.4385 13.3218 13.7233C13.5117 14.0082 13.6721 14.309 13.8032 14.626C13.9342 14.9429 14.0332 15.2692 14.1001 15.6048C14.1669 15.9418 14.2003 16.2815 14.2017 16.6238V18.048Z"
                          fill="#999999"/>
                      </g>
                      <mask id="mask1_267_3612" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="2" y="0"
                            width="11" height="10">
                        <path d="M2.521 0H12.4488V9.75664H2.521V0Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask1_267_3612)">
                        <path
                          d="M7.57423 9.50001C7.88447 9.50001 8.19204 9.46925 8.49693 9.40908C8.80183 9.34756 9.0987 9.25797 9.38487 9.13761C9.67239 9.0186 9.94519 8.87284 10.2033 8.69899C10.4627 8.52649 10.7021 8.32991 10.9214 8.10926C11.1407 7.88861 11.3373 7.64791 11.5098 7.38848C11.6823 7.13039 11.828 6.85625 11.9471 6.5674C12.0661 6.27989 12.1557 5.98302 12.2172 5.67679C12.2774 5.37189 12.3081 5.06299 12.3081 4.75007C12.3081 4.43849 12.2774 4.12958 12.2172 3.82469C12.1557 3.51845 12.0661 3.22158 11.9471 2.93274C11.828 2.64522 11.6823 2.37109 11.5098 2.11166C11.3373 1.85223 11.1407 1.61286 10.9214 1.39221C10.7021 1.17157 10.4627 0.974989 10.2033 0.801145C9.94519 0.628639 9.67239 0.482878 9.38487 0.362525C9.0987 0.243509 8.80183 0.153912 8.49693 0.0923984C8.19204 0.0322219 7.88447 0.00146484 7.57423 0.00146484C7.26265 0.00146484 6.95508 0.0322219 6.65018 0.0923984C6.34529 0.153912 6.04975 0.243509 5.76224 0.362525C5.47473 0.482878 5.20193 0.628639 4.94384 0.801145C4.68575 0.974989 4.44638 1.17157 4.22707 1.39221C4.00642 1.61286 3.81118 1.85223 3.63734 2.11166C3.46483 2.37109 3.31907 2.64522 3.20005 2.93274C3.08104 3.22158 2.99144 3.51845 2.93127 3.82469C2.86975 4.12958 2.84033 4.43849 2.84033 4.75007C2.84033 5.06299 2.87109 5.37056 2.93127 5.67679C2.99278 5.98302 3.08238 6.27989 3.20139 6.5674C3.32041 6.85491 3.46751 7.12905 3.64001 7.38714C3.81252 7.64657 4.0091 7.88728 4.22841 8.10659C4.44772 8.32724 4.68709 8.52381 4.94518 8.69766C5.20327 8.8715 5.47607 9.01726 5.76358 9.13628C6.04975 9.25663 6.34662 9.34623 6.65018 9.40774C6.95508 9.46925 7.26265 9.50001 7.57423 9.50001ZM7.57423 0.950918C7.82296 0.950918 8.06901 0.974989 8.31239 1.02447C8.55711 1.07261 8.79381 1.14482 9.02381 1.2411C9.25249 1.33605 9.4718 1.45239 9.67773 1.59146C9.88501 1.73054 10.0762 1.887 10.2514 2.06352C10.4279 2.24004 10.5844 2.4326 10.7221 2.63988C10.8612 2.84715 10.9775 3.06646 11.0725 3.29647C11.1674 3.52648 11.2397 3.76451 11.2878 4.00923C11.3373 4.25395 11.3613 4.50134 11.3613 4.75007C11.3613 5.00014 11.3373 5.24753 11.2878 5.49225C11.2397 5.73697 11.1674 5.97366 11.0725 6.20501C10.9775 6.43501 10.8612 6.65433 10.7221 6.8616C10.5844 7.06888 10.4279 7.2601 10.2514 7.43662C10.0762 7.61314 9.88501 7.77094 9.67773 7.91001C9.4718 8.04775 9.25249 8.16543 9.02381 8.26037C8.79381 8.35666 8.55711 8.42887 8.31239 8.47701C8.06901 8.52515 7.82296 8.55056 7.57423 8.55056C7.3255 8.55056 7.07944 8.52515 6.83472 8.47701C6.59134 8.42887 6.35465 8.35666 6.12464 8.26037C5.89463 8.16543 5.67666 8.04775 5.46938 7.91001C5.26344 7.77094 5.07222 7.61314 4.8957 7.43662C4.72052 7.2601 4.56272 7.06888 4.42498 6.8616C4.28725 6.65433 4.1709 6.43501 4.07462 6.20501C3.97968 5.97366 3.90746 5.73697 3.85932 5.49225C3.81118 5.24753 3.78711 5.00014 3.78711 4.75007C3.78711 4.50134 3.81118 4.25395 3.86066 4.00923C3.9088 3.76451 3.98101 3.52782 4.07596 3.29781C4.1709 3.06646 4.28858 2.84849 4.42632 2.64121C4.56406 2.43394 4.72185 2.24137 4.89704 2.06485C5.07355 1.88834 5.26478 1.73188 5.47072 1.5928C5.67799 1.45373 5.89597 1.33739 6.12464 1.2411C6.35465 1.14616 6.59134 1.07395 6.83472 1.02447C7.07944 0.976326 7.3255 0.950918 7.57423 0.950918Z"
                          fill="#999999"/>
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="relative w-full">
                  <input className="font-(family-name:--inter) bg-white mb-[8px] mt-[10px] w-full placeholder:font-normal
                placeholder:text-[13px] placeholder:text-(--muted) placeholder:leading-[100%] placeholder:tracking-normal
                !border-0 !outline-0 rounded-[9px] px-[10px] py-[13px]" type="email"
                         placeholder="Email address"/>
                  <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_267_3623" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="-1" y="0"
                            width="21" height="14">
                        <path d="M-0.00012207 0H19.4864V14H-0.00012207V0Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_267_3623)">
                        <path
                          d="M2.06705 13.3644C1.78327 13.3644 1.51328 13.2826 1.28073 13.1299L6.8362 7.42171L8.6266 9.24758C8.92122 9.5491 9.31438 9.71464 9.73513 9.71464C10.1549 9.71464 10.549 9.5491 10.8437 9.24857L12.638 7.42072L18.2043 13.1309C17.9727 13.2826 17.7028 13.3644 17.419 13.3644H2.06705ZM0.842248 12.6825C0.700356 12.4559 0.624483 12.1918 0.624483 11.9169V2.07711C0.624483 1.80023 0.701341 1.53615 0.844219 1.30853L6.39771 6.97435L0.842248 12.6825ZM2.06705 0.630604H17.419C17.7008 0.630604 17.9708 0.711404 18.2013 0.861179L12.4163 6.75363L10.3973 8.8091C10.2219 8.98843 9.98639 9.08697 9.73513 9.08697C9.48386 9.08697 9.24836 8.98843 9.07198 8.80811L7.0579 6.75363L1.28369 0.862164C1.51525 0.711404 1.78524 0.630604 2.06705 0.630604ZM13.0765 6.97435L18.6408 1.30656C18.7847 1.53517 18.8625 1.80023 18.8625 2.07711V11.9169C18.8625 12.1928 18.7857 12.4559 18.6428 12.6835L13.0765 6.97435ZM18.8862 0.615824C18.8862 0.615824 18.8862 0.615824 18.8852 0.615824V0.614838C18.495 0.220694 17.9737 0.00292969 17.419 0.00292969H2.06705C1.51229 0.00292969 0.991037 0.220694 0.599849 0.616809H0.598864C0.212603 1.00701 -0.0012207 1.52531 -0.0012207 2.07711V11.9169C-0.0012207 12.4677 0.211617 12.986 0.597878 13.3762C0.598864 13.3772 0.599849 13.3782 0.600835 13.3792C0.600835 13.3792 0.600835 13.3792 0.600835 13.3802H0.60182C0.993008 13.7743 1.51328 13.9911 2.06705 13.9911H17.419C17.9737 13.9911 18.494 13.7743 18.8842 13.3802C18.8842 13.3802 18.8842 13.3802 18.8852 13.3802C18.8862 13.3792 18.8872 13.3782 18.8881 13.3772C19.2744 12.986 19.4872 12.4677 19.4872 11.9169V2.07711C19.4872 1.52531 19.2734 1.00701 18.8862 0.615824Z"
                          fill="#999999"/>
                      </g>
                    </svg>

                  </button>
                </div>
                <div className="relative w-full">
                  <input className="font-(family-name:--inter) bg-white mb-[16px] mt-[10px] w-full placeholder:font-normal
                placeholder:text-[13px] placeholder:text-(--muted) placeholder:leading-[100%] placeholder:tracking-normal
                !border-0 !outline-0 rounded-[6px] px-[10px] py-[13px]" type="password"
                         placeholder="Password*"/>
                  <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_267_3628" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0"
                            width="21" height="11">
                        <path d="M0 0H20.4866V10.5278H0V0Z" fill="white"/>
                      </mask>
                      <g mask="url(#mask0_267_3628)">
                        <path
                          d="M10.2935 10.1567C5.48606 10.1567 1.35065 6.07837 0.589663 5.28404C1.35065 4.48971 5.48606 0.4121 10.2935 0.4121C15.101 0.4121 19.2364 4.48971 19.9967 5.28404C19.2364 6.07837 15.101 10.1567 10.2935 10.1567ZM20.4613 5.24699C20.4598 5.2344 20.4583 5.2218 20.4538 5.2092C20.4472 5.19661 20.4398 5.18697 20.4331 5.1766C20.4286 5.16845 20.4257 5.15733 20.4175 5.15141C20.3723 5.09954 15.7738 0.0112305 10.2935 0.0112305C4.81251 0.0112305 0.213986 5.09954 0.168786 5.15141C0.161376 5.15733 0.157671 5.16845 0.153226 5.1766C0.147298 5.18697 0.137665 5.19661 0.133219 5.2092C0.128032 5.2218 0.126551 5.2344 0.125068 5.24699C0.122105 5.25885 0.119141 5.27145 0.119141 5.28404C0.119141 5.29664 0.122105 5.30924 0.125068 5.32183C0.126551 5.33443 0.128032 5.34703 0.133219 5.35888C0.137665 5.37148 0.147298 5.38111 0.153226 5.39222C0.157671 5.39963 0.161376 5.41075 0.168786 5.41742C0.213986 5.46855 4.81251 10.5569 10.2935 10.5569C15.7738 10.5569 20.3723 5.46855 20.4175 5.41742C20.4257 5.41075 20.4286 5.39963 20.4331 5.39222C20.4398 5.38111 20.4472 5.37148 20.4538 5.35888C20.4583 5.34703 20.4598 5.33443 20.4613 5.32183C20.465 5.30924 20.4679 5.29664 20.4679 5.28404C20.4679 5.27145 20.465 5.25885 20.4613 5.24699Z"
                          fill="#999999"/>
                      </g>
                      <path
                        d="M10.2934 8.41333C8.57363 8.41333 7.17392 7.00917 7.17392 5.28417C7.17392 3.55991 8.57363 2.15575 10.2934 2.15575C12.0125 2.15575 13.4122 3.55991 13.4122 5.28417C13.4122 7.00917 12.0125 8.41333 10.2934 8.41333ZM10.2934 1.75488C8.3543 1.75488 6.77527 3.3391 6.77527 5.28417C6.77527 7.22924 8.3543 8.81346 10.2934 8.81346C12.2326 8.81346 13.8116 7.22924 13.8116 5.28417C13.8116 3.3391 12.2326 1.75488 10.2934 1.75488Z"
                        fill="#999999"/>
                    </svg>
                  </button>
                </div>
                <button
                  className={'text-white mt-[24px] mb-[19px] cursor-pointer rounded-[9px] px-[10px] py-[18px] bg-(--primary) w-full font-bold text-[16px] sm:text-[18px] leading-[100%] tracking-[0%}'}
                  style={{boxShadow: '0px 4px 14px 0px #00144F66'}}
                >
                  Sign up <span className={'md:hidden inline-block'}>today</span>
                </button>
                <div className="flex md:justify-start justify-center items-center">
                  <input
                    className="md:block hidden w-[20px] h-[19px] !border-[1px] !border-(--muted) rounded-[2px] me-[6px]"
                    type="checkbox"/>
                  <h6 className="font-normal text-[14px] leading-[100%] text-center tracking-normal text-(--muted)">
                    By registering you agree to our <a className="underline text-(--primary)" href="#">terms of use.</a>
                  </h6>
                </div>
              </div>
              <div className={'sm:w-[33.9%] w-[50%] mx-auto text-(--muted) md:py-[35px] pt-[17px] pb-[20px] order-2'}>
                <h4
                  className="relative text-center text-[var(--muted)]
              before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[40%] before:h-px before:bg-[var(--muted)]
              after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-[40%] after:h-px after:bg-[var(--muted)]">
                  OR
                </h4>
              </div>
              <div
                className={'rounded-[9px] w-full mx-auto flexbutton flex items-center justify-center border-[1px] border-white gap-[12px] py-[13.5px] md:mb-[51px] order-1 md:order-3'}>
                <button
                  className={'bg-white fullwidth md:w-auto w-[191px] md:px-[12px] px-[14px] py-[9px] flex justify-center items-center gap-[14.7px] rounded-[10px] outline-0'}>
                  <img className={'w-[14.3px] h-[14.3px] my-auto md:mx-auto'} src={'/assets/Login/icons8-google 1.png'}
                       alt={'Google Icon'}/>
                  <span
                    className={'font-bold text-(--primary) text-[14px] leading-[30px] tracking-normal'}>
                Signup with Google
              </span>
                </button>
                <button
                  className={'bg-white fullwidth md:w-auto w-[191px] md:px-[12px] ps-[9px] pe-[7px] py-[9px] flex justify-center gap-[9px] items-center rounded-[10px] outline-0'}>
                  <img className={'w-[14.3px] h-[14.3px] my-auto md:mx-auto'} src={'/assets/Login/Rectangle.png'}
                       alt={'Google Icon'}/>
                  <span
                    className={'font-bold text-(--primary) text-[14px] leading-[30px] tracking-normal'}>
                Signup with Microsoft
              </span>
                </button>
              </div>
              <h6
                className={'order-4 md:mt-0 mt-[18px] text-(--primary) text-center font-bold leading-[30px] tracking-normal text-[16px]'}>
                Do you have an account? <a href={'/'}
                                           className={'text-(--secondary) font-bold text-[16px]'}>Login</a>
              </h6>
            </div>
          </div>
        </div>
        <div className={'md:w-1/2 w-full'}>
          <div
            className={'flex flex-col justify-end w-full h-full md:bg-[url(/assets/Signup/signup.png)] md:bg-cover md:bg-center md:bg-no-repeat'}>
            <div
              className={'text-center md:text-white xl:px-[168.5px] md:px-[40px] px-[16px] md:pb-[156px] pb-[43px]'}>
              <img className={'mx-auto'} src={'/assets/Signup/avatar.png'} alt={'Avatar'}/>
              <h6 className={'font-bold text-[18px] leading-[25px] tracking-normal mb-[7px]'}>Samantha Green</h6>
              <img className={'mx-auto mb-[11.64px]'} src={'/assets/Signup/reviews.png'} alt={'Reviews'}/>
              <h6 className={'font-medium text-[14px] leading-[22px] tracking-normal mb-[12px] md:px-0 px-[9.5px]'}>
                This library truly exceeded my expectations.
                It began with a free digital copy of The Odyssey, and soon
                I found myself listening to audiobook after audiobook on my daily runs.
                It’s inspiring knowing my involvement helps make these books accessible worldwide.”
              </h6>
              <div className={'mx-auto px-3 md:bg-[rgba(255,255,255,0.8)] w-fit'}>
                <img className={'md:mb-[11.6px] mb-[17.6px]'} src={'/assets/Signup/Frame.png'} alt={'Trustpilot'}/>
              </div>
              <div className={'flex justify-center items-center gap-[7px]'}>
                <img src={'/assets/Signup/Frame 217.png'} alt={'users'}/>
                <h6 className={'font-normal text-[14px] leading-[22px] tracking-normal mb-[7px]'}>
                  Supporting over <span className={'font-bold'}>3,000,000 </span>users worldwide
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;