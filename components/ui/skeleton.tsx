import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800",
        className
      )}
      {...props}
    />
  );
}

function DashboardSkeleton({}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="animate-pulse flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
        <div className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
        <div className="aspect-video rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-neutral-100/50 md:min-h-min dark:bg-neutral-800/50" />
    </div>
  );
}

export { Skeleton, DashboardSkeleton };
