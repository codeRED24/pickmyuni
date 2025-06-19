import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="bg-blue-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center py-16">
          <div className="z-10">
            <Skeleton className="h-12 w-5/6 mb-4 bg-white/20" />
            <Skeleton className="h-12 w-4/5 mb-4 bg-white/20" />
            <Skeleton className="h-6 w-3/4 mb-2 bg-white/20" />
            <Skeleton className="h-6 w-2/3 mb-6 bg-white/20" />
            <Skeleton className="h-12 w-48 bg-orange-500/80" />
          </div>
          <div className="relative">
            <Skeleton className="h-64 w-full bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function MainPageSkeleton() {
  return (
    <main className="min-h-screen">
      <HeroSkeleton />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-32" />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
