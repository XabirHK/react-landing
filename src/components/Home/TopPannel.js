import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function TopPannel() {
  return (
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-4xl text-gray-700">
                নিশ্চিন্তপুর পরিচিতি
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                আমার স্বপ্নগুলো ডানা মেলে {" "}
                <a
                    href=""
                    className="text-gray-700"
                    target="_blank"
                >
                    নিশ্চিন্তপুরে
                </a>
                , যা আমার স্বপ্ন আর বাস্তবের মিশেলে তৈরী একান্ত কল্পরাজ্য। 
                এই কল্পরাজ্যের একটি বড় অংশ জুড়ে রয়েছে  আমার ছেলেবেলায় 
                ফেলে আসা গ্রাম, সেখানে ভাঁট ফুলের গন্ধে ম ম করে বাতাস, 
                নদীর ধারে বাবলা আর জিওলবনের শীতল স্নিগ্ধ ছায়াতলে এক্কাদোক্কা 
                 খেলে চড়ুই, অদূরেই একটি মাছরাঙ্গা লুব্ধ দৃষ্টিতে জলের তল খোঁজে
                  আর মাথার উপর দিয়ে হঠাৎ উড়ে যায় এক ঝাঁক ডাহুক। 
                  সেখানে বেলাশেষের ইন্দ্রজালে আজো মাঠ নদী বন মিলেমিশে 
                  একাকার হয়। অস্থির ব্যস্ত এ সময়ে সারা দিনের ক্লান্তি ভোলার 
                  প্রয়াসে চোখ বুজলে এখনো আমি চলে যায় আমার ছোট্ট গ্রামে, 
                  প্রাণভরে নিঃশ্বাস নিই। সতেজতা যখন পুরো দেহ মন আচ্ছন্ন করে 
                  ফেলে, তারপর ফিরে আসি নতুন কিছু করার উদ্যম আর শক্তি নিয়ে। 
                  আর তারই ফলাফল ভাগাভাগি করে নিই এই সাইবার নিশ্চিন্তপুরের সাথে।
                </p>
                <div className="mt-12">
                {/* <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                    Get started
                </a>
                <a
                    href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    target="_blank"
                >
                    Github Star
                </a> */}
                </div>
            </div>
            </div>
        </div>

        <img
            className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
            src={require("assets/img/pattern_react.png")}
            alt="..."
        />
    </section>
    
  );
}
