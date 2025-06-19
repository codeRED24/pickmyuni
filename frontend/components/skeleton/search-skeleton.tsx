import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export function SearchResultCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <div className="space-y-2">
          <div className="flex">
            <Skeleton className="h-4 w-12 mr-2" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex">
            <Skeleton className="h-4 w-16 mr-2" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex">
            <Skeleton className="h-4 w-10 mr-2" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SearchResultsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <SearchResultCardSkeleton key={index} />
      ))}
    </div>
  );
}
