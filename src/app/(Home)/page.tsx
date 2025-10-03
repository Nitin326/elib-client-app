import { Suspense } from "react";
import Banner from "./component/Banner";
import BookList from "./component/BookList";
import Loading from "@/components/Loading";

export default async function Home() {

  return (
    <>
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </>
  );
}
