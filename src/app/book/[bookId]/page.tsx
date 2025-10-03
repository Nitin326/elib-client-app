import { Book } from '@/types';
import DownloadButton from '../components/DownloadButton'
import Image from 'next/image'

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {

    let book: Book | null = null;

    try {
        book  = {
            _id: "1",
            title: "The Lost Horizon",
            description: "An adventurous tale set in the hidden valleys of the Himalayas.",
            author: {
                id: "a1",
                name: "James Hilton"
            },
            coverImage: "https://dummyimage.com/300x400/000/fff&text=Lost+Horizon",
            file: "https://example.com/files/lost_horizon.pdf",
            genre: "Adventure"
        }

    } catch (err: any) {
        throw new Error('Error in fetching book');
    }

    if (!book) {
        throw new Error('Book not found');
    }

    return (
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
            <div className="col-span-2 pr-16 text-primary-950">
                <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
                <span className="font-semibold">by {book.author.name}</span>
                <p className="mt-5 text-lg leading-8">{book.description}</p>
                <DownloadButton fileLink={book.file} />
            </div>
            <div className="flex justify-end">
                <Image
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-md border"
                    height={0}
                    width={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
        </div>
    )
}

export default SingleBookPage;