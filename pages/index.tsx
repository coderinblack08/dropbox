import { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import {
  IconBolt,
  IconChevronRight,
  IconCornerLeftUp,
  IconStar,
  IconUpload,
} from "tabler-icons";
import { useDropzone } from "react-dropzone";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Divider } from "../components/Divider";
import { formatDate } from "../lib/formatDate";
import { urlToFile } from "../lib/urlToFile";
import { useDimensions } from "../lib/useDimensions";

import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";

const LandingPage: NextPage = () => {
  const { setBoxRef: setHeaderRef, dimensions: headerDimensions } =
    useDimensions<HTMLDivElement>();
  const { setBoxRef: setExampleRef, dimensions: exampleDimensions } =
    useDimensions<HTMLElement>();

  const [files, setFiles] = useState<File[]>([]);

  const initialState = async () => {
    setFiles(
      await Promise.all([
        urlToFile("/cute-cat.jpeg", "jpeg"),
        urlToFile("/cute-puppies.jpeg", "jpeg"),
      ])
    );
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      setFiles((prev) => [...prev, file]);
    });
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({ onDrop });

  useEffect(() => {
    initialState();
  }, []);

  return (
    <div>
      <CustomCursor
        targets={["a", "button", "h1", "h2"]}
        customClass="custom-cursor"
        dimensions={30}
        fill="#000"
        smoothness={{
          movement: 0.2,
          scale: 0.1,
          opacity: 0.2,
        }}
        targetOpacity={0.4}
      />
      <Head>
        <title>Dropbox</title>
      </Head>
      <div className="bg-gray-50 relative overflow-hidden border-b-2">
        <Divider
          className="!absolute inset-y-0 block lg:hidden left-4"
          vertical
        />
        <Divider
          className="!absolute inset-y-0 block lg:hidden right-4"
          vertical
        />
        <Divider
          style={{ left: `calc(${headerDimensions.x}px - 1rem)` }}
          className="!absolute inset-y-0 hidden lg:block z-50"
          vertical
        />
        <Divider
          style={{
            left: `calc(${exampleDimensions.x}px - 1rem)`,
          }}
          className="!absolute inset-y-0 hidden lg:block"
          vertical
        />
        <Divider
          style={{
            left: `calc(${exampleDimensions.x}px + ${exampleDimensions.width}px + 1rem)`,
          }}
          className="!absolute inset-y-0 hidden lg:block z-50"
          vertical
        />
        <header>
          <nav className="flex items-center justify-between max-w-6xl mx-auto px-8 py-6">
            <img
              src="dropbox.png"
              alt="Dropbox Logo"
              className="h-9 sm:h-11 w-auto"
            />
            <ul className="hidden sm:flex items-center space-x-5 text-gray-500">
              <li>
                <a href="https://experience.dropbox.com/contact">Contact</a>
              </li>
              <li>
                <a href="https://dropbox.com/desktop">Download</a>
              </li>
              <li>
                <a href="https://dropbox.com/login">Sign In</a>
              </li>
              <li>
                <a href="https://dropbox.com/register">
                  <Button>
                    Get Started{" "}
                    <span className="text-blue-100">— It's Free</span>
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
          <Divider className="mt-8 lg:mt-16" />
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-8 py-20 lg:py-0">
            <div ref={(ref) => setHeaderRef(ref)} className="max-w-2xl w-full">
              <h1 className="font-bold text-3xl sm:text-4xl leading-tight sm:leading-tight">
                Keep life organized and work <br />
                <span className="text-gray-500">moving, all in one place.</span>
              </h1>
              <p className="text-gray-500 max-w-lg text-base sm:text-lg mt-4">
                Easy to use, reliable, private, and secure. It’s no wonder
                Dropbox is the choice for storing and sharing your most
                important files.
              </p>
              <a className="inline-block" href="https://dropbox.com/plans">
                <Button
                  className="mt-6"
                  color="gray"
                  rightIcon={<IconChevronRight />}
                >
                  Find your plan
                </Button>
              </a>
            </div>
            <aside className="py-4 mt-8 lg:mt-0 max-w-2xl lg:max-w-[30rem] w-full">
              <article
                className="rounded-xl border-2 bg-white"
                ref={(ref) => setExampleRef(ref)}
              >
                <div className="py-1 px-2 border-b-2 space-x-1.5">
                  <button className="inline-flex items-center justify-center rounded-full bg-red-500 h-3 w-3 text-red-800"></button>
                  <button className="inline-flex items-center justify-center rounded-full bg-amber-500 h-3 w-3 text-amber-800"></button>
                  <button className="inline-flex items-center justify-center rounded-full bg-green-500 h-3 w-3 text-green-800"></button>
                </div>
                <div className="flex flex-col h-[30rem]">
                  <div className="p-3 border-b-2 flex items-center justify-between select-none">
                    <div className="flex items-center space-x-2">
                      <img src="folder.svg" className="h-8" />
                      <h4 className="text-gray-500 font-semibold">All Files</h4>
                    </div>
                    <Button
                      onClick={open}
                      color="white"
                      leftIcon={<IconUpload size={20} />}
                    >
                      Upload
                    </Button>
                  </div>
                  <ul>
                    {files.map((file, index) => (
                      <li key={index}>
                        <div className="p-4 border-b-2 w-full flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <img src="file.svg" className="h-7" />
                            <span className="text-gray-500 font-semibold">
                              {file.name}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <button className="text-gray-300">
                              <IconStar size={24} />
                            </button>
                            <span className="text-gray-500">
                              {formatDate(new Date(file.lastModified))}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div {...getRootProps()} className="h-full">
                    <div className="p-4 text-gray-400">
                      <IconCornerLeftUp className="inline mr-2 -mt-2" />
                      Drag files in here to test it out!
                    </div>
                    <input {...getInputProps()} />
                  </div>
                </div>
              </article>
            </aside>
          </div>
        </header>
        <Divider />
        <div className="p-8 max-w-6xl mx-auto bg-gray-50 relative z-40">
          <h3 className="text-gray-400 font-semibold text-lg">
            Integrate with your favorite tools
          </h3>
          <img src="integrations.png" className="grayscale h-12 mt-4" />
        </div>
      </div>
      <main className="border-b-2">
        <div className="grid-paper py-16 -mt-0.5">
          <div className="flex flex-col items-center">
            <img src="dropbox-paper.png" className="h-32 sm:h-40 w-auto" />
            <h2 className="text-3xl sm:text-4xl font-black text-blue-500 text-center mt-4">
              Dropbox works the way you do
            </h2>
            <p className="text-blue-500 text-xl sm:text-2xl text-center mt-2">
              Get to all your files from <u>anywhere</u>, on any <br /> device,
              and share them with <u>anyone</u>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-8 mt-16">
              <Card
                title="Take your docs anywhere"
                description="Save files on your computer, then access them on your phone from the road. Everything you keep in Dropbox is synced automatically to all your devices."
                colorScheme="violet"
              />
              <Card
                title="Send videos quickly"
                description="Send your entire wedding video to family with a simple link. It’s easy to share large files with anyone — even if they don’t have a Dropbox account."
                colorScheme="blue"
              />
              <Card
                title="Keep your photos safe"
                description="Back up vacation photos automatically from your phone or computer. That way, memories are safe as soon as you make them, and you can relive them from any device."
                colorScheme="red"
              />
              <Card
                title="Work on slides together"
                description="Edit a presentation with teammates without emailing files back and forth. When you edit a file in a shared folder, everyone gets the update automatically."
                colorScheme="green"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="px-8 py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-black">
            Get Started{" "}
            <u className="text-blue-500 decoration-wavy underline-offset-4">
              For Free
            </u>
          </h2>
          <p className="text-gray-500 text-lg mt-2">
            2GB of storage + Safe and reliable backups + File sharing
          </p>
          <form className="flex flex-col gap-3 mt-8">
            <input
              className="border-2 px-4 py-2 bg-white rounded-xl"
              type="text"
              placeholder="Full Name"
            />
            <input
              className="border-2 px-4 py-2 bg-white rounded-xl"
              type="text"
              placeholder="Email Address"
            />
            <input
              className="border-2 px-4 py-2 bg-white rounded-xl"
              type="text"
              placeholder="Password"
            />
            <Button
              leftIcon={<IconBolt size={24} />}
              className="!rounded-xl justify-center"
            >
              Sign up for free
            </Button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
