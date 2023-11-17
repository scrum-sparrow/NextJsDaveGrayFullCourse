import { NextResponse } from "next/server";

export function middleware(request: Request) {
    // These are alternatives to config const
        // if (request.url.includes("/api/")) {
        // }
    // OR
        // const regex = new RegExp('/api/*')
        // if (regex.test(request.url)) {
        // }

    console.log(middleware);
    console.log(request.method);
    console.log(request.url);

    const origin = request.headers.get("origin");
    console.log(origin);

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
