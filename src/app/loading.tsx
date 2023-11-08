import Image from "next/image";
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Skeleton>
      <main className="flex flex-wrap p-10">
        <div className="flex flex-wrap justify-center items-center gap-5">
          <Card isPressable>
            <CardBody className="overflow-visible p-0">
              <Image src={""} width={200} height={200} alt="" />
            </CardBody>

            <CardFooter className="text-slate-800">
              <b></b>
            </CardFooter>
          </Card>
        </div>
      </main>
    </Skeleton>
  );
}
