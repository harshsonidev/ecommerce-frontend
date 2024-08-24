"use client";

import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-20">
        <Header />
        <div className="mt-20 flex item-center justify-center">
          <div className="w-full max-w-[330px]">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                  Login into your account
                </CardTitle>
                {/* <CardDescription>
                  Enter your email and password to login
                </CardDescription> */}
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your Email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Your Password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Login</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
