import Image from "next/image";

export default function MyPetPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-gray-200 font-mono p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">About Jhamru</h2>
        <div className="flex flex-col-reverse md:flex-row items-center mb-6 gap-6">
          <div className="">
            <h1 className="text-xl font-bold mb-2">Meet My e-Pet Dog: Jhamru</h1>
            <p className="mb-2 text-lg">
              The name &quot;Jhamru&quot; comes from my late, beloved dog.
            </p>
            <p className="mb-4 text-lg">
              Jhamru is a lively and spirited dog who delights in chasing the
              mouse cursor. Once he catches up to it, he often gets tired and
              takes a nap right there.
            </p>
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-lg border-4 border-gray-200 dark:border-[#7e7567] shrink-0 mt-6 md:mt-0">
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <Image
                src="/jhamru.png" // Replace with the actual image path
                alt="Jhamru"
                className="object-cover"
                height={288}
                width={288}
              />
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-2">Fun Facts about Jhamru</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Jhamru loves to sleep a lot.</li>
          <li>Jhamru doesn&apos;t eat.</li>
          <li>Chase → Catch → Sleep → Repeat <span className="repeat-icon">↻</span></li>
        </ul>
        <h2 className="text-xl font-bold mb-2">Mouse Animation</h2>
        <p className="mb-4">
          Watch Jhamru interact with the mouse cursor! Move your mouse around to
          see him follow it.
        </p>
      <div className="mt-6 md:mt-20 bg-gray-100 dark:bg-gray-800 rounded-lg flex justify-center items-center">
        <p className="text-lg italic px-2 text-center">
          This page is dedicated to my late, beloved dog Jhamru, who passed away in 2020. I miss him a lot.
        </p>
      </div>
      </div>
    </main>
  );
}
