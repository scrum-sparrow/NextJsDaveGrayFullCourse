import Link from 'next/link';
// types
import type { Metadata } from 'next';
// lib
import getAllUsers from '@/lib/getAllUsers';

export const metadata: Metadata = {
    title: 'Users',
}

const UsersPage = async () => {
    const usersData: Promise<User[]> = getAllUsers();

    const users = await usersData;
    
    console.log('Hello')

    const content = (
        <section>
            <h2>
                <Link href={'/'}>Back to Home</Link>
            </h2>
            <br />
            {
                users.map((user) => {
                    return (
                        <>
                            <p key={user.id}>
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                            <br />
                        </>
                    )
                })
            }
        </section>
    )

    return content;
}
export default UsersPage