
import Masonry from '@mui/lab/Masonry';
import WorkItem from './WorkItem';

export default function Works({ gallery }) {

    return (
        <>
            <section className="bg-red-100 flex justify-content items-center flex-col py-8">
                <div className="w-5/6">
                    <h2 className="">Works</h2>
                </div>
                <div className="w-full">
                    <img className="rounded-3xl p-2" alt="..." src="/mirror.png"></img>
                </div>
                <div className="w-5/6">
                    <Masonry columns={1} spacing={2}>
                        {gallery.map((item, index) => (
                            <div key={index}>
                                <WorkItem item={item}></WorkItem>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </section>
        </>
    )
}