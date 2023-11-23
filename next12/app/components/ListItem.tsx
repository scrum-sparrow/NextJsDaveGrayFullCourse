import Link from "next/link";
// libs
import getFormattedDate from "@/lib/getFormattedDate";

type Props = {
    post: Meta;
};

export default function ListItem({ post }: Props) {
    const { id, title, date } = post;
    const formatedDate = getFormattedDate(date);
    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link
                className="underline hover:text-black/70 dark:hover:text-white"
                href={`/posts/${id}`}
            >
                {title}
            </Link>
            <br />
            <p className="text-sm mt-1">{formatedDate}</p>
        </li>
    );
}
