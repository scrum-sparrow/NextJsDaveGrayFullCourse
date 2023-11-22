import { NextResponse } from "next/server";

const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite.com', 'https://yoursite.com']
    : ['http://localhost:3000'];

export function middleware(request: Request) {
    // These are alternatives to config const
        // if (request.url.includes("/api/")) {
        // }
    // OR
        // const regex = new RegExp('/api/*')
        // if (regex.test(request.url)) {
        // }

    const origin = request.headers.get("origin");
    console.log(origin);

    if(origin && !allowedOrigins.includes(origin)) {
    // The problem here is that tools we are using (thunder client, Postman, etc.) will not have an origin at all
    // But in production if you want to block the REST API without origin, you have to add "|| !origin"
    // if(origin && !allowedOrigins.includes(origin) || !origin) {
        return new NextResponse(null, {
            status: 400,
            statusText: 'Bad Request',
            headers: {
                'Content-Type': 'text/plain',
            }
        })
    }

    console.log(middleware);
    console.log(request.method);
    console.log(request.url);

    return NextResponse.next();
}

export const config = {
    matcher: "/api/:path*",
};
