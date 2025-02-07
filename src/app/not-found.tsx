import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container text-center grid gap-8">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl">Page not found</p>
      <Button>
        <Link href="/">
          Go back to home
        </Link>
      </Button>
    </div>
  );
};

export default page;
