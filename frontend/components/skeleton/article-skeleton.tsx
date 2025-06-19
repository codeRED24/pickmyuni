import { Skeleton } from "@/components/ui/skeleton";

export function ArticleCardSkeleton() {
  return (
    <div className="bg-[#F6F6F7] rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48">
        <Skeleton className="w-full h-full rounded-none" />
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs mb-2">
          <Skeleton className="h-3 w-16 mr-2" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-5 w-full mb-3" />
        <Skeleton className="h-5 w-3/4 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}

export function ArticlesLoadingSkeleton() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-blue-800">Recent</span>{" "}
          <span className="text-orange-500">Articles</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <ArticleCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
