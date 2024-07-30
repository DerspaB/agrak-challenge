export const UserTableSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <article className="rounded-full w-[350px] lg:w-[600px] h-[40px] bg-slate-200 animate-pulse"></article>
      <article className="rounded-full w-[350px] lg:w-[600px] h-[40px] bg-slate-200 animate-pulse"></article>
      <article className="rounded-full w-[350px] lg:w-[600px] h-[40px] bg-slate-200 animate-pulse"></article>
      <article className="rounded-full w-[350px] lg:w-[600px] h-[40px] bg-slate-200 animate-pulse"></article>
      <article className="rounded-full w-[350px] lg:w-[600px] h-[40px] bg-slate-200 animate-pulse"></article>
    </div>
  );
};
