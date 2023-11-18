import Image from 'next/image';
import React from 'react';
import profileCharacter from "@/public/ivaricon.svg";

const AboutCoverSection = () => {
    return (
        <section className="w-full h-[75vh] border-b-2 border-solid border-dark \
                flex flex-row items-center justify-center text-dark">
            <div className="w-1/2 h-full border-r-2 border-solid border-dark \
                    flex justify-center">
                <Image src={profileCharacter} alt="Ivar A. Abusdal"
                    className="w-full h-full object-contain object-center p-16"
                    />
            </div>
            <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
                <h2 className="font-bold capitalize text-6xl">
                    I'm a fullstack developer, illustrator and graphic designer
                </h2>
                <p className="font-medium capitalize mt-4 text-base">
                    I'm a full stack developer with experience in C#, Python,
                    and JavaScript, frameworks such as ASP.NET, React, database
                    solutions such as MS SQL Server and CosmosDB, and cloud providers
                    like Azure. I'm a quick learner and collaborate closely with
                    clients to create efficient, scalable, and user-friendly solutions
                    that solve real-world problems. I also have many years of experience
                    with illustration and graphic design.
                </p>
            </div>
        </section>
    )
}

export default AboutCoverSection;
