import React from "react";
import { useUniversityTabs } from "@/hooks/useUniversityTabs";

interface UniversitytabsProps {
  tab: string;
  id: string;
}

function Universitytabs({ tab, id }: UniversitytabsProps) {
  const { info, loading, error } = useUniversityTabs(tab, Number(id));

  if (error)
    return (
      <div className="text-red-600 p-4 bg-red-50 rounded-lg">
        Error: {error}
      </div>
    );
  if (loading)
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  if (!info || info.length === 0)
    return (
      <div className="text-gray-500 p-4 bg-gray-50 rounded-lg">
        No {tab} information found for this university
      </div>
    );

  return (
    <div className="space-y-6">
      {info.map((item, index) => (
        <div key={index} className="p-6">
          {item?.content && (
            <div
              className="prose max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Universitytabs;
