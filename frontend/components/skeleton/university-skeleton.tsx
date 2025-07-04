import { Skeleton } from "@/components/ui/skeleton";

export function UniversityCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="rounded-full mr-4">
            <Skeleton className="w-[60px] h-[60px] rounded-full" />
          </div>
          <div className="flex-1">
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-sm overflow-hidden bg-gray-50 mb-2">
          <div className="p-2 flex-1">
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="p-2">
            <Skeleton className="h-4 w-20" />
          </div>
        </div>

        <div className="flex flex-col text-sm space-y-2">
          <div className="grid grid-cols-[100px_1fr] gap-1">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-16" />

            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-24" />

            <Skeleton className="h-3 w-14" />
            <Skeleton className="h-3 w-12" />
          </div>
        </div>
      </div>
      <Skeleton className="h-10 w-full rounded-none" />
    </div>
  );
}

export function UniversitiesLoadingSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array.from({ length: 6 }).map((_, index) => (
        <UniversityCardSkeleton key={index} />
      ))}
    </div>
  );
}
