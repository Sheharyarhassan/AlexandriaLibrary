export default function Home() {
  return (
    <div className={'bg-(--primary) relative min-h-[100vh] overflow-hidden'}>
      <img src={'/assets/Login/LoginBgTop.png'} alt="Book Image"
           className={'w-[509.56px] rotate-[0.02 deg] h-[416.84px] absolute top-0 opacity-[7%] right-0 shadow-[0px_10px_10px_0px_#00000040]'}/>
      <div className={'max-w-[548px] text-center mx-auto pb-[97px] relative z-10'}>
        <img className={'pt-[75px] pb-[36px] mx-auto sm:block hidden'} src={'/assets/Login/Logo.png'} alt={'Logo'}/>
        <img className={'pt-[56px] pb-[12px] mx-auto sm:hidden block'} src={'/assets/Login/Logo-Mobile.png'}
             alt={'Logo'}/>
        <h2
          className={'pb-[15px] font-semibold text-[1.875rem]  sm:text-[2.75rem] text-(--secondary) leading-[100%] tracking-normal text-center'}>Welcome
          back!</h2>
        <p
          className={'text-white px-[37.5px] pb-[34px] text-[16px] sm:text-[18px] leading-[100%] tracking-normal text-center'}>
          Join a Global Movement to Rebuild the Greatest Library in Human History
        </p>
        <div
          className={'text-start sm:mx-0 mx-[25px] sm:px-[36.5px] px-[20.5px] sm:py-[47.5px] pt-[43px] pb-[30px] bg-white rounded-[8px]'}>
          <label
            className={'font-(family-name:--dmsans) text-[16px] sm:text-[18px] font-semibold leading-[100%] tracking-normal'}>Email
            Address<span className={'text-(--danger)'}>*</span></label>
          <input className="mb-[8px] mt-[10px] w-full placeholder:font-poppins placeholder:font-medium
          placeholder:text-[13px] placeholder:text-(--muted) placeholder:leading-[100%] placeholder:tracking-normal
          !border-0 !outline-[1px] !outline-[var(--light)] rounded-[6px] px-[10px] py-[13px]" type="email"
                 placeholder="Enter your Email"/>

          <label
            className={'font-(family-name:--dmsans) text-[16px] sm:text-[18px] font-semibold leading-[100%] tracking-normal'}>Password<span
            className={'text-(--danger)'}>*</span></label>
          <input className="mb-[16px] mt-[10px] w-full placeholder:font-medium
          placeholder:text-[13px] placeholder:text-(--muted) placeholder:leading-[100%] placeholder:tracking-normal
          !border-0 !outline-[1px] !outline-[var(--light)] rounded-[6px] px-[10px] py-[13px]" type="password"
                 placeholder="Enter your password.."/>

          <div className="flex items-center pb-[33px]">
            <input className="!border-[1px] outline-black me-[6px]" type="checkbox"/>
            <label className="font-medium text-[12px] leading-[100%] tracking-normal">
              I agree to the <a className="underline" href="#">terms & policy</a>
            </label>
          </div>
          <button
            className={'mb-[15px] cursor-pointer rounded-[6px] px-[10px] py-[18px] border-(--secondary-800) border-[1px] bg-(--secondary) w-full font-semibold text-[16px] sm:text-[18px] leading-[100%] tracking-[0%}'}>
            Login
          </button>
          <div className={'sm:w-[33.9%] w-[50%] mx-auto text-(--muted)'}>
            <h4
              className="relative text-center text-[var(--muted)]
              before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[40%] before:h-px before:bg-[var(--muted)]
              after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-[40%] after:h-px after:bg-[var(--muted)]">
              OR
            </h4>
          </div>
          <div className={'flex sm:flex-row flex-col items-center justify-center gap-[20px] pt-[13px]'}>
            <button
              className={'sm:w-auto w-full px-[20px] py-[11px] flex justify-center items-center gap-[10px] rounded-[10px] outline-[1px] outline-(--light)'}>
              <img className={'w-[24px] h-[24px] my-auto sm:mx-auto'} src={'/assets/Login/icons8-google 1.png'}
                   alt={'Google Icon'}/>
              <span
                className={'font-(family-name:--poppins) font-medium text-[14px] sm:text-[15px] leading-[100%] tracking-normal'}>
                Sign in with Google
              </span>
            </button>
            <button
              className={'sm:w-auto w-full px-[16px] py-[11px] flex justify-center items-center gap-[10px] rounded-[10px] outline-[1px] outline-(--light)'}>
              <img className={'ms-[4px] sm:w-[24px] sm:h-[24px] w-[15px] h-[15px] my-auto sm:mx-auto'}
                   src={'/assets/Login/Rectangle.png'}
                   alt={'Microsoft Icon'}/>
              <span
                className={'font-(family-name:--poppins) font-medium text-[14px] sm:text-[15px] leading-[30px] sm:leading-[100%] tracking-normal'}>
                Sign in with Microsoft
              </span>
            </button>
          </div>
          <h6 className={'text-center pt-[22px] font-medium leading-[100%] tracking-normal text-[14px] sm:text-[17px]'}>
            Don&apos;t Have an account?
            <a href={'/signup'} className={'text-(--primary) font-bold text-[14px] sm:text-[18px]'}>
              Sign up
            </a>
          </h6>
        </div>
      </div>
      <img src={'/assets/Login/LoginBgBottom.png'} alt="Book Image"
           className={'w-[953.94] rotate-[0.02 deg] h-[865.92] absolute -bottom-[313.28px] -left-[149px] opacity-[7%] shadow-[0px_10px_10px_0px_#00000040]'}/>
    </div>
  );
}
