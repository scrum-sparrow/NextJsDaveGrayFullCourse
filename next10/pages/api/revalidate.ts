//  https://<your-site.com>/api/revalidate?secrete=<token>
//  http://localhost:3000/api/revalidate?path=/&secret=${secret}

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    const secret = process.env.MY_SECRET_TOKEN;

    if (request.query.secret !== secret)
        return response.status(401).json({ message: "Invalid token !" });

    const path = request.query.path as string;

    await response.revalidate(path);

    return response.json({ revalidated: true })

}
