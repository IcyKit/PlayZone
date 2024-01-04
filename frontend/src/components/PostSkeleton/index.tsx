import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

const Index = () => {
  return (
    <Card className="sm:w-[320px] md:w-[640px] space-y-5 p-4 bg-[#232324] rounded-2xl mb-[25px]">
      <div className={"flex items-center"}>
        <Skeleton className="w-[40px] h-[40px] mr-3 rounded-full">
          <div className="h-2 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="h-[15px] w-[150px] rounded-lg">
          <div className="h-[10px] w-1 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>
      <Skeleton className="w-3/5 rounded-lg">
        <div className="h-7 w-3/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};

export default Index;
