import { Illustration, NotFound } from "@/components/ui/not-found";

export default function Page() {
  return (
    <div className="relative flex flex-col w-full justify-center min-h-svh bg-background p-6 md:p-10">
      <div className="relative max-w-5xl mx-auto w-full">
        <Illustration className="absolute inset-0 w-full h-[50vh] opacity-[0.04] dark:opacity-[0.03] text-foreground" />
        <NotFound
          title="Page not found"
          description="Page may have been moved or deleted or you may have mistyped the address."
        />
      </div>
    </div>
  );
}
