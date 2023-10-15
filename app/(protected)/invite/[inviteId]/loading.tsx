const InvitePageLoading = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="m-8 flex w-full flex-col items-center gap-4 rounded-md bg-base-300 p-8 drop-shadow-2xl sm:m-0 sm:w-[400px]">
        <span className="daisy-loading daisy-loading-spinner daisy-loading-lg"></span>
      </div>
    </div>
  );
};

export default InvitePageLoading;
